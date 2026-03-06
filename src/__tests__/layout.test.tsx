import { render, screen } from '@testing-library/react'
import RootLayout from '../app/layout'

describe('RootLayout', () => {
  it('renders the header and children', () => {
    render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    )

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByText('Test Child')).toBeInTheDocument()
  })
})
