import type { LatLngTuple } from "leaflet";
import { useCallback, useEffect, useRef, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { userLocationIcon } from "./user-location-icon";

interface UserLocationMarkerProps {
  onLocationChange: (position: LatLngTuple) => void;
}

export function UserLocationMarker({
  onLocationChange,
}: UserLocationMarkerProps) {
  const watchIdRef = useRef<number | null>(null);

  const [position, setPosition] = useState<LatLngTuple | null>(null);
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [requesting, setRequesting] = useState(false);

  const stopWatching = useCallback(() => {
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
  }, []);

  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setLocationError("Seu navegador não suporta geolocalização.");
      setRequesting(false);
      return;
    }

    stopWatching();

    setLocationError(null);
    setRequesting(true);

    watchIdRef.current = navigator.geolocation.watchPosition(
      (result) => {
        const {
          latitude,
          longitude,
          accuracy: currentAccuracy,
        } = result.coords;

        const userCoords: LatLngTuple = [latitude, longitude];
        console.log("User coordinates:", userCoords);
        // setPosition(userCoords);
        setPosition([-3.079793556126813, -59.93260135720921]);
        setAccuracy(currentAccuracy);
        setLocationError(null);
        setRequesting(false);

        // onLocationChange(userCoords);
        onLocationChange([-3.079793556126813, -59.93260135720921]);
      },
      (error) => {
        let message: string;

        switch (error.code) {
          case error.PERMISSION_DENIED:
            message =
              "A permissão de localização foi negada. Verifique as permissões do navegador.";
            break;

          case error.POSITION_UNAVAILABLE:
            message =
              "Não foi possível identificar sua localização. O rastreamento foi interrompido.";
            break;

          case error.TIMEOUT:
            message =
              "O tempo para obter sua localização expirou. O rastreamento foi interrompido.";
            break;

          default:
            message =
              "Ocorreu um erro inesperado. O rastreamento foi interrompido.";
        }

        setLocationError(message);
        setRequesting(false);

        // Interrompe o rastreamento após qualquer erro.
        stopWatching();
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      },
    );
  }, [onLocationChange, stopWatching]);

  useEffect(() => {
    requestLocation();

    return () => {
      stopWatching();
    };
  }, [requestLocation, stopWatching]);

  return (
    <>
      {position && accuracy !== null && (
        <Marker position={position} icon={userLocationIcon} zIndexOffset={1000}>
          <Popup>
            <div>
              <strong>Você está aqui</strong>
              <br />
              Precisão estimada: {accuracy.toFixed(1)} m
            </div>
          </Popup>
        </Marker>
      )}

      <div className="absolute bottom-4 left-4 z-[1000] max-w-xs">
        {requesting && !position && (
          <div className="rounded-xl bg-white p-4 shadow-lg">
            <p className="text-sm text-slate-700">Obtendo sua localização...</p>
          </div>
        )}

        {locationError && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-white p-4 shadow-lg"
          >
            <p className="mb-3 text-sm text-slate-700">{locationError}</p>

            <button
              type="button"
              onClick={requestLocation}
              disabled={requesting}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
            >
              {requesting ? "Buscando GPS..." : "Tentar novamente"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
