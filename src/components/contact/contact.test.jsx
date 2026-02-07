import { render, screen } from '@testing-library/react'
import Contact from './contact.jsx'

describe('Contact', () => {
  it('renders social links with labels', () => {
    render(<Contact />)

    const githubLink = screen.getByRole('link', { name: 'GitHub' })
    const gitlabLink = screen.getByRole('link', { name: 'GitLab' })
    const linkedinLink = screen.getByRole('link', { name: 'LinkedIn' })
    const mailLink = screen.getByRole('link', { name: 'Mail' })

    expect(githubLink).toHaveAttribute('href', 'https://www.github.com/cesarsk')
    expect(gitlabLink).toHaveAttribute('href', 'https://gitlab.com/lu.cesarano')
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/luca-cesarano-875034141')
    expect(mailLink).toHaveAttribute('href', 'mailto:luca.cesarano1@gmail.com')
  })
})
