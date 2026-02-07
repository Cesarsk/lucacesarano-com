import React, {Component} from 'react';
import { Link } from 'react-scroll'
import './about.css'

function RenderContainer() {
    return (
        <div className="About-row">
            <div className="About-bio-column About-bio-column--center">
                <h1 className="About-hero">Hello</h1>
                <p className="About-lead">
                    I&apos;m <span className="About-text-name">Luca</span>.
                </p>
                <p className="About-body">
                    I work as Head of Platform SRE at{' '}
                    <a className="About-link" href="https://www.sygnum.com/" target="_blank" rel="noopener noreferrer">
                        Sygnum
                    </a>{' '}
                    in Zürich, Switzerland.
                </p>
                <p className="About-body">
                    I lead Platform SRE and focus on reliability, automation, and the tooling that keeps teams moving
                    smoothly. I&apos;ve supported startups and scale-ups through different growth stages and worked with large
                    financial institutions where stability and trust matter.
                </p>
                <div className="About-actions">
                    <a
                        className="Button"
                        href="https://lucacesarano.com/resume"
                        target="_blank"
                        rel="noopener noreferrer">
                        View Resume
                    </a>
                    <Link
                        className="About-secondary-link"
                        to="#contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        Contact
                    </Link>
                </div>
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
