import React from 'react';
import styled from 'styled-components';
import { SmallText } from '../styles/utility';
import { icons } from '../styles/images';

const Footer = () => {
  return(
    <FooterWrap>
      <SmallText color="gray">&copy;2021 Shintaro</SmallText>
      <SocialLink href="https://github.com/Shin-Taro" target="_blank" rel="noopener noreferrer">
        <img src={icons.GitHub} alt="GitHub" />
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