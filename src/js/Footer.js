import React, { Component } from 'react';
import '../css/Footer.css'
class Footer extends React.Component {
    render() {
      return (
        <footer className="Footer">
        <p>
          REACH ME OUT @ <a className="Footer-link"
                   href="mailto:luca.cesarano1@gmail.com"
                   rel="noopener noreferrer">
                   LUCA.CESARANO1@GMAIL.COM</a>
        </p>
        </footer>
      );
    }
  }

  export default Footer;