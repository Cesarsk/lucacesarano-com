import React, { Component } from 'react'
import Navbar from '../navbar/navbar'
import About from '../about/about'
import Contact from '../contact/contact'
import Work from '../work/work'
export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <About id="#about" />
        <Work id="#work" />
        <Contact id="#contact" />
      </div>
    );
  }
}

