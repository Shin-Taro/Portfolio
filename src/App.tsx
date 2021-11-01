import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { ResetStyle } from './styles/reset';
import { theme } from './styles/theme';
import Header from './components/Header';
import Pages from './pages/Pages';
import Footer from './components/Footer';
import { Wrapper } from './styles/utility';

const App = () => {
  return (
    <>
      <ResetStyle/>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header/>
          <Wrapper color="dark">
            <Pages/>
          </Wrapper>
          <Footer/>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
