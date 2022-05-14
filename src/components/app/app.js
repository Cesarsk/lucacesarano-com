import React, { Component } from 'react'
import Navbar from '../navbar/navbar'
import About from '../about/about'
import Footer from '../footer/footer'
import Work from '../work/work'
export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <About id="#about" />
        <Work id="#work" />
        <Footer id="#contact" />
      </div>
    );
  }
}

