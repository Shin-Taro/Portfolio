import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
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
      </BrowserRouter>
    </>
  );
};

export default App;
