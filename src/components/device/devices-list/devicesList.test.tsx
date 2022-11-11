import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import DevicesList from './devicesList';

test('renders the devices list page', () => {
  render(
    <Router>
      <DevicesList />
    </Router>
  );

  expect(screen.getByRole('heading')).toHaveTextContent(/Devices List/);
  expect(screen.getByRole('button', { name: /add/i })).toHaveTextContent(
    /Add Device/
  );
  expect(screen.getByRole('button', { name: /back/i })).toHaveTextContent(
    /Back to Gateways List/
  );
});
