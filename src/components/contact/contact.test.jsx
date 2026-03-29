import { render, screen } from '@testing-library/react'
import Contact from './contact.jsx'

describe('Contact', () => {
  it('renders social links with labels', () => {
    render(<Contact />)

    const githubLink = screen.getByRole('link', { name: 'GitHub' })
    const linkedinLink = screen.getByRole('link', { name: 'LinkedIn' })
    const mailLink = screen.getByRole('link', { name: 'Mail' })
    const xLink = screen.getByRole('link', { name: 'X' })

    expect(githubLink).toHaveAttribute('href', 'https://www.github.com/cesarsk')
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/luca-cesarano-875034141')
    expect(mailLink).toHaveAttribute('href', 'mailto:luca.cesarano1@gmail.com')
    expect(xLink).toHaveAttribute('href', 'https://x.com/lucearch')
  })
})
