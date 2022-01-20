import { render, screen } from '@testing-library/react';
import App from './App';

test('Smoke Test', () => {
  render(<App />);
  expect(screen.getByRole('link', {name:/Book A Room/i})).toBeInTheDocument();
}, 5000);
