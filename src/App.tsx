import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from "styled-components";
import media from 'styled-media-query';
import { ResetStyle } from './styles/reset';
import Header from './components/Header';
import Pages from './pages/Pages';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <ResetStyle/>
      <BrowserRouter>
        <Header/>
        <Wrapper>
          <Pages/>
        </Wrapper>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

const Wrapper = styled.div`
  padding-top: 140px;
  padding-bottom: 80px;
  background-color: darkgray;
  ${media.lessThan("medium")`
    padding-top: 100px;
  `}
`;

export default App;
