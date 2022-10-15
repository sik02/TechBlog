import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from 'components/Main/ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  width: 100%;
  /* background-image: linear-gradient(60deg, #29323c 0%, #485563 100%); */
  background: #35363a;
  color: #fff;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-start; */
  width: 768px;
  height: 300px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`
const ProfileWrapper = styled.div`
  display: flex;
`

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`

const SubTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #eee;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 20px;
  font-weight: 700;
  color: #eee;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <ProfileWrapper>
          <LeftContainer>
            <ProfileImage profileImage={profileImage} />
          </LeftContainer>
          <RightContainer>
            <SubTitle>@ Slingv</SubTitle>
            <Title>꾸준한 성장을 위한 기록</Title>
          </RightContainer>
        </ProfileWrapper>
      </Wrapper>
    </Background>
  )
}

export default Introduction
