import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import '../css/App.css';
import NavBar from '../js/NavBar';
import Footer from '../js/Footer';
import About from '../js/About';
import ScrollableAnchor from 'react-scrollable-anchor';

class App extends Component {
  render() {
    return (
      <div className="App">

        <NavBar />
        
        <img src={logo} className="App-logo" alt="logo"/>

        <ScrollableAnchor id={'about'}>
          <About />
        </ScrollableAnchor>

        <ScrollableAnchor id={'contact'}>
          <Footer />
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
