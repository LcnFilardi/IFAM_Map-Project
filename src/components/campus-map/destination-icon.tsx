import L from "leaflet";
import { MapPin } from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";

export const destinationIcon = L.divIcon({
  className: "",
  html: renderToStaticMarkup(
    <MapPin size={36} color="#2563eb" fill="#dbeafe" strokeWidth={2} />,
  ),
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});
