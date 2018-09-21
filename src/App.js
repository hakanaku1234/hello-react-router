import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import NoMatch from './components/Error';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'

// import Link from 'react-router-dom/Link';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-intro">
            <ul>
              <li>
                <NavLink
                  exact
                  to="/"
                  activeStyle={{
                    color: 'green'
                }}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/about"
                  activeStyle={{
                    color: 'green'
                }}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/error"
                  activeStyle={{
                    color: 'green'
                }}>
                  Error
                </NavLink>
              </li>
            </ul>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route strict exact path="/about" component={ About } />
              <Route path="/about/new" component={ About } />
              <Route path="/home" component={ Home } />
              <Route path="/new_home" render={ (props) => <Home { ...props } name={ "rails365" } /> } />
              <Route component={ NoMatch } />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
