import { useEffect, useState } from 'react';
import { DevicesService } from '../../../services/devices-service/devicesService';
import SimpleGrid from '../../shared/simple-grid/simpleGrid';
import { useNavigate, useParams } from 'react-router-dom';
import { DeviceGridProps } from '../../../models/deviceGridProps';

const DevicesList = () => {
  const { gatewayId } = useParams();
  const history = useNavigate();
  const devicesService = new DevicesService();
  const [allDevices, setAllDevices] = useState<any[]>([]);
  const [accountIsDeleted, setAccountIsDeleted] = useState(false);
  const girdHeaders: string[] = [
    'UID',
    'Vendor',
    'Status',
    'Date Created',
    'Action',
  ];
  useEffect(() => {
    getAllDevices();
  }, []);
  const getAllDevices = () => {
    if (gatewayId) {
      devicesService.getGatewayDevices(gatewayId).then((response: any) => {
        formatData(response.data);
      });
    }
  };
  const formatData = (data: any[]) => {
    let devicesList: DeviceGridProps[] = [];
    data?.map((record: any) => {
      const device: DeviceGridProps = {
        uid: record.uid,
        vendor: record.vendor,
        status: record.status,
        dateCreated: record.dateCreated,
        viewDetails: (
          <div>
            <button onClick={() => history(`/device/${record._id}`)}>
              View Details
            </button>
            <button
              onClick={() => {
                deleteDevice(record._id);
              }}
            >
              Delete
            </button>
          </div>
        ),
      };
      devicesList.push(device);
    });
    setAllDevices(devicesList);
  };
  const redirectToAddDevice = () => {
    history(`/add-device/${gatewayId}`);
  };
  const deleteDevice = (deviceId: string) => {
    devicesService.deleteDevice(deviceId).then(() => {
      getAllDevices();
      setAccountIsDeleted(true);
      setTimeout(() => {
        setAccountIsDeleted(false);
      }, 3000);
    });
  };
  return (
    <>
      <h1>Devices List</h1>
      <div className='alert alert-info mt-5'>
        Info: No more that 10 peripheral devices are allowed for a gateway.
      </div>
      {/* {allDevices.length < 10 && ( */}
      <div>
        <button name='add' onClick={redirectToAddDevice}>
          Add Device
        </button>
      </div>
      {/* )} */}
      {allDevices && allDevices?.length > 0 ? (
        <SimpleGrid headers={girdHeaders} data={allDevices}></SimpleGrid>
      ) : (
        <div className='no-items-found d-flex justify-content-center align-items-center h2 mt-5'>
          No devices found!
        </div>
      )}
      <div>
        <button
          name='back'
          onClick={() => {
            history(`/gateways`);
          }}
        >
          Back to Gateways List
        </button>
      </div>
      {accountIsDeleted && (
        <div className='alert alert-success mt-5'>
          Device deleted successfully
        </div>
      )}
    </>
  );
};
export default DevicesList;
