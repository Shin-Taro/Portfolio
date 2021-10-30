import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Navbar from './Navbar';
import NavMenu from './NavMenu';

const Header = () => {
  return(
    <Wrapper>
      <Title>Shintaro's Portfolio</Title>
      <Navbar/>
      <NavMenu/>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 80px;
  background-color: white;
  ${media.lessThan("medium")`
    height: 70px;
  `}
`;

const Title = styled.h1`
  display: none;
  margin-left: 20px;
  line-height: 70px;
  font-size: 18px;
  ${media.lessThan("medium")`
    display: block;
  `}
`;

export default Header;