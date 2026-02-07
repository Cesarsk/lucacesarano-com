import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './work.css'
import data from './data.json'

const sections = [
    { key: 'demos', title: 'Live demos' },
    { key: 'opensource', title: 'Open source projects' },
    { key: 'publications', title: 'Publications' },
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

const bookItems = data.filter((item) => item.category === 'books')

const renderItem = (item, options = {}) => {
    const { includeCategory = true, tags = [] } = options
    const languageLabel = item.lang ? (languageLabels[item.lang] || item.lang.toUpperCase()) : null
    const languageName = item.lang ? (languageNames[item.lang] || item.lang) : null
    const languageCode = item.lang ? languageCodes[item.lang] : undefined
    const categoryLabel = includeCategory ? categoryLabels[item.category] : null
    const metaParts = [categoryLabel, languageName].filter(Boolean)
    const metaText = metaParts.join(' · ')
    const tagList = tags.length ? tags : []

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
                        <div className="Work-meta" aria-label={languageLabel ? `Language: ${languageName}` : undefined}>
                            {metaText}
                        </div>
                    ) : null}
                    {tagList.length ? (
                        <div className="Work-tags">
                            {tagList.map((tag) => (
                                <span key={`${item.id}-${tag}`} className="Work-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    ) : null}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default class Work extends Component {
    render() {
        return (
            <div className="Work" id={this.props.id}>
                <div className="Work-section">
                    <h2 className="Section-title">Selected Works</h2>
                    <p className="Work-intro">Here you will find a curated snapshot of my work.</p>
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
                        . I don&apos;t publish often, but I plan to share more — here&apos;s a list of work I&apos;ve done over the years.
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
                                    {section.items.map((item) => renderItem(item))}
                                </div>
                            </section>
                        )
                    })}
                </div>

                {bookItems.length ? (
                    <div className="Work-books">
                        <h2 className="Section-title">Recommended Books</h2>
                        <p className="Work-intro">
                            A small selection of books that shaped how I think about reliability, software, and systems.
                        </p>
                        <div className="Work-list">
                            {bookItems.map((item) => renderItem(item, { includeCategory: false, tags: item.tags || [] }))}
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}
