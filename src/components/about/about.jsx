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
                <p className="Section-intro About-body">
                    I&apos;m Head of Platform SRE at{' '}
                    <a className="About-link" href="https://www.sygnum.com/" target="_blank" rel="noopener noreferrer">
                        Sygnum
                    </a>{' '}
                    in Zürich, Switzerland.
                </p>
                <p className="Section-intro About-body">
                    I lead a team of Site Reliability Engineers focused on reliability, automation, and platform tooling
                    that reduces operational load and helps product teams ship safely. I&apos;ve supported startups and
                    scale-ups through multiple growth stages, and I&apos;ve worked in financial environments where stability,
                    security, and trust are non-negotiable.
                </p>
                <p className="Section-intro About-body">
                    I value practical engineering: clear ownership, measurable reliability, and tools people actually
                    use.
                </p>
                <p className="Section-intro About-body">
                    Occasionally, I take on consulting and mentoring, from hands-on platform and SRE work to career
                    guidance for students and professionals. If you&apos;d like to connect, even just for a tech chat, use the
                    Contact button.
                </p>
                <div className="About-actions">
                    <a
                        className="Button"
                        href="https://cesarsk.github.io/lucacesarano-resume/LucaCesaranoResume.pdf"
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
