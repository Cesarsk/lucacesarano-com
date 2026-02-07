import { render, screen } from '@testing-library/react'
import Work from './work.jsx'

describe('Work', () => {
  it('renders all work section headings', () => {
    render(<Work />)

    expect(screen.getByText('Live demos')).toBeInTheDocument()
    expect(screen.getByText('Open source projects')).toBeInTheDocument()
    expect(screen.getByText('Publications')).toBeInTheDocument()
    expect(screen.getByText('University work')).toBeInTheDocument()
    expect(screen.getByText('Recommended Books')).toBeInTheDocument()
  })

  it('renders sample work items with links', () => {
    render(<Work />)

    const demoItem = screen.getByText(/Genetic Algorithms \(GA\)/i)
    const bookItem = screen.getByText(/Google SRE Books/i)
    const publicationItem = screen.getByText(/IEEE ACCESS/i)

    expect(demoItem.closest('a')).toHaveAttribute('href', 'https://cesarsk.github.io/AI-GA-on-MAS/')
    expect(bookItem.closest('a')).toHaveAttribute('href', 'https://sre.google/books/')
    expect(publicationItem.closest('a')).toHaveAttribute(
      'href',
      'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9624984'
    )
  })

  it('shows meta labels for category and language', () => {
    render(<Work />)

    expect(screen.getAllByText(/Open Source/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/English|Italian/i).length).toBeGreaterThan(0)
  })
})
