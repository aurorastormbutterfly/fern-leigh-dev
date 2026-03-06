import { render, screen, fireEvent } from '@testing-library/react'
import ThemeToggle from '../components/ThemeToggle/ThemeToggle'

describe('ThemeToggle', () => {
  it('toggles the theme on click', () => {
    render(<ThemeToggle />)

    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('Switch to Light Mode')

    fireEvent.click(button)

    expect(button).toHaveTextContent('Switch to Dark Mode')
  })
})
