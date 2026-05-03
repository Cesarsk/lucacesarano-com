import { render, screen } from '@testing-library/react'
import Work from './work.jsx'

describe('Work', () => {
  it('renders work filters and book section', () => {
    render(<Work />)

    expect(screen.getByRole('button', { name: 'Live Demos' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open Source' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Publications' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'University' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Curated Books' })).toBeInTheDocument()
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
