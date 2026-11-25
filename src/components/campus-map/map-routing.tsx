import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import { destinationIcon } from "./destination-icon";

interface MapRoutingProps {
  origin: L.LatLngExpression;
  destination: L.LatLngExpression;
}

const MIN_DISTANCE = 5; // Distância mínima em metros
const MIN_INTERVAL = 3000; // Intervalo mínimo em milissegundos

export function MapRouting({ origin, destination }: MapRoutingProps) {
  const map = useMap();

  const routingControlRef = useRef<L.Routing.Control | null>(null);

  const lastOriginRef = useRef<L.LatLng | null>(null);
  const lastDestinationRef = useRef<L.LatLng | null>(null);

  const lastUpdateRef = useRef(0);

  // Mantém as coordenadas mais recentes disponíveis.
  const latestWaypointsRef = useRef({ origin, destination });

  latestWaypointsRef.current = { origin, destination };

  // Cria o controle de rota apenas uma vez.
  useEffect(() => {
    const initialOrigin = L.latLng(latestWaypointsRef.current.origin);
    const initialDestination = L.latLng(latestWaypointsRef.current.destination);

    const plan = L.Routing.plan([initialOrigin, initialDestination], {
      addWaypoints: false,
      draggableWaypoints: false,

      createMarker: (index, waypoint) => {
        if (index === 0) {
          return false;
        }

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

      // Não altera o zoom a cada atualização.
      fitSelectedRoutes: false,

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
    });

    routingControl.addTo(map);

    routingControlRef.current = routingControl;

    lastOriginRef.current = initialOrigin;
    lastDestinationRef.current = initialDestination;
    lastUpdateRef.current = Date.now();

    return () => {
      map.removeControl(routingControl);

      routingControlRef.current = null;
      lastOriginRef.current = null;
      lastDestinationRef.current = null;
    };
  }, [map]);

  // Atualiza os pontos sem recriar o controle.
  useEffect(() => {
    const routingControl = routingControlRef.current;

    if (!routingControl) return;

    const currentOrigin = L.latLng(origin);
    const currentDestination = L.latLng(destination);

    const lastOrigin = lastOriginRef.current;
    const lastDestination = lastDestinationRef.current;

    if (!lastOrigin || !lastDestination) return;

    // Verifica se o destino foi alterado.
    const destinationChanged = !lastDestination.equals(currentDestination);

    // Mudou o destino: recalcula imediatamente.
    if (destinationChanged) {
      routingControl.setWaypoints([currentOrigin, currentDestination]);

      lastOriginRef.current = currentOrigin;
      lastDestinationRef.current = currentDestination;
      lastUpdateRef.current = Date.now();

      return;
    }

    // Verifica a distância percorrida pelo usuário.
    const distance = lastOrigin.distanceTo(currentOrigin);

    const elapsedTime = Date.now() - lastUpdateRef.current;

    // Evita recálculos desnecessários.
    if (distance >= MIN_DISTANCE && elapsedTime >= MIN_INTERVAL) {
      routingControl.setWaypoints([currentOrigin, currentDestination]);

      lastOriginRef.current = currentOrigin;
      lastUpdateRef.current = Date.now();
    }
  }, [origin, destination]);

  return null;
}
