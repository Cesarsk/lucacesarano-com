import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import '../css/App.css';
import NavBar from '../js/NavBar';
import Footer from '../js/Footer';
import ScrollableAnchor from 'react-scrollable-anchor'

const user = {
  firstName: 'Luca',
  lastName: 'Cesarano',
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if(user) {
    return <h1>HELLO, {formatName(user)}!</h1>;
  } else return <h1>HELLO, STRANGER!</h1>;
}

function Welcome(props) {
  return <h1>HELLO, I'M {props.name}</h1>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Welcome name="LUCA" ></Welcome>
            <h2>I'M A COMPUTER ENGINEER</h2>
            <h5 className="App-animation-color-cycle"> REACT IS HELPING ME TO BUILD THIS WEBSITE ❤</h5>
        </header>

        <middle className="App-middle">
        <div className="InLine">
        FOR ADDITIONAL INFORMATION:
          <a
            className="App-link"
            href="https://docs.google.com/document/d/177EnbipKrSDezdCW10ok0LZR79PuPTtBrqViSfJT_ZU/"
            target="_blank"
            rel="noopener noreferrer"> HERE IS MY CV.
          </a>

        </div>
          </middle>

          <ScrollableAnchor id={'contact'}>
            <Footer />
          </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
