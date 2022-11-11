import { render, screen } from '@testing-library/react';
import AddGateway from './addGateway';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders add gateway page', () => {
  render(
    <Router>
      <AddGateway />
    </Router>
  );
  const headerElement = screen.getByText(/Add New Gateway/i);
  expect(headerElement).toBeInTheDocument();
});
