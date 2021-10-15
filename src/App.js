import React from 'react'
import Navbar from './components/Navbar'
import {Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Activities from './components/Activities'
import About from './components/About'
import Forum from './components/Forum'
import Projects from './components/Projects'
import Team from './components/Team'

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Projects" component={Projects} />
      <Route exact path="/Activities" component={Activities} />
      <Route exact path="/Team" component={Team}/>
      <Route exact path="/Forum" component={Forum} />
    </div>
  )
}

export default App
