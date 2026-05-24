import React, {Component} from 'react';
import "./navbar.css"
import {Link} from 'react-scroll'

export default class Navbar extends Component {
    menuToggleRef = React.createRef()

    state = {
        hasShadow: false,
        theme: 'light',
        isMenuOpen: false,
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

    handleMenuToggle = () => {
        const menuToggleEl = this.menuToggleRef.current
        const isMenuToggleVisible = menuToggleEl
            && window.getComputedStyle(menuToggleEl).display !== 'none'

        if (!isMenuToggleVisible) {
            return
        }

        this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }))
    }

    closeMenu = () => {
        this.setState({ isMenuOpen: false })
    }

    render() {
        return (
            <div className={this.state.hasShadow ? 'NavBar NavBar--shadow' : 'NavBar'}>
                <div className='NavBar-inner' data-testid="navbar-inner">
                    <button
                        type="button"
                        className="NavBar-hitArea"
                        onClick={this.handleMenuToggle}
                        aria-label="Open navigation menu"
                        data-testid="mobile-hit-area"
                    ></button>
                    <button
                        ref={this.menuToggleRef}
                        type="button"
                        className="NavBar-menuToggle"
                        onClick={(event) => {
                            event.stopPropagation()
                            this.handleMenuToggle()
                        }}
                        aria-label="Toggle menu"
                        aria-expanded={this.state.isMenuOpen}
                        aria-controls="navbar-menu"
                        data-testid="menu-toggle">
                        <svg
                            className="NavBar-menuIcon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true">
                            <path d="M4 7h16" />
                            <path d="M4 12h16" />
                            <path d="M4 17h16" />
                        </svg>
                    </button>
                    <div className="NavBar-balance" aria-hidden="true"></div>
                    <div className='NavBar-links' data-testid="navbar-links">
                        <a
                            href="https://cesarsk.github.io/lucacesarano-resume/LucaCesaranoResume.pdf"
                            rel="noopener noreferrer"
                            target="_blank"
                            className='NavBar-link'>
                            <div className='item'>RESUME</div>
                        </a>

                        <a
                            href="https://lucacesarano.medium.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className='NavBar-link'>
                            <div className='item'>BLOG</div>
                        </a>

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
                    <button
                        type="button"
                        className="ThemeToggle"
                        onClick={this.handleThemeToggle}
                        aria-label="Toggle color theme"
                        title={this.state.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        data-testid="theme-toggle">
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
                </div>
                <div
                    id="navbar-menu"
                    className={this.state.isMenuOpen ? 'NavBar-menu NavBar-menu--open' : 'NavBar-menu'}
                    data-testid="mobile-menu">
                    <a
                        href="https://cesarsk.github.io/lucacesarano-resume/LucaCesaranoResume.pdf"
                        rel="noopener noreferrer"
                        target="_blank"
                        className='NavBar-menuItem'
                        onClick={this.closeMenu}>
                        <span className="NavBar-menuText">Resume</span>
                    </a>
                    <a
                        href="https://lucacesarano.medium.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className='NavBar-menuItem'
                        onClick={this.closeMenu}>
                        <span className="NavBar-menuText">Blog</span>
                    </a>
                    <Link
                        activeClass="active"
                        to="#contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className='NavBar-menuItem'
                        onClick={this.closeMenu}>
                        <span className="NavBar-menuText">Contact</span>
                    </Link>
                    <button
                        type="button"
                        className='NavBar-menuItem NavBar-menuButton'
                        onClick={() => {
                            this.handleThemeToggle()
                            this.closeMenu()
                        }}>
                        <span className="NavBar-menuText">
                            {this.state.theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
                        </span>
                    </button>
                </div>
            </div>
        );
    }
}
