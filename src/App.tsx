import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from "styled-components";
import media from 'styled-media-query';
import reset from "styled-reset";
import Footer from './components/Footer';
import Header from './components/Header';
import Pages from './pages/Pages';

const App = () => {
  return (
    <>
      <GlobalStyle/>
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

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

const Wrapper = styled.div`
  padding-top: 140px;
  background-color: darkgray;
  ${media.lessThan("medium")`
    padding-top: 100px;
  `}
`;

export default App;
