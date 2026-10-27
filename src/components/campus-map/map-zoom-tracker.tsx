import { useMapEvents } from "react-leaflet";

interface MapZoomTrackerProps {
  onZoomChange: (zoom: number) => void;
}

export function MapZoomTracker({ onZoomChange }: MapZoomTrackerProps) {
  useMapEvents({
    zoomend: (event) => {
      onZoomChange(event.target.getZoom());
    },
  });

  return null;
}
