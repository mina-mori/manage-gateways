import { useEffect, useState } from 'react';
import { GatewaysService } from '../../../services/gateways-service/gatewaysService';
import SimpleGrid from '../../shared/simple-grid/simpleGrid';
import { useNavigate } from 'react-router-dom';
import { GatewayModel } from '../../../models/gatewayModel';
import { GatewayGridProps } from '../../../models/gatewayGridProps';

const GatewaysList = () => {
  const history = useNavigate();
  const gatewaysService = new GatewaysService();
  const [allGateways, setAllGateways] = useState<GatewayModel[]>([]);
  const girdHeaders: string[] = [
    'Serial Number',
    'Name',
    'IPv4 address',
    'Actions',
  ];
  useEffect(() => {
    getAllGateways().then((response: any) => {
      formatData(response.data);
    });
  }, []);
  const getAllGateways = () => {
    return gatewaysService.getAllGateways();
  };
  const formatData = (data: any[]) => {
    let gatewayList: GatewayGridProps[] = [];
    data.map((record: any) => {
      const gateway: GatewayGridProps = {
        serialNo: record.serialNo,
        name: record.name,
        ipv4Address: record.ipv4Address,
        viewDevices: (
          <div>
            <button onClick={() => history(`/devices/${record._id}`)}>
              View Devices
            </button>
          </div>
        ),
      };
      gatewayList.push(gateway);
    });
    setAllGateways(gatewayList);
  };
  const redirectToAddGateway = () => {
    history('/add-gateway');
  };
  return (
    <>
      <h1>Gateways List</h1>
      <div>
        <button onClick={redirectToAddGateway}>Add Gateway</button>
      </div>
      {allGateways && allGateways?.length > 0 ? (
        <SimpleGrid headers={girdHeaders} data={allGateways}></SimpleGrid>
      ) : (
        <div className='no-items-found d-flex justify-content-center align-items-center h2 mt-5'>
          No devices found!
        </div>
      )}
    </>
  );
};
export default GatewaysList;
