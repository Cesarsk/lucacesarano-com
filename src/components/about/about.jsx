import React, {Component} from 'react';
import './about.css'
import profilePic from '../../resources/profile-pic.jpg';

function RenderContainer() {
    return (
        <div className="About-row">
            <div className="About-profile-column">
                <img className="About-profile-picture" alt="Portrait of Luca Cesarano" src={profilePic}></img>
            </div>
            <div className="About-bio-column">
                <p className="About-text-main">
                    HELLO, I'M <span className="About-text-name">LOU</span>
                </p>
                <p className="About-text-subtitle">I'M A COMPUTER ENGINEER</p>
                <p className="About-text">Welcome to my space!</p>
                <p className="About-text">
                    I work as a Tech Lead{' '}
                    <a className="About-link" href="https://sre.google/" target="_blank" rel="noopener noreferrer">
                        Site Reliability Engineer
                    </a>
                </p>
                <p className="About-text">
                    AT{' '}
                    <a className="About-link" href="https://www.sygnum.com/" target="_blank" rel="noopener noreferrer">
                        SYGNUM
                    </a>{' '}
                    in Zürich, Switzerland.
                </p>
                <p className="About-text">
                    I <span className="About-heart">❤</span> technology and its impact on the world.
                </p>
            </div>
        </div>
    )
}

export default class About extends Component {
    render() {
        return (
            <div className="About" id={this.props.id}>
                {RenderContainer()}
            </div>
        );
    }
}
