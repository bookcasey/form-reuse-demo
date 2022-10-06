import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my name', () => {
  render(<App />);
  const element = screen.getByText(/Casey/i);
  expect(element).toBeInTheDocument();
});
