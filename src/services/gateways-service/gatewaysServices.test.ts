import { GatewaysService } from './gatewaysService';

const mockGatewaysList: any = {
  data: [
    {
      _id: '636c212d4c5fd0256a27d1fd',
      serialNo: '12KJ455SA',
      name: 'Gateway1',
      ipv4Address: '192.0.2.235',
      devices: [],
      __v: 0,
    },
  ],
};

const mockGatewayDetails: any = {
  _id: '636c212d4c5fd0256a27d1fd',
  serialNo: '12KJ455SA',
  name: 'Gateway1',
  ipv4Address: '192.0.2.235',
  devices: [],
  __v: 0,
};

jest.mock('axios', () => {
  return {
    post: jest.fn(),
  };
});

describe('gateways serices', () => {
  test('should get gateways of gateway', () => {
    const gatewaysService = new GatewaysService();

    jest
      .spyOn(gatewaysService, 'getAllGateways')
      .mockResolvedValue(mockGatewaysList);

    return gatewaysService.getAllGateways().then((data: any) => {
      expect(data).toEqual(mockGatewaysList);
    });
  });
  test('should add gateway', () => {
    const gatewaysService = new GatewaysService();
    jest
      .spyOn(gatewaysService, 'addNewGateway')
      .mockResolvedValue(mockGatewayDetails);

    return gatewaysService
      .addNewGateway(mockGatewayDetails)
      .then((data: any) => {
        expect(data).toEqual(mockGatewayDetails);
      });
  });
});
