import React from 'react'
import { getAllPosts, getPostBySlug } from '../../content/blog/posts'
import './blog.css'

const formatPostDate = (value) => {
  const parsedDate = new Date(value)

  if (Number.isNaN(parsedDate.getTime())) {
    return value
  }

  return new Intl.DateTimeFormat('en', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(parsedDate)
}

const renderTags = (tags) => {
  if (!tags.length) {
    return null
  }

  return (
    <div className="Blog-tags" aria-label="Post tags">
      {tags.map((tag) => (
        <span key={tag} className="Blog-tag">
          {tag}
        </span>
      ))}
    </div>
  )
}

export default function Blog({ slug }) {
  const posts = getAllPosts()

  if (slug) {
    const activePost = getPostBySlug(slug)

    if (!activePost) {
      return (
        <main className="Blog">
          <section className="Blog-shell">
            <h1 className="Section-title">Blog</h1>
            <p className="Section-intro">I could not find that article.</p>
            <a className="Blog-backLink" href="/blog">
              Back to all notes
            </a>
          </section>
        </main>
      )
    }

    return (
      <main className="Blog">
        <article className="Blog-shell">
          <a className="Blog-backLink" href="/blog">
            All articles
          </a>
          <h1 className="Section-title Blog-title">{activePost.title}</h1>
          <p className="Blog-meta">Published on {formatPostDate(activePost.date)}</p>
          {renderTags(activePost.tags)}
          <div className="Blog-content" dangerouslySetInnerHTML={{ __html: activePost.html }}></div>
        </article>
      </main>
    )
  }

  return (
    <main className="Blog">
      <section className="Blog-shell">
        <h1 className="Section-title">Blog</h1>
        <p className="Section-intro Blog-intro">
          Short notes on reliability, engineering, and things I am learning while building.
        </p>

        <div className="Blog-list">
          {posts.map((post) => (
            <a key={post.slug} className="Blog-card" href={`/blog/${post.slug}`}>
              <h2 className="Blog-cardTitle">{post.title}</h2>
              <p className="Blog-meta">Published on {formatPostDate(post.date)}</p>
              <p className="Blog-summary">{post.summary}</p>
              {renderTags(post.tags)}
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
