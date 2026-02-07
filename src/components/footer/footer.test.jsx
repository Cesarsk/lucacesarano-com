import { render, screen } from '@testing-library/react'
import Footer from './footer.jsx'

describe('Footer', () => {
  it('renders the contact email link', () => {
    render(<Footer />)

    const mailLink = screen.getByRole('link', { name: /luca\.cesarano1@gmail\.com/i })
    expect(mailLink).toHaveAttribute('href', 'mailto:luca.cesarano1@gmail.com')
  })

  it('renders social links with labels', () => {
    render(<Footer />)

    const githubLink = screen.getByLabelText('GitHub')
    const linkedinLink = screen.getByLabelText('LinkedIn')

    expect(githubLink).toHaveAttribute('href', 'https://www.github.com/cesarsk')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')

    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/luca-cesarano-875034141')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
