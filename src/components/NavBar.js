import React, { Component } from 'react';
import "../styles/NavBar.css"
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div class='NavBar'>
                <div class='row'>
                    <div class='column'>
                        <div class='column'>
                        <BrowserRouter>
                        <Link to="/pathLink#about" class='NavBar-link'>ABOUT</Link>
                        </BrowserRouter>                        
                        </div>
                    </div>
                    <div class='column'>
                        <div class='column'>
                        <a className="NavBar-link"
                   href="https://github.com/cesarsk"
                   target="_blank"
                   rel="noopener noreferrer">
                   GITHUB</a>

                        </div>
                    </div>
                    <div class='column'>
                        <div class='column'>
                        <BrowserRouter>
                        <Link to="/pathLink#contact" class='NavBar-link'>CONTACT</Link>
                        </BrowserRouter>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}