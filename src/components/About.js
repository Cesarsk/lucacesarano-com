import React, { Component } from 'react';
import '../styles/About.css'
import profilePic from '../resources/profile-pic.jpg';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class About extends React.Component {
  render() {
    return (
      <about className="About">
        <Container>
          <Row>
            <Col><img class="profile-picture-about" alt="profile-pic" src={profilePic}></img></Col>
            <Col>
              <span class="About-text-main">HELLO, I'M </span>
              <span>LUCA</span>
              <br></br>
              <span class="About-text-subtitle">I'M A COMPUTER ENGINEER</span>
              <br></br>
              <br></br>
              <span class="About-text">I AM A LOVER OF TECHNOLOGY AND PHILOSOPHY</span>
              <br></br>
              <span class="About-text">THAT'S WHY I DREAM TO BECOME THE BEST SOFTWARE ENGINEER.</span>
              <br></br>
              <div className="InLine">
                <p class="About-text">FOR ADDITIONAL INFORMATION:
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

      </about>
    );
  }
}