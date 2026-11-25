import type { CampusLocation } from "@/types/campus-locations";
import { Popup } from "react-leaflet";

interface PopupContentProps {
  location: CampusLocation;
  onRouteClick: (destination: CampusLocation["location"]) => void;
}

export function PopupContent({ location, onRouteClick }: PopupContentProps) {
  return (
    <Popup className="bg-green-200 rounded-2xl p-1">
      <div className="">
        <p className="flex ">
          <span className="font-bold ">Local:</span>&nbsp;
          <span>{location.name}</span>
        </p>
        <p className="flex">
          <span className="font-bold">Descrição:</span>&nbsp;
          <span>{location.description}</span>
        </p>
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
