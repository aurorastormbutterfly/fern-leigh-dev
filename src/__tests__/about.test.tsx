import { render, screen } from '@testing-library/react'
import AboutPage from '../app/about/page'

describe('AboutPage', () => {
  it('renders the heading', () => {
    render(<AboutPage />)

    expect(screen.getByRole('heading', { name: 'Senior Full-stack Software Engineer & Technical Educator' })).toBeInTheDocument()
  })
})
