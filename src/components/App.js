import React, { Component } from 'react'
import '../styles/App.css'
import NavBar from './NavBar'
import About from './About'
import Footer from './Footer'
import Dots from './Dots'
import Work from './Work'
export default class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Dots />
        <About id="#about" />
        <Work id="#work" />
        <Footer id="#contact" />
      </div>
    );
  }
}

