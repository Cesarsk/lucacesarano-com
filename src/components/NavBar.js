import React, { Component } from 'react';
import "../styles/NavBar.css"
import {Link} from 'react-scroll'

export default class NavBar extends Component {
    render() {
        return (
            <div className='NavBar'>
                <div className='row'>
                    <div className='column'>
                        <div className='column'>
                            <Link
                                className="NavBar-Link"
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
                            <a className="NavBar-link"
                                href="https://github.com/cesarsk"
                                target="_blank"
                                rel="noopener noreferrer">
                                GITHUB</a>

                        </div>
                    </div>
                    <div className='column'>
                        <div className='column'>
                            <Link
                                className="NavBar-Link"
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
        );
    }
}