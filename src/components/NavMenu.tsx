import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from 'styled-media-query';
import { LinkList } from '../types';

type Props = {
  links: LinkList
}

const NavMenu = ({links}:Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  const handleOnClick = ():void => {
    setIsOpen(!isOpen);
  };

  return(
    <Wrapper>
      <Box>
        <Hamburger onClick={() => handleOnClick()}/>
      </Box>
      <Modal $isOpen={isOpen} onClick={() => handleOnClick()}>
        <ModalContent>
          <nav>
            <ul>
              {renderLinks()}
            </ul>
          </nav>
        </ModalContent>
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  position: relative;
  ${media.lessThan("medium")`
    display: block;
  `}
`;

const Box = styled.div`
  position: fixed;
  top: 10px;
  right: 2%;
  width: 50px;
  height: 50px;
  padding: 10px;
`;

const Hamburger = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
  width: 30px;
  height: 4px;
  background-color: black;

  &::before{
    content: "";
    position: absolute;
    top: -10px;
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: black;
  }
  &::after{
      content: "";
      position: absolute;
      top: 10px;
      display: inline-block;
      width: 100%;
      height: 100%;
      background-color: black;
    }
`;

const Modal = styled.div<{$isOpen : boolean}>`
  display: ${({$isOpen}) => $isOpen ? "block" : "none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 10px;
  right: 2%;
  width: 120px;
  height: auto;
  padding: 30px 0;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
`;

const Item = styled.li`
  &:not(:first-child){
    margin-top: 20px;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 18px;
  text-decoration: none;
`;

export default NavMenu;