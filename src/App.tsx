import './App.css';
import { Routes, Route } from 'react-router-dom';
import GatewaysList from './components/gateway/gateways-list/gatewaysList';
import AddDevice from './components/device/add-device/addDevice';
import DevicesList from './components/device/devices-list/devicesList';
import AddGateway from './components/gateway/add-gateway/addGateway';
import DeviceDetails from './components/device/device-details/deviceDetails';

const App = () => {
  return (
    <>
      <h1 className='system-header'>Manage Gateways System</h1>
      <Routes>
        <Route path='/' element={<GatewaysList />}></Route>
        <Route path='/gateways' element={<GatewaysList />}></Route>
        <Route path='/add-gateway' element={<AddGateway />}></Route>
        <Route path='/devices/:gatewayId' element={<DevicesList />}></Route>
        <Route path='/device/:id' element={<DeviceDetails />}></Route>
        <Route path='/add-device/:gatewayId' element={<AddDevice />}></Route>
      </Routes>
    </>
  );
};

export default App;
