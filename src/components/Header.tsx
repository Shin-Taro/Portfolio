import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <header>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/skill">SKILL</Link>
      <Link to="/works">WORKS</Link>
    </header>
  );
};

export default Header;