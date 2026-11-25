export function calculateDistance(
  position1: L.LatLngTuple,
  position2: L.LatLngTuple,
) {
  const earthRadius = 6371000;

  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

  const latitude1 = toRadians(position1[0]);
  const latitude2 = toRadians(position2[0]);

  const latitudeDifference = toRadians(position2[0] - position1[0]);
  const longitudeDifference = toRadians(position2[1] - position1[1]);

  const a =
    Math.sin(latitudeDifference / 2) ** 2 +
    Math.cos(latitude1) *
    Math.cos(latitude2) *
    Math.sin(longitudeDifference / 2) ** 2;

  return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}