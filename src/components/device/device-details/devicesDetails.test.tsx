import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import DeviceDetails from './deviceDetails';

test('renders device details page', () => {
  render(
    <Router>
      <DeviceDetails />
    </Router>
  );

  expect(screen.getByRole('heading')).toHaveTextContent(/Device Details/);

  const uidElement = screen.getByText(/UID/i);
  expect(uidElement).toBeInTheDocument();
  const vendorElement = screen.getByText(/Vendor/i);
  expect(vendorElement).toBeInTheDocument();
  const dateElement = screen.getByText(/Date Created/i);
  expect(dateElement).toBeInTheDocument();
  const statusElement = screen.getByText(/Status/i);
  expect(statusElement).toBeInTheDocument();
});
