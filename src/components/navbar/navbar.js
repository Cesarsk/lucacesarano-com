import React, {Component} from 'react';
import "./navbar.css"
import {Link} from 'react-scroll'

export default class Navbar extends Component {
    state = {
        shadowScroll: '0 0 0',
    }

    listenScrollEvent = e => {
        if (window.scrollY > 120) {
            this.setState({shadowScroll: '0 0px 0px rgba(0, 0, 0, 0.25), 0px 10px 10px rgba(0, 0, 0, 0.22)'})
        } else {
            this.setState({shadowScroll: '0 0 0'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <div style={{boxShadow: this.state.shadowScroll}} className='NavBar'>
                <div className='row'>
                    <div className='column'>
                        <div className='column'>
                            <a
                                href="https://drive.google.com/file/d/1z_s31i35-ZkyEhBt_xRybwtPPVnbP7J_/view"
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