import { render, screen } from '@testing-library/react'
import App from './app.jsx'

describe('App', () => {
  it('renders the intro headline', () => {
    render(<App />)
    expect(screen.getByText("HELLO, I'M", { exact: false })).toBeInTheDocument()
  })
})
