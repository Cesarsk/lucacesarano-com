import { render, screen } from '@testing-library/react'
import App from './app.jsx'

describe('App', () => {
  it('renders the intro headline', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /hello/i })).toBeInTheDocument()
  })

  it('renders the main page sections', () => {
    render(<App />)

    expect(screen.getByText('RESUME')).toBeInTheDocument()
    expect(screen.getByText('Open source projects')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument()
  })
})
