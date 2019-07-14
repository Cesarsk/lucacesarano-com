import React, { Component } from 'react';
import "../styles/NavBar.css"
import { Link } from 'react-scroll'

export default class NavBar extends Component {
    state = {
        shadowScroll: '0 0 0',
    }

    listenScrollEvent = e => {
        if (window.scrollY > 120) {
            this.setState({ shadowScroll: '0 0px 0px rgba(0, 0, 0, 0.25), 0px 10px 10px rgba(0, 0, 0, 0.22)' })
        } else {
            this.setState({ shadowScroll: '0 0 0' })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <div style={{ boxShadow: this.state.shadowScroll }} className='NavBar'>
                <div className='row'>
                    <div className='column'>
                        <div className='column'>
                            <div className='item'>
                                <Link
                                    activeClass="active"
                                    to="#about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className='NavBar-link'>ABOUT</Link>
                            </div>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='column'>
                            <div className='item'>
                                <Link
                                    activeClass="active"
                                    to="#work"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className='NavBar-link'>WORK</Link>
                            </div>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='column'>
                            <div className='item'>
                                <a
                                    href="https://medium.com/@luca.cesarano1"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className='NavBar-link'>BLOG</a>
                            </div>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='column'>
                            <div className='item'>
                                <Link
                                    activeClass="active"
                                    to="#contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className='NavBar-link'>CONTACT</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}