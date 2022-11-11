import { render, screen } from '@testing-library/react';
import GatewaysList from './gatewaysList';
import { BrowserRouter as Router } from 'react-router-dom';
//import axios from 'axios';

test('renders the gateways list page', () => {
  render(
    <Router>
      <GatewaysList />
    </Router>
  );

  expect(screen.getByRole('heading')).toHaveTextContent(/Gateways List/);
  expect(screen.getByRole('button')).toHaveTextContent(/Add Gateway/);
});

// jest.mock('axios');

// test('should fetch gateways', async () => {
//   const gateways = [
//     {
//       _id: '636c212d4c5fd0256a27d1fd',
//       serialNo: '12KJ455SA',
//       name: 'Gateway1',
//       ipv4Address: '192.0.2.235',
//       devices: [],
//     },
//   ];
//   const resp = { data: gateways };
//   axios.get.mockResolvedValue(resp);

//   render(
//     <Router>
//       <GatewaysList />
//     </Router>
//   );

//   return await this.getAllGateways().then((data) =>
//     expect(data).toEqual(gateways)
//   );
// });
