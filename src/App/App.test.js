import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Retrodate/i);
  expect(linkElement).toBeInTheDocument();
});
