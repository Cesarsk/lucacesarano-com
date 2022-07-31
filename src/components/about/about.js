import React, {Component} from 'react';
import './about.css'
import profilePic from '../../resources/profile-pic.jpg';

function RenderContainer() {
    return (
        <div className="About-row">
            <div className="About-profile-column">
                <img className="About-profile-picture" alt="profile-pic" src={profilePic}></img>
            </div>
            <div className="About-bio-column">
                <div className="Inline">
                    <span className="About-text-main">HELLO, I'M </span>
                    <span className="About-text-name">LOU</span>
                </div>
                <br></br>
                <span className="About-text-subtitle">I'M A COMPUTER ENGINEER</span>
                <br></br>
                <span className="About-text">Welcome to my space!</span>
                <br></br>
                <span className="About-text">I work as a Senior <a className="Work-link" href="https://sre.google/">Site Reliability Engineer</a></span>
                <br></br>
                <span className="About-text">AT <a className="Work-link" href="https://www.sygnum.com/">SYGNUM</a> in Zürich, Switzerland.</span>
                <br></br>
                <span className="About-text">I <p style={{color: '#ff2100', display: 'inline'}}>❤</p> technology and its impact on the world.</span>
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
