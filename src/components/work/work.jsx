import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './work.css'
import data from './data.json'

const sections = [
    { key: 'demos', title: 'Live demos' },
    { key: 'opensource', title: 'Open source projects' },
    { key: 'publications', title: 'Publications' },
    { key: 'books', title: 'Book suggestions' },
    { key: 'university', title: 'University work' },
]

const languageLabels = {
    eng: 'EN',
    ita: 'IT',
}

const languageNames = {
    eng: 'English',
    ita: 'Italian',
}

const languageCodes = {
    eng: 'en',
    ita: 'it',
}

const groupedSections = sections.map((section) => ({
    ...section,
    items: data.filter((item) => item.category === section.key),
}))

export default class Work extends Component {
    render() {
        return (
            <div className="Work" id={this.props.id}>
                <div className="Work-section">
                    <p className="Work-intro">Here you will find everything about me.</p>
                    <p className="Work-intro">
                        My Resume is available at the following link:{' '}
                        <a
                            className="Work-link"
                            href="https://lucacesarano.com/resume"
                            target="_blank"
                            rel="noopener noreferrer">
                            Lucacesarano.com/resume
                        </a>.
                    </p>
                    <p className="Work-intro">
                        I enjoy developing lots of things, check it out on my{' '}
                        <a className="Work-link" href="https://github.com/cesarsk" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>{' '}
                        page.
                    </p>
                    <p className="Work-intro">
                        Check out my{' '}
                        <a className="Work-link" href="https://lucacesarano.medium.com/" target="_blank" rel="noopener noreferrer">
                            Medium blog
                        </a>
                        , I publish cool projects developed in Python and extra nerd stuff.
                    </p>
                </div>

                <div className="Work-sections">
                    {groupedSections.map((section) => {
                        if (!section.items.length) {
                            return null
                        }

                        return (
                            <section key={section.key} className="Work-group">
                                <h3 className="Work-heading">{section.title}</h3>
                                <div className="Work-list">
                                    {section.items.map((item) => {
                                        const languageLabel = item.lang
                                            ? (languageLabels[item.lang] || item.lang.toUpperCase())
                                            : null
                                        const languageName = item.lang ? (languageNames[item.lang] || item.lang) : null
                                        const languageCode = item.lang ? languageCodes[item.lang] : undefined

                                        return (
                                            <Card key={item.id} className="Work-card">
                                                <Card.Body>
                                                    <Card.Text>
                                                        <a
                                                            className="Work-link"
                                                            href={item.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            lang={languageCode}>
                                                            » {item.name}
                                                        </a>
                                                        {languageLabel ? (
                                                            <span className="Work-lang" aria-label={`Language: ${languageName}`}>
                                                                {languageLabel}
                                                            </span>
                                                        ) : null}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })}
                                </div>
                            </section>
                        )
                    })}
                </div>
            </div>
        )
    }
}
