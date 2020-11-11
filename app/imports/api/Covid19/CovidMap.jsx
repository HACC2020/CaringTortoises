import React from 'react';
import L from 'leaflet';
import { Map, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import datas from '../../../data/campusmap.json';

const CovidMap = () => {
  /*<div id='map'></div>;
   console.log(datas);
   const map = L.map('map').setView([21.29930, -157.81563], 16);
   L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=XC0B5O0zJTg9gUhUn68K', {
     attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
         '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
   }).addTo(map);
   L.geoJSON(datas).addTo(map);
   return (<div id='map'></div>);
 };*/
  var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  return <Map style={{ height: '90vh' }} zoom={17} center={[21.29930, -157.81563]}>
    <GeoJSON data={datas}/>;
  </Map>;
};

export default CovidMap;
