import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

type CategoryItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    // 프로퍼티 이름은 문자열, 프로퍼티 값은 숫자임을 나타내는 타입 표기 방법
    [key: string]: number
  }
}

const RelativeWrapper = styled.div`
  position: relative;
`

const AsideWrapper = styled.aside`
  position: absolute;
  left: 77%;
  top: 30px;
  width: 200px;
  height: 100px;
  font-size: 16px;
`

const SideTagList = styled.div`
  margin-bottom: 25px;
  font-weight: bold;
  color: #fff;
`
const TagItem =  styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #fff;
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <RelativeWrapper>
      <AsideWrapper>
        <SideTagList>Tag List</SideTagList>
            {Object.entries(categoryList).map(([name, count]) => (
              <TagItem
                to={`/?category=${name}`}
                active={name === selectedCategory}
                key={name}
              >
                {name} ({count})
              </TagItem>
            ))}  
      </AsideWrapper>
    </RelativeWrapper>
  )
}
export default CategoryList
