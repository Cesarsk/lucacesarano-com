import React, { Component } from 'react';
import './footer.css'
import Socialbadge from '../socialbadge/socialbadge.js'
import socials from '../socialbadge/socials.js'

const socialComponents = socials.map(social => <Socialbadge key={social.id} link={social.link} path={social.path} />)

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer" id={this.props.id}>
        <p>
          <svg
            className='Footer-mail-icon'
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
          </svg>
          <span className='Footer-mail'><span className="Footer-reach-text">REACH ME OUT @ </span><a className="Footer-link"
            href="mailto:luca.cesarano1@gmail.com"
            rel="noopener noreferrer">
            LUCA.CESARANO1@GMAIL.COM</a>
            </span>
        </p>
        <div className = 'Footer-socials'>
          {socialComponents}
        </div>
        <div className = 'Footer-copyright'>
          MADE WITH <p style={{ color: '#ff2100', display: 'inline' }}>❤</p> USING <a className="Footer-link" href="https://reactjs.org/">REACT</a>
        </div>
      </div>
    );
  }
}