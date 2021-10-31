import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
import media from 'styled-media-query';
import { ResetStyle } from './styles/reset';
import { theme } from './styles/theme';
import Header from './components/Header';
import Pages from './pages/Pages';
import Footer from './components/Footer';

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

const Wrapper = styled.div`
  margin-top: ${props => props.theme.layout.height.head.large};
  margin-bottom: ${props => props.theme.layout.height.foot.large};
  ${media.lessThan("medium")`
    margin-top: ${props => props.theme.layout.height.head.small};
  `}
`;

export default App;
