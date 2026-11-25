import { generateUniqueId } from "@/config/generate-unique-id";
import { changingRoomIcon } from "@/config/icons-config";
import type { CampusLocation } from "@/types/campus-locations";
import { changingRoom_area_1, changingRoom_area_2, changingRoom_area_3 } from "../../areas-constants";

export const changingRooms_areas: CampusLocation[] = [
  {
    id: generateUniqueId(),
    name: 'Salas de aula do ensino médio e técnico do campus',
    area: changingRoom_area_1,
    location: [-3.0783126429238665, -59.933053295064916],
    icon: changingRoomIcon,
    description: 'Salas de aula do campus, utilizadas para atividades acadêmicas e administrativas.',
  },
  {
    id: generateUniqueId(),
    name: 'Salas de aula do ensino médio e técnico do campus',
    area: changingRoom_area_2,
    location: [-3.078407248469764, -59.93324354983975],
    icon: changingRoomIcon,
    description: 'Salas de aula do campus, utilizadas para atividades acadêmicas e administrativas.',
  },
  {
    id: generateUniqueId(),
    name: 'Salas de aula do ensino médio e técnico do campus',
    area: changingRoom_area_3,
    location: [-3.0784949316511296, -59.93344998012175],
    icon: changingRoomIcon,
    description: 'Salas de aula do campus, utilizadas para atividades acadêmicas e administrativas.',
  },

] 