import { render, screen, fireEvent } from '@testing-library/react';
import FlipCard from './FlipCard';

describe('FlipCard', () => {
  it('renders the title', () => {
    render(<FlipCard title="Test Title" details="Test Details" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('flips when clicked', () => {
    render(<FlipCard title="Test Title" details="Test Details" />);
    const flipCard = screen.getByText('Test Title').closest('div.flipCard');
    if (flipCard) {
      fireEvent.click(flipCard);
      expect(flipCard.querySelector('.isFlipped')).toBeInTheDocument();
    }
  });

  it('shows the details after flipping', () => {
    render(<FlipCard title="Test Title" details="Test Details" />);
    const flipCard = screen.getByText('Test Title').closest('div.flipCard');
    if (flipCard) {
      fireEvent.click(flipCard);
      expect(screen.getByText('Test Details')).toBeInTheDocument();
    }
  });
});
