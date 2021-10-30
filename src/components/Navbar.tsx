import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from 'styled-media-query';

const Navbar = () => {
  return(
      <Wrapper>
        <List>
          <Item>
            <StyledLink to="/">HOME</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/about">ABOUT</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/skill">SKILL</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/works">WORKS</StyledLink>
          </Item>
        </List>
      </Wrapper>
  );
};

const Wrapper = styled.nav`
  margin: 0 auto;
  height: 100%;
  max-width: 800px;
  ${media.lessThan("medium")`
    display: none;
  `}
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  list-style: none;
`;

const Item = styled.li`
  width: 25%;
  height: 100%;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 100%;
  line-height: 80px;
  text-align: center;
  font-size: 18px;
  text-decoration: none;
`;

export default Navbar;