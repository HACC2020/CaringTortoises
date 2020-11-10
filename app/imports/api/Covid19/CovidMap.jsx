import React from 'react';
import { Map, GeoJSON} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const CovidMap = () => {
  return <Map stye={{ height: '90vh' }} zoom={2} center={[20, 100]} ></Map>;
};

export default CovidMap;
