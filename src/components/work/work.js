import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import './work.css'
import data from './data.json'

const elements = data.map((elem) => {
    return (
        <Card key={elem.id}>
            <Card.Body>
                <Card.Text>
                    <a className="About-link" href={elem.url} target="_blank" rel="noopener noreferrer">
                        » {elem.lang === "eng" ? <span role="img" aria-label="uk-flag">🇬🇧</span> :
                        <span role="img" aria-label="it-flag">🇮🇹</span>} » {elem.name}</a>
                </Card.Text>
            </Card.Body>
        </Card>
    )
})

export default class Work extends Component {
    render() {
        return (
            <div className="Work">
                <div className="Work-section">
                    <span className="About-text">Here you will find everything about me.</span>
                    <div className="Inline">
                        <p className="About-text">If you're a company that wants to reach out:
                            <a
                                className="About-link"
                                href="https://drive.google.com/file/d/1z_s31i35-ZkyEhBt_xRybwtPPVnbP7J_/view"
                                target="_blank"
                                rel="noopener noreferrer"> CHECK MY CV
                            </a>.
                        </p>
                        <p className="About-relocate"></p>
                    </div>
                    <p>I enjoy developing lots of things, check it out on my
                        <a className="Work-link" href="https://github.com/cesarsk"> Github</a> Page.
                    </p>
                    <p>Check out my <a className="Work-link" href="https://lucacesarano.medium.com/">Medium Blog</a>, I
                        publish cool projects developed in Python and extra nerd stuff.</p>
                    <br/>

                    <p>Try my live demos: </p>
                    <div className="Work-list">
                        <br/>
                    </div>

                    <p>Open Source Projects:</p>
                    <div className="Work-list">
                        {elements.slice(1, 4)}
                        <br/>
                    </div>

                    <p>Publications:</p>

                    <div className="Work-list">
                        {elements.slice(4, 5)}
                        <br/>
                    </div>

                    <p>Book suggestions:</p>

                    <div className="Work-list">
                        {elements.slice(5, 10)}
                        <br/>
                    </div>

                    <p>Some stuff I wrote during University:</p>

                    <div className="Work-list">
                        {elements.slice(10, 13)}
                        {elements.slice(13, 16)}
                    </div>

                </div>
            </div>
        )
    }
}