import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders landing page', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const headerElement = screen.getByText(/Manage Gateways System/i);
  expect(headerElement).toBeInTheDocument();
});
