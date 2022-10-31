import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from '../components/Common/GlobalStyle'
import Footer from '../components/Common/Footer'
import Header from '../components/Common/Header'

type SearchProps = {
  title: string
  description: string
  url: string
  children: ReactNode
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const SearchPage: FunctionComponent<SearchProps> = function ({
  title,
  description,
  url,
  children,
}) {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default SearchPage
