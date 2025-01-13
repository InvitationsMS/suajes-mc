import React, { useEffect } from 'react';
import L from 'leaflet';

interface MapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
}

const Map: React.FC<MapProps> = ({ latitude, longitude, zoom = 16 }) => { 
  useEffect(() => {
    const map = L.map('map', { scrollWheelZoom: false, zoomControl: false }).setView([latitude, longitude], zoom); 

    // Map tile
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20, 
    }).addTo(map);

    // Pop up
    L.marker([latitude, longitude]).addTo(map)
      .bindPopup('Suajes M.C.')
      .openPopup();

    // Zoom control
    L.control.zoom({ position: 'topright' }).addTo(map);

    return () => {
      map.remove();
    };
  }, [latitude, longitude, zoom]);

  return <div className="map" id="map" style={{ height: '400px' }} />;
};

export default Map;
