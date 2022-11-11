import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DeviceModel } from '../../../models/deviceModel';
import { DevicesService } from '../../../services/devices-service/devicesService';
import './addDevice.css';

const AddDevice = () => {
  const history = useNavigate();
  const { gatewayId }: any = useParams();
  const [uid, setUid] = useState<number>(0);
  const [vendor, setVendor] = useState<string>('');
  const [dateCreated, setDateCreated] = useState<string>('');
  const [status, setStatus] = useState<string>('Online');
  const devicesService = new DevicesService();
  const handleUidChange = (event: any) => {
    setUid(event.target.value);
  };
  const handleVendorChange = (event: any) => {
    setVendor(event.target.value);
  };
  const handleDateChange = (event: any) => {
    setDateCreated(event.target.value);
  };
  const handleStatusChange = (event: any) => {
    setStatus(event.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const deviceData: DeviceModel = {
      uid: uid,
      vendor: vendor,
      dateCreated: dateCreated,
      status: status,
      gateway: gatewayId,
    };
    devicesService.addNewDevice(deviceData).then(
      (response) => {
        if (response.data?.validationMessage)
          alert(response.data?.validationMessage);
        else history(`/devices/${gatewayId}`);
      },
      (error: any) => {
        console.log(error);
      }
    );
  };

  return (
    <form className='device-form' onSubmit={handleSubmit}>
      <div className='mb-3 row'>
        <h1>Add New Device</h1>
      </div>
      <div className='mb-3 row'>
        <label className='col-sm-2 col-form-label'>UID:</label>
        <div className='col-sm-4'>
          <input
            required={true}
            className='form-control'
            type='Number'
            value={uid}
            onChange={handleUidChange}
          />
        </div>
      </div>
      <div className='mb-3 row'>
        <label className='col-sm-2 col-form-label'>Vendor:</label>
        <div className='col-sm-4'>
          <input
            required={true}
            className='form-control'
            type='text'
            value={vendor}
            onChange={handleVendorChange}
          />
        </div>
      </div>
      <div className='mb-3 row'>
        <label className='col-sm-2 col-form-label'>Date Created:</label>
        <div className='col-sm-4'>
          <input
            required={true}
            className='form-control'
            type='date'
            value={dateCreated}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className='mb-3 row'>
        <label className='col-sm-2 col-form-label'>Status:</label>
        <div className='col-sm-4'>
          <select
            required={true}
            className='form-control'
            value={status}
            onChange={handleStatusChange}
          >
            <option value='Online'>Online</option>
            <option value='Offline'>Offline</option>
          </select>
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
export default AddDevice;
