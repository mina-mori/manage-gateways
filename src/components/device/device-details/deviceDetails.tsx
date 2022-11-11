import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DeviceModel } from '../../../models/deviceModel';
import { DevicesService } from '../../../services/devices-service/devicesService';
import './deviceDetails.css';

const DeviceDetails = () => {
  const { id }: any = useParams();
  const history = useNavigate();
  const deviceService = new DevicesService();
  const [deviceDetails, setDeviceDetails] = useState<DeviceModel | undefined>(
    {}
  );
  useEffect(() => {
    getDeviceDetails();
  }, [id]);
  const getDeviceDetails = () => {
    deviceService.getDeviceById(id).then((response) => {
      if (response.data) {
        setDeviceDetails({
          uid: response.data.uid,
          vendor: response.data.vendor,
          status: response.data.status,
          dateCreated: response.data.dateCreated,
        });
      }
    });
  };
  return (
    <>
      {deviceDetails && (
        <div className='device-datails'>
          <div className='mb-3 row'>
            <h1>Device Details</h1>
          </div>
          <div className='mb-3 row'>
            <label className='title'>UID:</label>
            <label>{deviceDetails.uid}</label>
          </div>
          <div className='mb-3 row'>
            <label className='title'>Vendor:</label>
            <label>{deviceDetails.vendor}</label>
          </div>
          <div className='mb-3 row'>
            <label className='title'>Date Created:</label>
            <label>{deviceDetails.dateCreated}</label>
          </div>
          <div className='mb-3 row'>
            <label className='title'>Status:</label>
            <label>{deviceDetails.status}</label>
          </div>
          <div>
            <button
              onClick={() => {
                history(-1);
              }}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default DeviceDetails;
