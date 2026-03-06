import { render, screen } from '@testing-library/react'
import PortfolioPage from '../app/portfolio/page'

describe('PortfolioPage', () => {
  it('renders the heading and project card', () => {
    render(<PortfolioPage />)

    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Mars Rover Kata' })).toBeInTheDocument()
    expect(screen.getByText('Image Placeholder')).toBeInTheDocument()
    expect(screen.getByText('Java')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Problem/Solution summary placeholder.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Repo' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Demo' })).toBeInTheDocument()
  })
})
