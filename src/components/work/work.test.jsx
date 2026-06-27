import { render, screen, fireEvent } from '@testing-library/react'
import Work from './work.jsx'

describe('Work', () => {
  it('renders work filters and book section', () => {
    render(<Work />)

    expect(screen.getByRole('button', { name: 'Open Source' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Publications' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'University' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Curated Books' })).toBeInTheDocument()
  })

  it('defaults to the Open Source view and renders its items with links', () => {
    render(<Work />)

    const contributionItem = screen.getByText(/Atlantis/i)
    const projectItem = screen.getByText(/Kraken Unleashed/i)
    const bookItem = screen.getByText(/Google SRE Books/i)

    expect(contributionItem.closest('a')).toHaveAttribute(
      'href',
      'https://github.com/runatlantis/atlantis/pulls?q=is%3Apr+author%3Acesarsk+is%3Amerged'
    )
    expect(projectItem.closest('a')).toHaveAttribute('href', 'https://github.com/Cesarsk/kraken-unleashed/')
    expect(bookItem.closest('a')).toHaveAttribute('href', 'https://sre.google/books/')
  })

  it('reveals publications when the Publications filter is selected', () => {
    render(<Work />)

    fireEvent.click(screen.getByRole('button', { name: 'Publications' }))

    const publicationItem = screen.getByText(/IEEE ACCESS/i)
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

  it('shows book tag filters', () => {
    render(<Work />)

    expect(screen.getAllByRole('button', { name: 'All' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('button', { name: 'SRE' }).length).toBeGreaterThan(0)
  })

  it('shows book ratings with accessible labels', () => {
    render(<Work />)

    expect(screen.getAllByLabelText('Rating: 5 out of 5 hearts')[0]).toHaveTextContent('🖤🖤🖤🖤🖤')
    expect(screen.getAllByLabelText('Rating: 4 out of 5 hearts')[0]).toHaveTextContent('🖤🖤🖤🖤🖤')
    expect(screen.getAllByLabelText('Rating: 4 out of 5 hearts').length).toBeGreaterThan(0)
    expect(screen.getAllByLabelText('Rating: 3 out of 5 hearts').length).toBeGreaterThan(0)
  })

  it('sorts books by highest rating first', () => {
    render(<Work />)

    const firstFiveHeartRating = screen.getAllByLabelText('Rating: 5 out of 5 hearts')[0]
    const firstFourHeartRating = screen.getAllByLabelText('Rating: 4 out of 5 hearts')[0]
    const position = firstFiveHeartRating.compareDocumentPosition(firstFourHeartRating)

    expect(position & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })
})
