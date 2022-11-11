import { DevicesService } from './devicesService';

const mockDevicesList: any = {
  data: [
    {
      _id: '636c2dd34c5fd0256a27d210',
      uid: 129875,
      vendor: 'Vendor X',
      dateCreated: '2022-11-10',
      status: 'Online',
      gateway: '636c212d4c5fd0256a27d1fd',
      __v: 0,
    },
  ],
};

const mockDeviceDetails: any = {
  _id: '636c2dd34c5fd0256a27d210',
  uid: 129875,
  vendor: 'Vendor X',
  dateCreated: '2022-11-10',
  status: 'Online',
  gateway: '636c212d4c5fd0256a27d1fd',
  __v: 0,
};

jest.mock('axios', () => {
  return {
    post: jest.fn(),
  };
});

describe('devices serices', () => {
  test('should get devices of gateway', () => {
    const devicesService = new DevicesService();

    jest
      .spyOn(devicesService, 'getGatewayDevices')
      .mockResolvedValue(mockDevicesList);

    return devicesService.getGatewayDevices('51248657').then((data: any) => {
      expect(data).toEqual(mockDevicesList);
    });
  });
  test('should get device by id', () => {
    const devicesService = new DevicesService();
    jest
      .spyOn(devicesService, 'getDeviceById')
      .mockResolvedValue(mockDeviceDetails);

    return devicesService.getDeviceById('15646').then((data: any) => {
      expect(data).toEqual(mockDeviceDetails);
    });
  });
  test('should add device', () => {
    const devicesService = new DevicesService();
    jest
      .spyOn(devicesService, 'addNewDevice')
      .mockResolvedValue(mockDeviceDetails);

    return devicesService.addNewDevice(mockDeviceDetails).then((data: any) => {
      expect(data).toEqual(mockDeviceDetails);
    });
  });
  test('should delete device', () => {
    const devicesService = new DevicesService();
    jest
      .spyOn(devicesService, 'deleteDevice')
      .mockResolvedValue(mockDeviceDetails);

    return devicesService.deleteDevice('123').then((data: any) => {
      expect(data).toEqual(mockDeviceDetails);
    });
  });
});
