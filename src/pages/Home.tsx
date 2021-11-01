import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { Wrapper } from '../styles/utility';

const Home = () => {
  return(
    <FirstView color="dark">
      <Title>Wellcome to<br/>　Shintaro's Portfolio</Title>
    </FirstView>
  );
};

const FirstView = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  line-height: 60px;
  font-size: ${props => props.theme.font.size.top.large};
  color: ${props => props.theme.color.white};
  ${media.lessThan("medium")`
    font-size: ${props => props.theme.font.size.top.small};
  `}
`;

export default Home;