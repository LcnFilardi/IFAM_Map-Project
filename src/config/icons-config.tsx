import { divIcon, type DivIcon } from "leaflet";
import {
  BookSearch,
  BusFront,
  Construction,
  Cpu,
  Dumbbell,
  GraduationCap,
  LaptopMinimalCheck,
  Medal,
  PawPrint,
  Projector,
  Shirt,
  SportShoe,
  Toolbox,
  UserShield,
  Utensils,
  WavesLadder,
  type LucideIcon,
} from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";

export type CampusIcon = (size: number) => DivIcon;

const createIcon =
  (Icon: LucideIcon, options: { color: string; fill: string }): CampusIcon =>
  (size) =>
    divIcon({
      className: "campus-location-icon",
      html: renderToStaticMarkup(
        <Icon
          size={size}
          color={options.color}
          fill={options.fill}
          strokeWidth={2.5}
        />,
      ),
      iconSize: [size, size],
      iconAnchor: [size / 2, size],
      popupAnchor: [0, -size],
    });

export const busIcon = createIcon(BusFront, {
  color: "#0769fd",
  fill: "#D3D3D3",
});
export const entranceIcon = createIcon(UserShield, {
  color: "#000000",
  fill: "#D3D3D3",
});
export const sportCourtIcon = createIcon(SportShoe, {
  color: "#898989",
  fill: "#FFFFFF",
});
export const classroomIcon = createIcon(GraduationCap, {
  color: "#9B59B6",
  fill: "#FFFFFF",
});
export const poolIcon = createIcon(WavesLadder, {
  color: "#5c8ccc",
  fill: "#FFFFFF",
});
export const auditoriumIcon = createIcon(Projector, {
  color: "#FF8C00",
  fill: "#FFFFFF",
});
export const labsIcon = createIcon(LaptopMinimalCheck, {
  color: "#FF8C00",
  fill: "#FFFFFF",
});
export const fieldIcon = createIcon(Medal, {
  color: "#FF8C00",
  fill: "#FFFFFF",
});
export const academyIcon = createIcon(Dumbbell, {
  color: "#FF8C00",
  fill: "#FFFFFF",
});
export const maintenanceIcon = createIcon(Construction, {
  color: "#FF8C00",
  fill: "#FFFFFF",
});
export const libraryIcon = createIcon(BookSearch, {
  color: "#FF8C00",
  fill: "#FFFFFF",
});
export const cafeteriaIcon = createIcon(Utensils, {
  color: "#FF8C00",
  fill: "#FFFFFF",
});
export const veterinaryClinicIcon = createIcon(PawPrint, {
  color: "#FF8C00",
  fill: "#FFFFFF",
});
export const changingRoomIcon = createIcon(Shirt, {
  color: "#FF8C00",
  fill: "#FFFFFF",
});
export const aranouaBuildingIcon = createIcon(Cpu, {
  color: "#FF8C00",
  fill: "#FFFFFF",
});
export const biopsicosocialSectorIcon = createIcon(Toolbox, {
  color: "#FF8C00",
  fill: "#FFFFFF",
});
