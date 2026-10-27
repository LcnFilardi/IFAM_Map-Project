import { LOCATION_OFFSET } from "@/data/constants/adjust-user-location";
import type { LatLngExpression } from "leaflet";
import { useCallback, useEffect, useState } from "react";
import { CircleMarker, Popup, useMap } from "react-leaflet";

const TARGET_ACCURACY = 0.1;

export function UserLocationMarker() {
  const map = useMap();

  const [position, setPosition] = useState<LatLngExpression | null>(null);

  const [accuracy, setAccuracy] = useState<number | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [requesting, setRequesting] = useState(false);

  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setLocationError("Seu navegador não suporta geolocalização.");
      return;
    }

    setLocationError(null);
    setRequesting(true);

    let bestAccuracy = Infinity;
    let watchId: number;

    watchId = navigator.geolocation.watchPosition(
      (result) => {
        const {
          latitude,
          longitude,
          accuracy: currentAccuracy,
        } = result.coords;

        // Mantém a melhor leitura recebida durante esta busca.
        if (currentAccuracy < bestAccuracy) {
          bestAccuracy = currentAccuracy;

          const coords: LatLngExpression = [
            latitude + LOCATION_OFFSET.latitude,
            longitude + LOCATION_OFFSET.longitude,
          ];

          console.log("Coordenadas:", coords);

          setPosition(coords);
          setAccuracy(currentAccuracy);
          setLocationError(null);

          map.setView(coords, Math.max(map.getZoom(), 19));
        }

        // Para a busca quando a precisão desejada for atingida.
        if (currentAccuracy <= TARGET_ACCURACY) {
          navigator.geolocation.clearWatch(watchId);
          setRequesting(false);
        }
      },
      (error) => {
        navigator.geolocation.clearWatch(watchId);

        if (error.code === error.PERMISSION_DENIED) {
          setLocationError(
            "Permissão negada. Habilite a localização nas configurações do navegador.",
          );
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          setLocationError(
            "Localização indisponível. Tente ir para uma área aberta.",
          );
        } else {
          setLocationError(
            "Não foi possível obter a localização. Tente novamente.",
          );
        }

        setRequesting(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0,
      },
    );
  }, [map]);

  useEffect(() => {
    requestLocation();
  }, [requestLocation]);

  if (locationError) {
    return (
      <div className="absolute bottom-4 left-4 z-[1000] max-w-xs rounded-lg bg-white p-3 shadow-lg">
        <p className="mb-2 text-sm text-slate-700">{locationError}</p>

        <button
          type="button"
          onClick={requestLocation}
          disabled={requesting}
          className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white disabled:opacity-50"
        >
          {requesting ? "Buscando GPS..." : "Tentar novamente"}
        </button>
      </div>
    );
  }

  return (
    <>
      {position && accuracy !== null && (
        <>
          <CircleMarker
            center={position}
            radius={7}
            pathOptions={{
              color: "#ffffff",
              weight: 3,
              fillColor: "#2563eb",
              fillOpacity: 1,
            }}
          >
            <Popup>
              <div>
                <strong>Você está aqui</strong>
                <br />
                Precisão estimada: {accuracy.toFixed(1)} m
                {accuracy <= TARGET_ACCURACY
                  ? " — meta atingida"
                  : " — buscando maior precisão"}
              </div>
            </Popup>
          </CircleMarker>
        </>
      )}
    </>
  );
}
