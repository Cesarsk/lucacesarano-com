import React, { Component } from 'react';
import '../styles/About.css'
import profilePic from '../resources/profile-pic.jpg';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//https://reactjs.org/warnings/invalid-hook-call-warning.html

function RenderContainer() {
  return (
    <Container >
      <Row>
        <Col><img className="profile-picture-about" alt="profile-pic" src={profilePic}></img></Col>
        <Col>
          <span className="About-text-main">HELLO, I'M </span>
          <span className="App-animation-color-cycle">LUCA</span>
          <br></br>
          <span className="About-text-subtitle">I'M A COMPUTER ENGINEER</span>
          <br></br>
          <br></br>
          <span className="About-text">I AM A LOVER OF TECHNOLOGY AND PHILOSOPHY</span>
          <br></br>
          <span className="About-text">THAT'S WHY I DREAM TO BECOME THE BEST SOFTWARE ENGINEER.</span>
          <br></br>
          <div className="InLine">
            <p className="About-text">FOR ADDITIONAL INFORMATION:
          <a
                className="About-link"
                href="https://docs.google.com/document/d/177EnbipKrSDezdCW10ok0LZR79PuPTtBrqViSfJT_ZU/"
                target="_blank"
                rel="noopener noreferrer"> HERE IS MY CV.
          </a>
            </p>
            <p className="About-relocate">FREE TO HIRE AND RELOCATE.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default class About extends Component {
  render() {
    return (
      <div className="About" id={this.props.id}>
        {RenderContainer()}
      </div>
    );
  }
}