// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
      },
    },
  });
};


// Generate a Slug Each Post Data
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({ node, name: 'slug', value: slug });
  }
};

// Generate Post Page Through Markdown Data
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions; // createPage API 불러오기

  // Get All Markdown File For Paging
  const queryAllMarkdownData = await graphql( 
    // 마크다운 데이터의 slug 필드 조회, 날짜와 제목 기준으로 내림차순 정렬한 데이터 받아옴
    `
      {
        allMarkdownRemark(
          sort: {
            order: DESC
            fields: [frontmatter___date, frontmatter___title]
          }
        ) {
          edges { 
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  );

  // Handling GraphQL Query Error
  if (queryAllMarkdownData.errors) { // query error 핸들링 부분
    reporter.panicOnBuild(`Error while running query`);
    return;
  }
    // Import Post Template Component 
    const PostTemplateComponent = path.resolve(  //path 라이브러리를 통해 템플릿 컴포넌트 불러옴
      __dirname,
      'src/templates/post_template.tsx',
    );
  
    // Page Generating Function 
    const generatePostPage = ({ //페이지 생성 함수
      node: {
        fields: { slug },
      },
    }) => {
      const pageOptions = { //객체 옵션
        path: slug,
        component: PostTemplateComponent,
        context: { slug },
      };
  
      createPage(pageOptions);
    };
  
    // Generate Post Page And Passing Slug Props for Query
    queryAllMarkdownData.data.allMarkdownRemark.edges.forEach(generatePostPage);
  };