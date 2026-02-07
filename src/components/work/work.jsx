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

const categoryLabels = {
    demos: 'Demo',
    opensource: 'Open Source',
    publications: 'Publication',
    books: 'Book',
    university: 'University',
}

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
                    <h2 className="Section-title">Selected Works</h2>
                    <p className="Work-intro">Here you will find a curated snapshot of my work.</p>
                    <p className="Work-intro">
                        My resume is available at{' '}
                        <a
                            className="Work-link"
                            href="https://lucacesarano.com/resume"
                            target="_blank"
                            rel="noopener noreferrer">
                            lucacesarano.com/resume
                        </a>
                        .
                    </p>
                    <p className="Work-intro">
                        I enjoy building systems and tools, check out my{' '}
                        <a className="Work-link" href="https://github.com/cesarsk" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>{' '}
                        page.
                    </p>
                    <p className="Work-intro">
                        I share longer thoughts on my{' '}
                        <a className="Work-link" href="https://lucacesarano.medium.com/" target="_blank" rel="noopener noreferrer">
                            Medium blog
                        </a>
                        , including projects, notes, and experiments.
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
                                        const categoryLabel = categoryLabels[item.category]
                                        const metaParts = [categoryLabel, languageName].filter(Boolean)
                                        const metaText = metaParts.join(' · ')

                                        return (
                                            <Card key={item.id} className="Work-card">
                                                <Card.Body>
                                                    <Card.Text as="div" className="Work-card-text">
                                                        <div className="Work-item-title">
                                                            <a
                                                                className="Work-link"
                                                                href={item.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                lang={languageCode}>
                                                                {item.name}
                                                            </a>
                                                        </div>
                                                        {metaText ? (
                                                            <div className="Work-meta">{metaText}</div>
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
