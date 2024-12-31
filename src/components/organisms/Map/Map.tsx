import React, { useEffect } from 'react';
import L from 'leaflet';

interface MapProps {
  latitude: number;
  longitude: number;
  zoom: number;
}

const Map: React.FC<MapProps> = ({ latitude, longitude, zoom }) => {
  useEffect(() => {
    const map = L.map('map').setView([latitude, longitude], zoom);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
      .bindPopup("<b>Hello world!</b><br>I am a popup.")
      .openPopup();

    return () => {
      map.remove();
    };
  }, [latitude, longitude, zoom]);

  return <div className="map" id="map" style={{ height: '400px' }} />;
};

export default Map;
