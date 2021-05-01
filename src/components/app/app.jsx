import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from '../home';
import Schedule from '../schedule';
import Logistics from '../logistics';
import Story from '../story';
import FAQ from '../faq';
import Nav from '../nav';
import './app.scss';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/faq">
          <FAQ />
        </Route>
        <Route path="/story">
          <Story />
        </Route>
        <Route path="/logistics">
          <Logistics />
        </Route>
        <Route path="/schedule">
          <Schedule />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
