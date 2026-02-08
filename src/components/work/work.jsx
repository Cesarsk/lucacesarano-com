import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './work.css'
import data from './data.json'

const sections = [
    { key: 'demos', title: 'Live Demos' },
    { key: 'opensource', title: 'Open Source' },
    { key: 'publications', title: 'Publications' },
    { key: 'university', title: 'University' },
]

const workFilterOptions = [
    { key: 'All', title: 'All' },
    ...sections.map((section) => ({ key: section.key, title: section.title })),
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
const bookTags = Array.from(
    new Set(
        bookItems.flatMap((item) => (item.tags || [])).map((tag) => tag.trim()).filter(Boolean)
    )
).sort((a, b) => a.localeCompare(b))

const renderItem = (item, options = {}) => {
    const { includeCategory = true, tags = [], showDescription = false } = options
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
                    {showDescription && item.description ? (
                        <div className="Work-description">{item.description}</div>
                    ) : null}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default class Work extends Component {
    state = {
        activeWorkFilter: 'All',
        activeBookTag: 'All',
    }

    handleWorkFilterChange = (filter) => {
        this.setState({ activeWorkFilter: filter })
    }

    handleBookTagChange = (tag) => {
        this.setState({ activeBookTag: tag })
    }

    render() {
        const { activeBookTag, activeWorkFilter } = this.state
        const visibleBookItems = activeBookTag === 'All'
            ? bookItems
            : bookItems.filter((item) => (item.tags || []).includes(activeBookTag))
        const visibleSections = activeWorkFilter === 'All'
            ? groupedSections
            : groupedSections.filter((section) => section.key === activeWorkFilter)

        return (
            <div className="Work" id={this.props.id}>
                <div className="Work-section">
                    <h2 className="Section-title">Selected Works</h2>
                    <p className="Section-intro Work-intro">
                        Most of my contributions are private, but here is a curated snapshot of things I&apos;ve built and
                        written over time.
                    </p>
                    <div className="Work-filters" role="tablist" aria-label="Filter work by category">
                        {workFilterOptions.map((option) => (
                            <button
                                key={option.key}
                                type="button"
                                className={
                                    activeWorkFilter === option.key
                                        ? 'Work-filter Work-filter--active'
                                        : 'Work-filter'
                                }
                                onClick={() => this.handleWorkFilterChange(option.key)}>
                                {option.title}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="Work-sections">
                    {visibleSections.map((section) => {
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
                        <h2 className="Section-title">Selected Books</h2>
                        <p className="Section-intro Work-intro">
                            A selection that shaped how I think about reliability, systems, and building software that lasts.
                        </p>
                        <div className="Work-filters" role="tablist" aria-label="Filter books by tag">
                            {['All', ...bookTags].map((tag) => (
                                <button
                                    key={tag}
                                    type="button"
                                    className={
                                        activeBookTag === tag
                                            ? 'Work-filter Work-filter--active'
                                            : 'Work-filter'
                                    }
                                    onClick={() => this.handleBookTagChange(tag)}>
                                    {tag}
                                </button>
                            ))}
                        </div>
                        <div className="Work-list">
                            {visibleBookItems.map((item) =>
                                renderItem(item, {
                                    includeCategory: false,
                                    tags: item.tags || [],
                                    showDescription: true,
                                })
                            )}
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}
