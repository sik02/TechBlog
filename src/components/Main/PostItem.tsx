import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { PostFrontmatterType } from 'types/PostItem.types'

type PostItemProps = PostFrontmatterType & { link: string }

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  /* box-shadow: 0 0 8px rgba(0, 0, 0, 0.15); */
  /* transition: 0.3s box-shadow; */
  /* background: red; */
  cursor: pointer;
  height: 300px;
  color: #fff;
  /* border-top: 1px solid red;
  border-bottom: 1px solid red; */

  /* &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  } */
`

const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
`

const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  /* background: red; */
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: 1rem;
  /* margin-bottom: 3px; */
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 32px;
  font-weight: 700;
  color: #fff;
`

const DateWrapper = styled.div`
  height: 20px;
  /* margin-top: 5rem; */
  margin-top: auto;
`

const Date = styled.div`
  /* opacity: 0.7; */
  /* margin-top: auto; */
  /* margin-bottom: 1rem; */
  font-size: 14px;
  font-weight: 400;
  /* align-items: center;
  justify-content: center; */
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* margin-top: 1rem; */
  /* margin-top: 10px; */
  /* margin: 10px -5px; */
`

const CategoryItem = styled.div`
  /* margin: 2.5px 5px; */
  margin-right: 0.6rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background: #d8d8d8;
  font-size: 1rem;
  font-weight: 700;
  color: white;
`

const SummaryWrapper = styled.div`
  margin-top: 1rem;
  height: 120px;
`
const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  /* margin-top: auto; */
  margin-top: 0.4rem;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-size: 16px;
  line-height: 22px;
`

const BottomWrapper = styled.div`
  display: flex;
  margin-top: auto;
  /* margin-bottom: 1rem; */
`

const Line = styled.hr`
  width: 768px;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #adb5bd;
`

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) {
  return (
    <>
      <PostItemWrapper to={link}>
        {/* <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" /> */}
        <PostItemContent>
          <Title>{title}</Title>
          <SummaryWrapper>
            <Summary>{summary}</Summary>
          </SummaryWrapper>
          <DateWrapper>
            <Date>{date}</Date>
          </DateWrapper>
          <BottomWrapper>
            <Category>
              {categories.map(category => (
                <CategoryItem key={category}>{category}</CategoryItem>
              ))}
            </Category>
          </BottomWrapper>
        </PostItemContent>
      </PostItemWrapper>
      <Line />
    </>
  )
}

export default PostItem
