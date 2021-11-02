import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Navbar from './Navbar';
import NavMenu from './NavMenu';
import { SubTitle } from '../styles/utility';

const Header = () => {
  const links = [
    {
      id: 1,
      to: "/",
      page: "HOME",
    },
    {
      id: 2,
      to: "/about",
      page: "ABOUT",
    },
    {
      id: 3,
      to: "/skill",
      page: "SKILL",
    },
    {
      id: 4,
      to: "/works",
      page: "WORKS",
    },
  ];

  return(
    <HeaderWrap>
      <HeaderTitle color="gray">Shintaro's Portfolio</HeaderTitle>
      <Navbar links={links} />
      <NavMenu links={links} />
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: ${props => props.theme.layout.height.head.large};
  background-color: ${props => props.theme.color.white};
  ${media.lessThan("medium")`
    height: ${props => props.theme.layout.height.head.small};
  `}
`;

const HeaderTitle = styled(SubTitle)`
  display: none;
  margin-left: 20px;
  line-height: 70px;
  text-align: left;
  ${media.lessThan("medium")`
    display: block;
  `}
`;

export default Header;