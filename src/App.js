import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Vip from './Vip';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Route path="/" component={ Vip } />
          <Route path="/about" component={ About } />
          <Route path="/vip" component={ Vip } />
        </div>
      </Router>
    );
  }
}

export default App;
