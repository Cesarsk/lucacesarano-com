import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import Navbar from './navbar.jsx'

vi.mock('react-scroll', () => ({
  Link: ({ children }) => <span>{children}</span>,
}))

describe('Navbar', () => {
  it('renders the primary navigation items', () => {
    render(<Navbar />)

    expect(screen.getByText('RESUME')).toBeInTheDocument()
    expect(screen.getByText('BLOG')).toBeInTheDocument()
    expect(screen.getByText('CONTACT')).toBeInTheDocument()
  })

  it('links to resume and blog in new tabs', () => {
    render(<Navbar />)

    const resumeLink = screen.getByText('RESUME').closest('a')
    const blogLink = screen.getByText('BLOG').closest('a')

    expect(resumeLink).toHaveAttribute('href', 'https://lucacesarano.com/resume')
    expect(resumeLink).toHaveAttribute('target', '_blank')
    expect(resumeLink).toHaveAttribute('rel', 'noopener noreferrer')

    expect(blogLink).toHaveAttribute('href', 'https://lucacesarano.medium.com/')
    expect(blogLink).toHaveAttribute('target', '_blank')
    expect(blogLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('toggles mobile menu state when hit area is clicked', () => {
    const originalGetComputedStyle = window.getComputedStyle
    window.getComputedStyle = vi.fn(() => ({ display: 'inline-flex' }))

    render(<Navbar />)

    const menu = screen.getByTestId('mobile-menu')
    const hitArea = screen.getByTestId('mobile-hit-area')

    expect(menu.className).not.toContain('NavBar-menu--open')
    fireEvent.click(hitArea)
    expect(menu.className).toContain('NavBar-menu--open')
    fireEvent.click(hitArea)
    expect(menu.className).not.toContain('NavBar-menu--open')

    window.getComputedStyle = originalGetComputedStyle
  })
})
