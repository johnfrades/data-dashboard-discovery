import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Header', () => {
  it('renders the header with the correct text', () => {
    render(<Header />);
    const headerElement = screen.getByText(/Data Dashboard Discovery/i);
    expect(headerElement).toBeInTheDocument();
  });
});
