import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import {
  MapContainer,
  Marker,
  Polygon,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import { campusBounds, campusPosition } from '../../data/constants/campus-config-constants';
import { campusLocations } from '../../data/locations';

function LocationMarkers() {
  const [zoom, setZoom] = useState(17);
  const markerSize = Math.max(12, Math.min(24, 12 + (zoom - 16) * 4));

  useMapEvents({
    zoomend: (event) => setZoom(event.target.getZoom()),
  });

  return campusLocations.map((location) => (
    <Marker key={location.id} position={location.location} icon={location.icon(markerSize)}>
      <Popup>
        <strong>{location.name}</strong>
        <br />
        {location.description}
      </Popup>
    </Marker>
  ));
}

export default function CampusMap() {
  const areaLocations = campusLocations.filter(location => location.area.length > 0);

  return (
    <div className="h-105 w-full p-2
     max-w-2xl overflow-hidden  rounded-2xl border border-slate-200 shadow-sm md:h-140">
      <MapContainer
        center={campusPosition}
        zoom={17}
        maxBounds={campusBounds}
        maxBoundsViscosity={1}
        minZoom={16}
        maxZoom={19}
        scrollWheelZoom
        className="h-full w-full rounded-2xl"
        attributionControl={false}
      >

        <LocationMarkers />

        {areaLocations.map((location) =>
          <Polygon
            key={location.id}
            positions={location.area}
            pathOptions={{
              color: '#166534',
              fillColor: '#22c55e',
              fillOpacity: 0.45,
              weight: 2,
            }}
          >
            <Popup >
              <strong>{location.name}</strong>
              <br />
              {location.description}
            </Popup>
          </Polygon>
        )}

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
          maxNativeZoom={19}
        />
      </MapContainer>
    </div >
  );
}

