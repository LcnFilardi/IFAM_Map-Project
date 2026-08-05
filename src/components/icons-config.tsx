import { divIcon, type DivIcon } from 'leaflet';
import { BusFront, LogIn, LogOut, SportShoe, type LucideIcon } from 'lucide-react';
import { renderToStaticMarkup } from 'react-dom/server';

export type CampusIcon = (size: number) => DivIcon;

const createIcon = (Icon: LucideIcon, options: { color: string; fill: string }): CampusIcon => (size) =>
  divIcon({
    className: 'campus-location-icon',
    html: renderToStaticMarkup(
      <Icon size={size} color={options.color} fill={options.fill} strokeWidth={2.5} />
    ),
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });

export const busIcon = createIcon(BusFront, {
  color: '#000000',
  fill: '#ffffff',
});
export const entranceIcon = createIcon(LogIn, {
  color: '#2ECC71',
  fill: '#FFFFFF',
});
export const exitIcon = createIcon(LogOut, {
  color: '#E74C3C',
  fill: '#FFFFFF',
});
export const sportCourtIcon = createIcon(SportShoe, {
  color: '#3498DB',
  fill: '#FFFFFF',
});
