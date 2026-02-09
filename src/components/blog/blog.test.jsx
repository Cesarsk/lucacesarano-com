import { render, screen } from '@testing-library/react'
import Blog from './blog.jsx'

describe('Blog', () => {
  it('renders blog index with available posts', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /feature sandbox: markdown, fonts, and snippets/i })).toHaveAttribute(
      'href',
      '/blog/feature-sandbox'
    )
    expect(screen.getByRole('link', { name: /why i started this blog/i })).toHaveAttribute(
      'href',
      '/blog/welcome-to-my-notes'
    )
  })

  it('renders a blog post page by slug', () => {
    render(<Blog slug="reliability-over-heroics" />)

    expect(screen.getByRole('heading', { name: 'Reliability Over Heroics' })).toBeInTheDocument()
    expect(screen.getByText(/published on/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'All articles' })).toHaveAttribute('href', '/blog')
  })

  it('renders markdown-rich sandbox content', () => {
    render(<Blog slug="feature-sandbox" />)

    expect(screen.getByRole('heading', { name: 'Feature Sandbox: Markdown, Fonts, and Snippets' })).toBeInTheDocument()
    expect(screen.getByText(/markdown parsing works/i)).toBeInTheDocument()
    expect(screen.getAllByText(/calculateErrorBudget/i).length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: /back to blog index/i })).toHaveAttribute('href', '/blog')
  })
})
