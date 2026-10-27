import type { CampusLocation } from "@/data/locations";
import { Popup } from "react-leaflet";

export function PopupContent({ location }: { location: CampusLocation }) {
  return (
    <Popup className="bg-green-200 rounded-2xl p-1">
      <div className="flex mb-4 gap-2 flex-col">
        <span className="font-bold">Local: {location.name}</span>
        <span>Descrição: {location.description}</span>
      </div>
      <button
        className="w-full p-2 bg-green-600 text-white opacity-80  hover:opacity-100 rounded-2xl"
        onClick={() => console.log("Traçar rota")}
      >
        Traçar rota
      </button>
    </Popup>
  );
}
