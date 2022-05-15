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
                <span className="About-text">I work as a Site Reliability Engineer and Cloud Solutions Architect</span>
                <br></br>
                <span className="About-text">AT <a className="Work-link" href="https://www.reply.com/storm-reply/en/">STORM REPLY</a> IN THE FINANCIAL SERVICES UNIT.</span>
                <br></br>
                <span className="About-text">I <p style={{color: '#ff2100', display: 'inline'}}>❤</p> new technologies and their impact on the world.</span>
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
