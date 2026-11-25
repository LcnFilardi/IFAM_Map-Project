import { campusBounds, campusPosition } from "@/config/campus-config-constants";
import { campusLocations } from "@/data/locations";
import "leaflet/dist/leaflet.css";
import { X } from "lucide-react";
import { useState } from "react";
import { MapContainer, Marker, Polygon, TileLayer } from "react-leaflet";
import { UserLocationMarker } from "../user-location/user-location-marker";
import { MapRouting } from "./map-routing";
import { MapZoomTracker } from "./map-zoom-tracker";
import { PopupContent } from "./popup";

export default function CampusMap() {
  const apiKey = import.meta.env.VITE_MAPTILER_KEY;
  const tileUrl = `https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png?key=${apiKey}`;

  const [userPosition, setUserPosition] = useState<L.LatLngTuple | null>(null);

  const [destination, setDestination] = useState<L.LatLngTuple | null>(null);

  const [zoom, setZoom] = useState(17);

  const showMarkers = zoom >= 18;

  const markerSize = Math.max(6, 10 + (zoom - 16) * 4);

  const areaLocations = campusLocations.filter(
    (location) => location.area !== null && location.area.length > 0,
  );

  const handleStopRoute = () => {
    setDestination(null);
  };

  return (
    <div className=" relative w-full mt-10 h-[70dvh] min-h-[450px] max-h-[750px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
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
        <UserLocationMarker onLocationChange={setUserPosition} />

        <MapZoomTracker onZoomChange={setZoom} />

        {showMarkers &&
          campusLocations.map((location) => (
            <Marker
              key={location.id}
              position={location.location}
              icon={location.icon?.(markerSize)}
            >
              <PopupContent
                location={location}
                onRouteClick={(destination) => {
                  setDestination(destination);
                }}
              />
            </Marker>
          ))}

        {areaLocations.map((location) => (
          <Polygon
            key={location.id}
            positions={location.area!}
            pathOptions={{
              color: "#0e0d0d",
              fillColor: "#88e788",
              fillOpacity: 0.45,
              weight: 1,
            }}
          >
            <PopupContent location={location} onRouteClick={setDestination} />
          </Polygon>
        ))}

        {userPosition && destination && (
          <MapRouting origin={userPosition} destination={destination} />
        )}

        {destination && (
          <div className="absolute bottom-4 right-4 z-[1000]">
            <button
              type="button"
              onClick={handleStopRoute}
              className="flex rounded-xl gap-2 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 shadow-lg transition hover:bg-red-200"
            >
              <X size={18} />
              Parar rota
            </button>
          </div>
        )}

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
