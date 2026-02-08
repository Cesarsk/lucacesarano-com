import React, {Component} from 'react';
import "./navbar.css"
import {Link} from 'react-scroll'

export default class Navbar extends Component {
    state = {
        hasShadow: false,
        theme: 'light',
    }

    applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
        this.setState({ theme })
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
        const storedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light')
        this.applyTheme(initialTheme)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent)
    }

    handleThemeToggle = () => {
        const nextTheme = this.state.theme === 'dark' ? 'light' : 'dark'
        this.applyTheme(nextTheme)
    }

    render() {
        return (
            <div className={this.state.hasShadow ? 'NavBar NavBar--shadow' : 'NavBar'}>
                <button
                    type="button"
                    className="ThemeToggle"
                    onClick={this.handleThemeToggle}
                    aria-label="Toggle color theme"
                    title={this.state.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
                    {this.state.theme === 'dark' ? (
                        <svg
                            className="ThemeToggle-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true">
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2" />
                            <path d="M12 20v2" />
                            <path d="M4.93 4.93l1.41 1.41" />
                            <path d="M17.66 17.66l1.41 1.41" />
                            <path d="M2 12h2" />
                            <path d="M20 12h2" />
                            <path d="M6.34 17.66l-1.41 1.41" />
                            <path d="M19.07 4.93l-1.41 1.41" />
                        </svg>
                    ) : (
                        <svg
                            className="ThemeToggle-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
                        </svg>
                    )}
                </button>
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
