import { render, screen } from '@testing-library/react'
import RootLayout from '../app/layout'

describe('RootLayout', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

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
