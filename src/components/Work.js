import React, { Component } from 'react';
import '../styles/Work.css'

function RenderContainer() {
  return (
    <div className="Work">
      <div className="Work-section">
        <p className="Work-warning">Warning: this section is in progress, do not take it as it is.</p>
        <p>Leader of the project: <a className="Work-link" href="https://play.google.com/store/apps/details?id=com.cesarsk.say_it">Say It! Android Application (~ 27k users, 4.7/5.0 ★)</a>.</p>
        <p>I enjoy developing games and experiment with them using Unity 3D, check out their code on Github.</p>
        <p>I'm getting more and more in ❤ with JavaScript and its libraries.</p>
        <p>Hopefully graduating (C.Eng. M.S.) in 2020.</p>
        <br />
        <p>Some of my papers:</p>
        <div className="Work-list">
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=1xHqsh4hD99Po2HjKU5iFwpznFfX6_u9L">» An Example of a MLP Classifier in KNIME <span role="img" aria-label="uk-flag">🇬🇧</span></a>
          <br />
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=1b1qHpluzVhwtIL7HD5x64vFUJGQbC34A">» The Snake Game - A VHDL Version <span role="img" aria-label="it-flag">🇮🇹</span></a>
          <br />
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=1AmN-PM7Vc90qQ4wPdh8AtLGtgWvc6kq2">» Realtà Aumentata: stato dell’arte delle tecnologie <span role="img" aria-label="it-flag">🇮🇹</span></a>
          <br />
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=1Pgjcs3dDSMqB8z9VkImFVzOEt75ikmcb">» QR-Code on Augmented Reality <span role="img" aria-label="it-flag">🇮🇹</span></a> <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://github.com/Cesarsk/Android-QR-Code-on-AR">[Github]</a>
          <br />
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=1RrpdGmXn4s97QCU95QrANPEfI2n7Y2cj">» IA Forecast Prediction <span role="img" aria-label="it-flag">🇮🇹</span></a>
          <br />
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=1bLaLkaTrnGeG-7BZR6QrgpxG3WP18zo1">» Database Comics Store <span role="img" aria-label="it-flag">🇮🇹</span></a>
        </div>
      </div>

    </div>
  )
}

export default class Work extends Component {
  render() {
    return (
      <div className="Work" id={this.props.id}>
        {RenderContainer()}
      </div>
    );
  }
}