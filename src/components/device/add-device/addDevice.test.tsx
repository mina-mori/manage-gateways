import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AddDevice from './addDevice';

test('renders add device page', () => {
  render(
    <Router>
      <AddDevice />
    </Router>
  );
  const headerElement = screen.getByText(/Add New Device/i);
  expect(headerElement).toBeInTheDocument();
});
