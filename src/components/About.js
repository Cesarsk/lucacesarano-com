import React, { Component } from 'react';
import '../styles/About.css'

export default class About extends React.Component {
    render() {
      return (
        <about className="About">
            <h1>HELLO, I'M LUCA</h1>
            <h2>I'M A COMPUTER ENGINEER</h2>
            <h5>I AM A LOVER OF TECHNOLOGY AND PHILOSOPHY, THAT'S WHY I DREAM TO BECOME THE BEST SOFTWARE ENGINEER.</h5>

            <div className="InLine">
            <p>FOR ADDITIONAL INFORMATION:
              <a
                className="About-link"
                href="https://docs.google.com/document/d/177EnbipKrSDezdCW10ok0LZR79PuPTtBrqViSfJT_ZU/"
                target="_blank"
                rel="noopener noreferrer"> HERE IS MY CV.
              </a>
            </p>
            <p className="About-relocate">FREE TO HIRE AND RELOCATE.</p>
            </div>
        </about>
      );
    }
  }