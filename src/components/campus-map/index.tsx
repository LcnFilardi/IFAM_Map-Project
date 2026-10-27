import { campusLocations } from "@/data/locations";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, Marker, Polygon, TileLayer } from "react-leaflet";
import {
  campusBounds,
  campusPosition,
} from "../../data/constants/campus-config-constants";
import { UserLocationMarker } from "../user-location-marker";
import { MapZoomTracker } from "./map-zoom-tracker";
import { PopupContent } from "./popup";

export default function CampusMap() {
  const apiKey = import.meta.env.VITE_MAPTILER_KEY;
  const tileUrl = `https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png?key=${apiKey}`;

  const [zoom, setZoom] = useState(17);
  const markerSize = Math.max(6, 10 + (zoom - 16) * 4);

  const areaLocations = campusLocations.filter(
    (location) => location.area.length > 0,
  );

  return (
    <div
      className=" w-full
      mt-10
    h-[60dvh]    
    min-h-[400px]
    max-h-[600px]
    overflow-hidden
    rounded-2xl
    border border-slate-200
    shadow-sm"
    >
      <MapContainer
        center={campusPosition}
        maxBounds={campusBounds}
        maxBoundsViscosity={1}
        minZoom={17}
        zoom={17}
        maxZoom={19}
        scrollWheelZoom
        className="h-full w-full rounded-2xl"
        attributionControl={false}
      >
        <UserLocationMarker />

        <MapZoomTracker onZoomChange={setZoom} />

        {campusLocations.map((location) => (
          <Marker
            key={location.id}
            position={location.location}
            icon={location.icon?.(markerSize)}
          >
            <PopupContent location={location} />
          </Marker>
        ))}

        {areaLocations.map((location) => (
          <Polygon
            key={location.id}
            positions={location.area}
            pathOptions={{
              color: "#0e0d0d",
              fillColor: "#88e788",
              fillOpacity: 0.45,
              weight: 1,
            }}
          >
            <PopupContent location={location} />
          </Polygon>
        ))}

        <TileLayer
          attribution="&copy; OpenStreetMap contributors &copy; CARTO"
          url={tileUrl}
          maxZoom={19}
          maxNativeZoom={19}
        />
      </MapContainer>
    </div>
  );
}
