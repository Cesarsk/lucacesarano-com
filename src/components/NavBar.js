import React, { Component } from 'react';
import "../styles/NavBar.css"
import { Link } from 'react-scroll'

export default class NavBar extends Component {
    render() {
        return (
            <div className='NavBar'>
                <div className='row'>
                    <div className='column'>
                        <div className='column'>
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
                    <div className='column'>
                        <div className='column'>
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
                    <div className='column'>
                        <div className='column'>
                            <a
                                href="https://medium.com/@luca.cesarano1"
                                rel="noopener noreferrer"
                                target="_blank"
                                className='NavBar-link'>BLOG</a>
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
                                className='NavBar-link'>CONTACT</Link>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}