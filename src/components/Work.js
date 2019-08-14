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
        <p>Hopefully graduating (C.Eng M.S.) in 2020.</p>
        <br />
        <p>Some of my papers:</p>
        <div className="Work-list">
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=1B6tVaOEgaq67eZunoqTNj5V4ij9FvLh8">» An Example of a MLP Classifier in KNIME <span role="img" aria-label="uk-flag">🇬🇧</span></a>
          <br />
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=18gWN2Y1ZqZV7a_vTIql6PVRg1-roHsNq">» The Snake Game - A VHDL Version <span role="img" aria-label="it-flag">🇮🇹</span></a>
          <br />
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=1LPdytp3k1jIpF9Uf1fjxXnEVZ95y756U">» Realtà Aumentata: stato dell’arte delle tecnologie <span role="img" aria-label="it-flag">🇮🇹</span></a>
          <br />
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=1imjw66FPv2fR67aYJjD18s0RdRON5_jm">» QR-Code on Augmented Reality <span role="img" aria-label="it-flag">🇮🇹</span></a> <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://github.com/Cesarsk/Android-QR-Code-on-AR">[Github]</a>
          <br />
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=16LTihBc0jEOuJJx6WPb9VOJZJtErvZL3">» IA Forecast Prediction <span role="img" aria-label="it-flag">🇮🇹</span></a>
          <br />
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=1pFhrzw8TV-5YxoeZLRTznRxsIXOq5wV6">» Database Comics Store <span role="img" aria-label="it-flag">🇮🇹</span></a>
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