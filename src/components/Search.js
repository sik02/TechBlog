import React, { FunctionComponent, useState } from 'react'
import styled from '@emotion/styled'
import { graphql, Link, StaticQuery } from 'gatsby'

const Search = (props) => {
  const emptyQuery = ''

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    const query = event.target.value
    const { data } = props
    const posts = data.allMarkdownRemark.edges || []

    const filteredData = posts.filter(post => {
      const { description, title, tags } = post.node.frontmatter
      return (
        (description &&
          description.toLowerCase().includes(query.toLowerCase())) ||
        (title && title.toLowerCase().includes(query.toLowerCase())) ||
        (tags && tags.join('').toLowerCase().includes(query))
      )
    })

    setState({
      query,
      filteredData,
    })
  }
  const renderSearchResults = () => {
    const { query, filteredData } = state
    const hasSearchResults = filteredData && query !== emptyQuery
    const posts = hasSearchResults ? filteredData : []
    return (
      posts &&
      posts.map(({ node }) => {
        const { excerpt } = node

        const { slug } = node.fields
        const { title, date, description } = node.frontmatter
        return (
          <div key={slug} className={'search-article'}>
            <article key={slug}>
              <header>
                <h2 className={'search-title'}>
                  <Link to={slug}>{title}</Link>
                </h2>
              </header>
              <section>
                <p
                  className={'search-description'}
                  dangerouslySetInnerHTML={{
                    __html: description || excerpt,
                  }}
                />
                <p className={'search-date'}>
                  <em>{date}</em>
                </p>
              </section>
            </article>
          </div>
        )
      })
    )
  }
  return (
    <div>
      <input
        className="form-control form-control-sm ml-3 w-75"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={handleInputChange}
      />
      {state.query && (
        <div className={"search-result-container"}>
          {renderSearchResults()}
        </div>
      )}
    </div>
  )
}

// StaticQuery export
export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              frontmatter {
                title
                summary
                date(formatString: "MMMM DD, YYYY")
                categories
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => <Search data={data} {...props} />}
  />
)
