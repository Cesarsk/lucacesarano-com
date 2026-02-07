import React, { Component } from 'react'
import './contact.css'
export default class Contact extends Component {
  render() {
    return (
      <section className="Contact" id={this.props.id}>
        <h2 className="Section-title">Contact</h2>
        <p className="Contact-intro">Open to collaborations and interesting problems.</p>
        <div className="Contact-links">
          <a className="Contact-link Contact-link--row" href="https://www.linkedin.com/in/luca-cesarano-875034141" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="Contact-link Contact-link--row" href="mailto:luca.cesarano1@gmail.com" rel="noopener noreferrer">
            Mail
          </a>
          <a className="Contact-link Contact-link--row" href="https://gitlab.com/lu.cesarano" target="_blank" rel="noopener noreferrer">
            GitLab
          </a>
          <a className="Contact-link Contact-link--row" href="https://www.github.com/cesarsk" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </section>
    )
  }
}
