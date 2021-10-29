import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Pages from './pages/Pages';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Pages/>
    </BrowserRouter>
  );
};

export default App;
