import axios from 'axios';
import { GatewayModel } from '../../models/gatewayModel';

export class GatewaysService {
  public async getAllGateways() {
    return await axios.get('http://localhost:4000/gateways/');
  }
  public async getGatewayById(gatewayId: number) {
    return await axios.get(`http://localhost:4000/gateways/'${gatewayId}`);
  }
  public async addNewGateway(gatewayObject: GatewayModel) {
    return await axios.post(
      'http://localhost:4000/gateways/create-gateway/',
      gatewayObject
    );
  }
}
