/*import React from 'react';
import L from 'leaflet';
import { Map, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import datas from '../../../data/campusmap.json';

const CovidMap = () => {
  return <Map style={{ height: '90vh' }} zoom={2} center={[20, 100]}>
    <GeoJSON data={datas}/>;
  </Map>;
  state = {};

  //console.log(datas);
  var mymap = L.map('mapid').setView([51.505, -0.09], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
  }).addTo(mymap);
    /*L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=XC0B5O0zJTg9gUhUn68K', {
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
          '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>' }).addTo(map);
    L.geoJSON(datas).addTo(map);

  return (<div id='map'></div>);

};

export default CovidMap;*/

import React from 'react';
import L from 'leaflet';
import datas from '../../../data/campusmap.json';
import 'leaflet/dist/leaflet.css';

export class CovidMap extends React.Component {
  state = {};

  componentDidMount() {
    console.log(datas);
    const map = L.map('map').setView([0 ,0],1);
    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=XC0B5O0zJTg9gUhUn68K', {
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
          '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>' }).addTo(map);
    L.geoJSON(datas).addTo(map);

  }

  render() {
    return (<div id='map'></div>);
  }

}
