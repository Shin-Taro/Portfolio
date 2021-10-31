import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from 'styled-media-query';
import { LinkList } from '../Types';

type Props = {
  links: LinkList
}

const Navbar = ({links}:Props) => {
  const renderLinks = (): JSX.Element[] => {
    const list: JSX.Element[] = links.map(item => {
      return(
        <Item key={item.id}>
          <StyledLink to={item.to}>{item.page}</StyledLink>
        </Item>
      );
    });
    return list
  };

  return(
      <Wrapper>
        <List>
          {renderLinks()}
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