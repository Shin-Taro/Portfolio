import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Footer from './components/Footer';
import Header from './components/Header';
import Pages from './pages/Pages';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Header/>
        <Pages/>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
