import { FC } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface CustomMapContainerProps {
  children: string | JSX.Element | JSX.Element[] | null
}

const CustomMapContainer: FC<CustomMapContainerProps> = ({ children }) => {

  const southWest = L.latLng(-89.98155760646617, -180);
  const northEast = L.latLng(89.99346179538875, 180);
  const bounds = L.latLngBounds(southWest, northEast);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={2} 
      maxZoom={3} 
      minZoom={2}
      style={{ height: '100%', width: '100%' }}
      maxBounds={bounds}
      worldCopyJump={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {children}
    </MapContainer>
  );
};

export default CustomMapContainer;
