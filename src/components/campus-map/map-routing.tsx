import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { destinationIcon } from "./destination-icon";

interface MapRoutingProps {
  origin: L.LatLngExpression;
  destination: L.LatLngExpression;
}

export function MapRouting({ origin, destination }: MapRoutingProps) {
  const map = useMap();

  useEffect(() => {
    // Configuração dos pontos da rota
    const plan = L.Routing.plan([L.latLng(origin), L.latLng(destination)], {
      addWaypoints: false,
      draggableWaypoints: false,

      createMarker: (index, waypoint) => {
        // Não cria marcador na origem (usuário)
        if (index === 0) {
          return false;
        }

        // Cria marcador personalizado somente no destino
        return L.marker(waypoint.latLng, {
          icon: destinationIcon,
          draggable: false,
        });
      },
    });

    const routingControl = L.Routing.control({
      plan,
      routeWhileDragging: false,
      show: false,
      addWaypoints: false,
      fitSelectedRoutes: true,
      lineOptions: {
        styles: [
          {
            color: "#2563eb",
            opacity: 0.9,
            weight: 6,
          },
        ],
        extendToWaypoints: true,
        missingRouteTolerance: 10,
      },
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [map, origin, destination]);

  return null;
}
