import { render, screen, fireEvent } from '@testing-library/react'
import ThemeToggle from '../components/ThemeToggle/ThemeToggle'

describe('ThemeToggle', () => {
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

  it('toggles the theme on click', () => {
    render(<ThemeToggle />)

    const button = screen.getByRole('button', { name: /toggle theme/i });
    
    // Initial theme is light, so it shows moon
    expect(button.querySelector('[data-icon="moon"]')).toBeInTheDocument()

    fireEvent.click(button)

    // After click, it should show sun
    expect(button.querySelector('[data-icon="sun"]')).toBeInTheDocument()
  })

  it('shows sun icon when prefers-color-scheme is dark', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: true,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    render(<ThemeToggle />)

    const button = screen.getByRole('button', { name: /toggle theme/i });
    
    // Initial theme is dark, so it shows sun
    expect(button.querySelector('[data-icon="sun"]')).toBeInTheDocument()
  })
})
