import React from 'react';
import styled from 'styled-components';
import { Text } from '../styles/utility';
import GitHubLog from '../images/GitHub.png';

const Footer = () => {
  return(
    <FooterWrap>
      <Text>&copy;2021 Shintaro</Text>
      <SocialLink href="https://github.com/Shin-Taro" target="_blank" rel="noopener noreferrer">
        <img src={GitHubLog} alt="GitHub" />
      </SocialLink>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
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

const SocialLink = styled.a`
  display: block;
  margin-left: 20px;

  & img {
    width: 25px;
  }
`;

export default Footer;