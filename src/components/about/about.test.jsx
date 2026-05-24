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

    const sygnumLink = screen.getByRole('link', { name: /sygnum/i })
    const resumeLink = screen.getByRole('link', { name: /view resume/i })

    expect(sygnumLink).toHaveAttribute('href', 'https://www.sygnum.com/')
    expect(sygnumLink).toHaveAttribute('target', '_blank')
    expect(sygnumLink).toHaveAttribute('rel', 'noopener noreferrer')

    expect(resumeLink).toHaveAttribute('href', 'https://cesarsk.github.io/lucacesarano-resume/LucaCesaranoResume.pdf')
    expect(resumeLink).toHaveAttribute('target', '_blank')
    expect(resumeLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
