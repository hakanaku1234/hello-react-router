import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import NoMatch from './components/Error';
// import queryString from 'query-string';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

// import Link from 'react-router-dom/Link';

const User = (props) => {
  // const params = new URLSearchParams(props.location.search);
  // console.log(params.get("name"));
  // console.log(params.get("a"));
  // const values = queryString.parse(props.location.search);
  // console.log(values.name);
  // console.log(values.a);
  // console.log(props.location.state.fromDashboard);
  console.log(props);
  return (
    props.match.params.id === 'rails365' ?
    <Redirect to="/" /> :
    <div>User { props.match.params.id }</div>
  )
}

class App extends Component {
  handleClick = () => {
    console.log(this.props);
  }

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
              <li>
                <NavLink
                  to="/users/rails365"
                  activeStyle={{
                    color: 'green'
                }}>
                  Rails365
                </NavLink>
              </li>
              <li>
                <Link to={{
                  pathname: '/users/rails365',
                  search: '?a=b',
                  hash: '#the-hash',
                  state: { fromDashboard: true }
                }}>
                  pro
                </Link>
              </li>
            </ul>
            <div>
              <button onClick={ () => this.handleClick() }>push</button>
            </div>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route strict exact path="/about" component={ About } />
              <Route path="/about/new" component={ About } />
              <Route path="/home" component={ Home } />
              <Route path="/new_home" render={ (props) => <Home { ...props } name={ "rails365" } /> } />
              <Route path="/users/profile/:id" component={ User } />
              <Redirect from="/users/:id" to="/users/profile/:id" />
              <Route component={ NoMatch } />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
