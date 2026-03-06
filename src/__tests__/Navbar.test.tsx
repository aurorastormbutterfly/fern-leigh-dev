import { render, screen } from '@testing-library/react'
import Navbar from '../components/Navbar/Navbar'

describe('Navbar', () => {
  it('renders the navigation links', () => {
    render(<Navbar />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('Professional Experience')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
  })
})
