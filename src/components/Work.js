import React, { Component } from 'react';
import '../styles/Work.css'

function RenderContainer() {
  return (
    <div className="Work">
      <div className="Work-section">
        <p>Warning: this section is in progress, do not take it as it is.</p>
        <p>Leader of the project: <a className="Work-link" href="https://play.google.com/store/apps/details?id=com.cesarsk.say_it">Say It! Android Application (~ 27k users, 4.7/5.0 ★)</a>.</p>
        <p>I enjoy developing games and experiment with them using Unity 3D, check out their code on Github.</p>
        <p>I'm getting more and more in ❤ with JavaScript and its libraries.</p>
        <p>Hopefully graduating (C.Eng M.S.) in 2020.</p>
        <br />
        <p>Some of my papers (italian only):</p>
        <div className="Work-list">
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=1WsVjOP9xpIrpVilui2RKrgmnSwNaXYa8">» The Snake Game - A VHDL Version</a>
          <br />
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=15m9ufagojrG0bpe4lWANFg_u9f_oaH4u">» Realtà Aumentata: stato dell’arte delle tecnologie</a>
          <br />
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=0B0mCfgWu1kQeR2hCVTIxUEFaV2s">» QR-Code on Augmented Reality</a> <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://github.com/Cesarsk/Android-QR-Code-on-AR">[Github]</a>
          <br />
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=0B0mCfgWu1kQeeXh6bGJfTG9GV0E">» IA Forecast Prediction</a>
          <br />
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=0B0mCfgWu1kQeeWVPUzY1NlZVSE0">» Database Comics Store</a>
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