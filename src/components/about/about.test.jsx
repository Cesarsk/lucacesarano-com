import { render, screen } from '@testing-library/react'
import About from './about.jsx'

describe('About', () => {
  it('renders the intro headline and title', () => {
    render(<About />)

    expect(screen.getByText("HELLO, I'M", { exact: false })).toBeInTheDocument()
    expect(screen.getByText("I'M A COMPUTER ENGINEER")).toBeInTheDocument()
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
