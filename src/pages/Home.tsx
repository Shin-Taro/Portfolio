import React from "react";
import styled, { keyframes } from "styled-components";
import media from "styled-media-query";
import { Wrapper } from '../styles/utility';

const Home = () => {
  return(
    <FirstView>
      <TopTitle>
        <FadeText>Wellcome to</FadeText>
        <FadeText>&emsp;Shintaro's Portfolio</FadeText>
      </TopTitle>
    </FirstView>
  );
};

const FirstView = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopTitle = styled.h1`
  line-height: 80px;
  letter-spacing: 0.2em;
  font-size: ${props => props.theme.font.size.top.large};
  color: ${props => props.theme.color.white};
  ${media.lessThan("medium")`
    line-height: 60px;
    letter-spacing: normal;
    font-size: ${props => props.theme.font.size.top.small};
  `}
`;

const fadeRight = keyframes`
  0%{
    opacity: 0;
    transform: translateX(-10%);
  }
  100%{
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeLeft = keyframes`
  0%{
    opacity: 0;
    transform: translateX(10%);
  }
  100%{
    opacity: 1;
    transform: translateX(0);
  }
`;

const FadeText = styled.span`
  display: block;
  animation: ${fadeRight} 1s ease-out;
  &:nth-child(2){
    animation: ${fadeLeft} 1s ease-out;
  }
`;

export default Home;