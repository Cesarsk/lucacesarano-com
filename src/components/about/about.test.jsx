import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import About from './about.jsx'

vi.mock('react-scroll', () => ({
  Link: ({ children }) => <span>{children}</span>,
}))

describe('About', () => {
  it('renders the intro headline and lead text', () => {
    render(<About />)

    expect(screen.getByRole('heading', { name: /hello/i })).toBeInTheDocument()
    expect(screen.getByText(/luca/i)).toBeInTheDocument()
  })

  it('links to external references with safe attributes', () => {
    render(<About />)

    const sreLink = screen.getByRole('link', { name: /site reliability engineer/i })
    const sygnumLink = screen.getByRole('link', { name: /sygnum/i })

    expect(sreLink).toHaveAttribute('href', 'https://sre.google/')
    expect(sreLink).toHaveAttribute('target', '_blank')
    expect(sreLink).toHaveAttribute('rel', 'noopener noreferrer')

    expect(sygnumLink).toHaveAttribute('href', 'https://www.sygnum.com/')
    expect(sygnumLink).toHaveAttribute('target', '_blank')
    expect(sygnumLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
