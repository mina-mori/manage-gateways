import axios from 'axios';
import { DeviceModel } from '../../models/deviceModel';

export class DevicesService {
  constructor() {}
  public async getGatewayDevices(gatewayId: string) {
    return await axios.get(
      `http://localhost:4000/devices/get-gateway-devices/${gatewayId}`
    );
  }
  public async getDeviceById(deviceId: string) {
    return await axios.get(
      `http://localhost:4000/devices/get-by-id/${deviceId}`
    );
  }
  public async addNewDevice(deviceObject: DeviceModel) {
    return await axios.post(
      'http://localhost:4000/devices/create-device/',
      deviceObject
    );
  }
  public async deleteDevice(id: string) {
    return await axios.delete(
      'http://localhost:4000/devices/delete-device/' + id
    );
  }
}
