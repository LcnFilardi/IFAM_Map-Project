import type { CampusLocation } from "@/types/campus-locations";
import { Popup } from "react-leaflet";

interface PopupContentProps {
  location: CampusLocation;
  onRouteClick: (destination: CampusLocation["location"]) => void;
}

export function PopupContent({ location, onRouteClick }: PopupContentProps) {
  return (
    <Popup className="bg-green-200 rounded-2xl p-1">
      <div className="flex mb-4 gap-2 flex-col">
        <span className="font-bold">Local: {location.name}</span>

        <span>Descrição: {location.description}</span>
      </div>

      <button
        className="w-full p-2 bg-green-600 text-white opacity-80 hover:opacity-100 rounded-2xl"
        onClick={() => onRouteClick(location.location)}
      >
        Traçar rota
      </button>
    </Popup>
  );
}
