import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

type LinkItem = {
  id: number,
  to: string,
  page: string,
}

type Props = {
  links: LinkItem[]
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
    <MenuWrapper>
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
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
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
  background-color: ${props => props.theme.color.dark};

  &::before{
    content: "";
    position: absolute;
    top: -10px;
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.color.dark};
  }
  &::after{
      content: "";
      position: absolute;
      top: 10px;
      display: inline-block;
      width: 100%;
      height: 100%;
      background-color: ${props => props.theme.color.dark};
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

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const ModalContent = styled.div`
  position: absolute;
  top: 10px;
  right: 2%;
  width: 120px;
  height: auto;
  padding: 30px 0;
  background-color: ${props => props.theme.color.white};
  border-radius: 15px;
  box-shadow: ${props => props.theme.boxShadow.primary};
  animation: ${fadeIn} 0.2s linear;
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
  font-size: ${props => props.theme.font.size.primary.small};
  color: ${props => props.theme.color.gray};
  text-decoration: none;
`;

export default NavMenu;