import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PostFrontmatterType } from 'types/PostItem.types'

type PostItemProps = PostFrontmatterType & { link: string }

type CategoryItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

const PostItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  height: 300px;
  color: #fff;
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
`

const Title = styled(Link)`
  display: -webkit-box;
  overflow: hidden;
  margin-top: 1rem;
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 32px;
  font-weight: 700;
  color: #fff;

  &:hover{
    text-decoration: underline;
    color: #D8D8D8;
  }
`

const DateWrapper = styled.div`
  height: 20px;
  margin-top: auto;
`

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
`

// const CategoryItem = styled.div`
//   margin-right: 0.6rem;
//   padding: 0.5rem 1rem;
//   border-radius: 1rem;
//   /* background: #d8d8d8; */
//   background: #000;
//   font-size: 1rem;
//   font-weight: 700;
//   color: #fff;
// `

const CategoryItem = styled(({ active, ...props}: GatsbyLinkProps) => (
  <Link {...props} /> 
))<CategoryItemProps>`
  margin-right: 0.6rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  /* background: #d8d8d8; */
  background: #000;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
`

const SummaryWrapper = styled.div`
  margin-top: 1rem;
  height: 120px;
`
const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
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
      <PostItemWrapper>
        {/* <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" /> */}
        <PostItemContent>
          <Title to={link}>{title}</Title>
          <SummaryWrapper>
            <Summary>{summary}</Summary>
          </SummaryWrapper>
          <DateWrapper>
            <Date>{date}</Date>
          </DateWrapper>
          <BottomWrapper>
            <Category>
              {categories.map(category => (
                <CategoryItem to={`/?category=${category}`}active={true} key={category}>{category}</CategoryItem>
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
