import React from 'react'
import { withRouter } from 'react-router'

const Hello = (props) => {
  return (
    <div><button onClick={ () => props.history.push('/about') }>Hello</button></div>
  )
}

const WithRouterHello = withRouter(Hello);

const Home = (props) => {
  return (
    <div>
      <button onClick={ () => props.history.push('/about') }>click me</button>
      <p>Welcome Home</p>
      <WithRouterHello />
    </div>
  )
}

export default Home
