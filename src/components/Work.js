import React, { Component } from 'react';
import '../styles/Work.css'

function RenderContainer() {
  return (
    <div className="Work">
      <div className="Work-section">
      <div className="Inline">
          <p className="About-text">FOR ADDITIONAL INFORMATION:
          <a
              className="About-link"
              href="https://drive.google.com/file/d/1B9mAfi38EWLkLXPKlhfG_-R2kZbqxMCe/"
              target="_blank"
              rel="noopener noreferrer"> CHECK MY CV
          </a> (I UPDATE IT PERIODICALLY).
          </p>
          <p className="About-relocate"></p>
        </div>
        <p>I enjoy developing lots of things, check it out on my <a className="Work-link" href="https://github.com/cesarsk">Github</a> Page.</p>
        <p>I'm getting more and more in <p style={{ color: '#ff2100', display: 'inline' }}>❤</p> with Python, Devops, and IAAS.</p>
        <p>Check out my <a className="Work-link" href="https://medium.com/@luca.cesarano1">Blog</a>, I'm publishing some cool projects developed in Python and extra nerd stuff.</p>
        <br />
        <p>Try my live demos: </p>
        <div className="Work-list">
          <a className="Work-link" rel="noopener noreferrer" target="_blank"
            href="https://cesarsk.github.io/AI-GA-on-MAS/">» An Application of Genetic Algorithms (GA) to a Multi-Agent-System <span role="img" aria-label="uk-flag">🇬🇧</span></a>
          <br />
          <a className="Work-link" rel="noopener noreferrer" target="_blank"
            href="https://gitlab.com/lu.cesarano/lucacesarano-com">» This CI/CD enabled Website <span role="img" aria-label="uk-flag">🇬🇧</span></a>
          <br />
        </div>
        <br />

        <p>Alfred - our Super AI:</p>
        <div className="Work-list">
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://github.com/FerrariAndrea/AlfredTheRealButler">» Alfred - The Cyber Butler <span role="img" aria-label="uk-flag">🇬🇧</span></a>
        </div>
        <br />

        <p>Say It! App</p>
        <div className="Work-list">
          <a className="Work-link" href="https://play.google.com/store/apps/details?id=com.cesarsk.say_it"> Say It! For Android (~ 30k users, 4.7/5.0 <span role="img" aria-label="uk-flag">★</span>) <span role="img" aria-label="uk-flag">🇬🇧</span></a>
        </div>
        <br />

        <p>Some stuff I wrote during University (2013-2020):</p>
        <div className="Work-list">
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1kyY_U1fVYOItwn51I720NJVn4jfcuIEY/view">» An application of Genetic Algorithms to a Multi-Agent-System <span role="img" aria-label="uk-flag">🇬🇧</span></a>
          <br />
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1doKws8vu9DOB_twX7VU5cpSJXYQgMmHb/view">» [Full] Simulation of a Project Proposal for VERTIS <span role="img" aria-label="it-flag">🇮🇹</span></a>
          <br />
          <a className="Work-link" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1hvek738hk9ptWqdAyPyQ3CA-yAiKbzDi/view">» [Keynote] Simulation of a Project Proposal for VERTIS <span role="img" aria-label="it-flag">🇮🇹</span></a>
          <br />
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
