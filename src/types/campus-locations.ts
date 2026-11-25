import type { CampusIcon } from "@/config/icons-config";

export type CampusLocation = {
  id: string;
  name: string;
  area: [number, number][] | null;
  location: [number, number];
  icon: CampusIcon;
  description: string;
};