import React, { Component } from 'react'
import './contact.css'
export default class Contact extends Component {
  render() {
    return (
      <section className="Contact" id={this.props.id}>
        <h2 className="Section-title">Contacts</h2>
        <p className="Section-intro Contact-intro">
          I&apos;m open to collaborations and interesting problems, and I also offer consulting and mentoring on technical
          topics and career growth. If you just want to chat about tech or exchange ideas, feel free to reach out.
        </p>
        <div className="Contact-links">
          <a className="Contact-link Contact-link--row" href="mailto:luca.cesarano1@gmail.com" rel="noopener noreferrer">
            Mail
          </a>
          <a className="Contact-link Contact-link--row" href="https://www.linkedin.com/in/luca-cesarano-875034141" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="Contact-link Contact-link--row" href="https://gitlab.com/lu.cesarano" target="_blank" rel="noopener noreferrer">
            GitLab
          </a>
          <a className="Contact-link Contact-link--row" href="https://www.github.com/cesarsk" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <div className="Contact-heart" aria-hidden="true">❤</div>
      </section>
    )
  }
}
