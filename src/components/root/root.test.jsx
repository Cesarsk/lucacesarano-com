import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import Root, { getBlogSlugFromPath, normalizePathname } from './root.jsx'

vi.mock('../app/app', () => ({
  default: () => <div>Home page</div>,
}))

vi.mock('../navbar/navbar', () => ({
  default: () => <div>Blog navbar</div>,
}))

vi.mock('../blog/blog', () => ({
  default: ({ slug }) => <div>{slug ? `Blog post: ${slug}` : 'Blog index'}</div>,
}))

describe('Root', () => {
  it('normalizes pathnames', () => {
    expect(normalizePathname('/blog/')).toBe('/blog')
    expect(normalizePathname('/')).toBe('/')
  })

  it('extracts blog slugs from blog routes', () => {
    expect(getBlogSlugFromPath('/blog')).toBe('')
    expect(getBlogSlugFromPath('/blog/reliability-over-heroics')).toBe('reliability-over-heroics')
    expect(getBlogSlugFromPath('/#contact')).toBe(null)
  })

  it('renders home app for non-blog routes', () => {
    render(<Root pathname="/" />)
    expect(screen.getByText('Home page')).toBeInTheDocument()
  })

  it('renders blog index route', () => {
    render(<Root pathname="/blog" />)
    expect(screen.getByText('Blog navbar')).toBeInTheDocument()
    expect(screen.getByText('Blog index')).toBeInTheDocument()
  })

  it('renders blog post route', () => {
    render(<Root pathname="/blog/welcome-to-my-notes" />)
    expect(screen.getByText('Blog post: welcome-to-my-notes')).toBeInTheDocument()
  })
})
