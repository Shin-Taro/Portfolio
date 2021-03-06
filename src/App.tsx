import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { ResetStyle } from './styles/reset';
import { theme } from './styles/theme';
import Header from './components/Header';
import Pages from './pages/Pages';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <ResetStyle/>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={theme}>
          <Header/>
          <Pages/>
          <Footer/>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
