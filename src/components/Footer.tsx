import React from 'react';
import styled from 'styled-components';
import GitHubLog from '../images/GitHub.png';

const Footer = () => {
  return(
    <Wrapper>
      <Text>&copy;2021 Shintaro</Text>
      <StyledLink href="https://github.com/Shin-Taro" target="_blank" rel="noopener noreferrer">
        <img src={GitHubLog} alt="GitHub" />
      </StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-color: white;
  border-top: solid 1px black;
`;

const Text = styled.p`
  font-size: 14px;
`;

const StyledLink = styled.a`
  display: block;
  margin-left: 20px;

  & img {
    width: 25px;
  }
`;

export default Footer;