import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Home from './Home';

import {
  BrowserRouter as Router,
  Route,
  Link
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/error">Error</Link></li>
            </ul>
            <Route path="/" component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/home" component={ Home } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
