import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { BsSearch } from 'react-icons/bs'
import {Link} from 'gatsby'

const Headers = styled.div`
  height: 60px;
  background: #35363a;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 5px #35363a;
  margin-bottom: 2px;
  position: sticky;
  z-index: 999;
  top: 0;
`

const HeaderContainer = styled.div`
  height: 60px;
  background: #35363a;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
`

const LogoContainer = styled.div`
  width: 210px;
  display: flex;
  margin: 0;
  align-items: center;
`

const Logo = styled.a`
  color: #fff;
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  font-weight: bold;
`

const SearchBarContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  align-items: center;
`

const SearchBar = styled.input`
  height: 40px;
  width: 200px;
  border: none;
  background: #fff;
  outline: none;
  color: black;
  caret-color: white;
  border-bottom: 2px solid black;
  font-size: 15px;
  /* margin: 24px 0 0 20px; */
`

const Button = styled(Link)`
  background: transparent;
  /* margin-top: 35px;
  margin-left: 10px; */
  color: #fff;
  /* right: 30px; */
  font-size: 18px;
  border: none;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`

// const SearchBar = styled.div`
//   color: #fff;
//   display: flex;
//   justify-content: center;
//   font-size: 1.5rem;
//   align-items: center;
// `

const Header: FunctionComponent = function () {
  return (
    <>
      <Headers>
        <HeaderContainer>
          <LogoContainer>
            <Logo href="/">Sling.blog</Logo>
          </LogoContainer>
          <SearchBarContainer>
            {/* <label htmlFor="search"></label>
            <SearchBar
              name="search"
              value=""
              type="text"
              placeholder="   Search"
            ></SearchBar> */}
            <Button to='/search'>
              <BsSearch size={24}/>
            </Button>
          </SearchBarContainer>
        </HeaderContainer>
      </Headers>
    </>
  )
}

export default Header
