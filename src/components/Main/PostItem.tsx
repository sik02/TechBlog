import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { PostFrontmatterType } from 'types/PostItem.types'


type PostItemProps = PostFrontmatterType & { link: string, ImageIn: boolean }

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: 0.3s box-shadow;
  /* background: red; */
  cursor: pointer;
  height: 300px;


  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
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
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 32px;
  font-weight: 700;
`

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
`

const CategoryItem = styled.div`
  margin: 2.5px 5px;
  padding: 3px 5px;
  border-radius: 3px;
  background: black;
  font-size: 14px;
  font-weight: 700;
  color: white;
`

const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.8;
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
  ImageIn,
}) {
  ImageIn = false
  const logo = require('../../../contents/logo.jpg');
  return (
    <PostItemWrapper to={link}>
      <ThumbnailImage image={ ImageIn ? gatsbyImageData : logo} alt="Post Item Image" />
      <PostItemContent>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Category>
          {categories.map(category => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </Category>
        <Summary>{summary}</Summary>
      </PostItemContent>
    </PostItemWrapper>
  )
}

export default PostItem
