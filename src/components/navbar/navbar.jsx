import React, {Component} from 'react';
import "./navbar.css"
import {Link} from 'react-scroll'

export default class Navbar extends Component {
    state = {
        hasShadow: false,
    }

    listenScrollEvent = e => {
        if (window.scrollY > 120) {
            this.setState({hasShadow: true})
        } else {
            this.setState({hasShadow: false})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <div className={this.state.hasShadow ? 'NavBar NavBar--shadow' : 'NavBar'}>
                <div className='row'>
                    <div className='column'>
                        <div className='column'>
                            <a
                                href="https://lucacesarano.com/resume"
                                rel="noopener noreferrer"
                                target="_blank"
                                className='NavBar-link'>
                                <div className='item'>RESUME</div>
                            </a>

                        </div>
                    </div>

                    <div className='column'>
                        <div className='column'>

                            <a
                                href="https://lucacesarano.medium.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className='NavBar-link'>
                                <div className='item'>BLOG</div>
                            </a>

                        </div>
                    </div>

                    <div className='column'>
                        <div className='column'>
                            <Link
                                activeClass="active"
                                to="#contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className='NavBar-link'>
                                <div className='item'>CONTACT</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
