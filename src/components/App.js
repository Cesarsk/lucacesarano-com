import React, { Component } from 'react'
import logo from '../resources/logo.svg'
import '../styles/App.css'
import NavBar from './NavBar'
import About from './About'
import Footer from './Footer'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <About id="#about" />
        <Footer id="#contact" />
      </div>
    );
  }
}

