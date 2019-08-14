import React, { Component } from 'react';
import '../styles/About.css'
import profilePic from '../resources/profile-pic.jpg';

//https://reactjs.org/warnings/invalid-hook-call-warning.html
/*
function RenderContainer() {
  return (
    <Container>
      <Row className="About-row">
        <Col className="About-column"><img className="profile-picture-about" alt="profile-pic" src={profilePic}></img></Col>
        <Col className="About-column">
          <div className="Inline">
            <span className="About-text-main">HELLO, I'M </span>
            <span className="App-animation-color-cycle">LUCA</span>
          </div>
          <br></br>
          <span className="About-text-subtitle">I'M A COMPUTER ENGINEER</span>
          <br></br>
          <br></br>
          <span className="About-text">I AM A LOVER OF TECHNOLOGY AND PHILOSOPHY</span>
          <br></br>
          <span className="About-text">THAT'S WHY I DREAM TO BECOME THE BEST SOFTWARE ENGINEER.</span>
          <br></br>
          <div className="Inline">
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
*/
function RenderContainer() {
  return (
    <div className="About-row">
      <div className="About-profile-column">
        <img className="About-profile-picture" alt="profile-pic" src={profilePic}></img>
      </div>
      <div className="About-bio-column">
        <div className="Inline">
          <span className="About-text-main">HELLO, I'M </span>
          <span className="About-text-name">LUCA</span>
        </div>
        <br></br>
        <span className="About-text-subtitle">I'M A COMPUTER ENGINEER</span>
        <br></br>
        <br></br>
        <span className="About-text">I AM A LOVER OF TECHNOLOGY AND PHILOSOPHY</span>
        <br></br>
        <span className="About-text">THAT'S WHY I DREAM TO BECOME THE BEST SOFTWARE ENGINEER.</span>
        <br></br>
        <div className="Inline">
          <p className="About-text">FOR ADDITIONAL INFORMATION:
          <a
              className="About-link"
              href="https://drive.google.com/file/d/1j9gbKs6qa3qYqZFFvhucAFdae2V_59ae/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"> HERE IS MY CV.
          </a>
          </p>
          <p className="About-relocate">FREE TO HIRE AND RELOCATE.</p>
        </div>
      </div>
    </div>
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