import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import media from 'styled-media-query';

type LinkItem = {
  id: number,
  to: string,
  page: string,
}

type Props = {
  links: LinkItem[]
}

const Navbar = ({links}:Props) => {
  const location = useLocation();

  const renderLinks = (): JSX.Element[] => {
    const list: JSX.Element[] = links.map(item => {
      let current: boolean = false;
      if(location.pathname === item.to){
        current = true;
      }
      return(
        <Item key={item.id}>
          <StyledLink data-current={current} to={item.to}>{item.page}</StyledLink>
        </Item>
      );
    });
    return list
  };

  return(
      <NavWrapper>
        <List>
          {renderLinks()}
        </List>
      </NavWrapper>
  );
};

const NavWrapper = styled.nav`
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
  position: relative;
  width: 100%;
  height: 100%;
  line-height: ${props => props.theme.layout.height.head.large};
  text-align: center;
  font-size: ${props => props.theme.font.size.subTitle.small};
  color: ${props => props.theme.color.gray};;
  text-decoration: none;

  &[data-current="true"]{
    &::after{
      content: "";
      display: inline-block;
      position: absolute;
      top: calc(100% - 8px);
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 5px;
      background-color: ${props => props.theme.color.gray};
      border-radius: 50%;
    }
  }
`;

export default Navbar;