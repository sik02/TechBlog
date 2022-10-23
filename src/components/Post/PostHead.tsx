import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'


type PostHeadProps = {
  title: string
  date: string
  categories: string[]
}


const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  /* height: 100%; */
  height: 200px;
  margin: 0 auto;
  padding: 60px 0;
  color: #fff;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
  }
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  /* margin-top: auto; */
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 45px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`

const PostData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    font-weight: 400;
  }
`

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;

  @media (max-width: 768px) {
    height: 300px;
  }
`

//props로 받아 스타일과 함께 넘겨줌
//GatsbyImage 컴포넌트는 기본 적용 인라인 스타일이 존재
//인라인 스타일은 !important 속성이 없으면 스타일 적용 순위에서 밀림
//!important 속성은 사용하면 안좋기 때문에 인라인으로 스타일 값을 넘겨줌

const PostHead: FunctionComponent<PostHeadProps> = function ({
  title,
  date,
  categories,
}) {
  return (
    <PostHeadWrapper>
      <PostHeadInfoWrapper>
        <Title>{title}</Title>
        <PostData>
          <div>{categories.join('/')}</div>
          <div>{date}</div>
        </PostData>
      </PostHeadInfoWrapper>
    </PostHeadWrapper>
  )
}

export default PostHead
