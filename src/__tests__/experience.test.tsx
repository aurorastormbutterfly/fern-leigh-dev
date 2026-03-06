import { render, screen } from '@testing-library/react'
import ExperiencePage from '../app/experience/page'

describe('ExperiencePage', () => {
  it('renders the heading and download button', () => {
    render(<ExperiencePage />)

    expect(screen.getByRole('heading', { name: 'Professional Experience' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Download CV' })).toBeInTheDocument()
  })
})
