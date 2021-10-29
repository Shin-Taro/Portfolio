import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skill from './Skill';
import Works from './Works';

const Pages = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skill" component={Skill} />
        <Route exact path="/works" component={Works} />
      </Switch>
    </BrowserRouter>
  );
};

export default Pages;