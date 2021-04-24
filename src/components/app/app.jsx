import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from '../home';
import Schedule from '../schedule';
import './app.scss';

const App = () => {
  return (
    <Router>
      <Switch>
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
