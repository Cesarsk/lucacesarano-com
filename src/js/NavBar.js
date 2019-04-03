import React, { Component } from 'react';
import "../css/NavBar.css"

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class='NavBar'>
                <div class='row'>
                    <div class='column'>
                        <div class='column'>
                            ABOUT
                        </div>
                    </div>
                    <div class='column'>
                        <div class='column'>
                            WORK
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
                        <a href='#contact' class='NavBar-link'> CONTACT </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}