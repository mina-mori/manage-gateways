import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GatewayModel } from '../../../models/gatewayModel';
import { GatewaysService } from '../../../services/gateways-service/gatewaysService';
import './addGateway.css';

const AddGateway = () => {
  const history = useNavigate();
  const [serialNo, setSerialNo] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [ipv4Address, setIpv4Address] = useState<string>('');
  const gatewaysService = new GatewaysService();
  const ValidateIPaddress = (event: any) => {
    const inputText: string = event?.target?.value;
    const ipformat =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (inputText.match(ipformat)) {
      return true;
    } else {
      return false;
    }
  };
  const handleSerialNo = (event: any) => {
    setSerialNo(event.target.value);
  };
  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };
  const handleIpv4AddressChange = (event: any) => {
    setIpv4Address(event.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const gatewayData: GatewayModel = {
      serialNo: serialNo,
      name: name,
      ipv4Address: ipv4Address,
    };
    gatewaysService.addNewGateway(gatewayData).then(() => {
      history('/gateways');
    });
  };

  return (
    <form className='gateway-form' onSubmit={handleSubmit}>
      <div className='mb-3 row'>
        <h1>Add New Gateway</h1>
      </div>
      <div className='mb-3 row'>
        <label className='col-sm-2 col-form-label'>Serial Number:</label>
        <div className='col-sm-4'>
          <input
            required={true}
            className='form-control'
            type='text'
            value={serialNo}
            onChange={handleSerialNo}
          />
        </div>
      </div>
      <div className='mb-3 row'>
        <label className='col-sm-2 col-form-label'>Name:</label>
        <div className='col-sm-4'>
          <input
            required={true}
            className='form-control'
            type='text'
            value={name}
            onChange={handleNameChange}
          />
        </div>
      </div>
      <div className='mb-3 row'>
        <label className='col-sm-2 col-form-label'>IPv4 Address:</label>
        <div className='col-sm-4'>
          <input
            required={true}
            className='form-control'
            type='text'
            pattern='^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)'
            value={ipv4Address}
            onChange={handleIpv4AddressChange}
          />
        </div>
      </div>
      <div className='mb-3 row'>
        <div>
          <input type='submit' value='Submit' />
          <button
            onClick={() => {
              history(-1);
            }}
          >
            Back
          </button>
        </div>
      </div>
    </form>
  );
};
export default AddGateway;
