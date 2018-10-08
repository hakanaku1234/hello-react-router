import React from 'react'

const Home = (props) => {
  return (
    <div>
      <button onClick={ () => props.history.push('/about') }>click me</button>
      <p>Welcome Home</p>
    </div>
  )
}

export default Home
