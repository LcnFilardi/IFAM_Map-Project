import { generateUniqueId } from "@/config/generate-unique-id";
import { busIcon } from "@/config/icons-config";
import type { CampusLocation } from "@/types/campus-locations";
import { busStop } from "../local-constants";

export const busStation_points: CampusLocation[] = [
  {
    id: generateUniqueId(),
    name: 'Parada de ônibus',
    area: null,
    location: busStop,
    icon: busIcon,
    description: 'Parada de ônibus a frente do campus.',
  },
  {
    id: generateUniqueId(),
    name: 'Parada de ônibus',
    area: null,
    location: [-3.0776590997167426, -59.93240414162743],
    icon: busIcon,
    description: 'Parada de ônibus lateral do campus.',
  },
  {
    id: generateUniqueId(),
    name: 'Parada de ônibus',
    area: null,
    location: [-3.076578635005317, -59.930522086056634],
    icon: busIcon,
    description: 'Parada de ônibus frente à saída lateral do campus.',
  },
  {
    id: generateUniqueId(),
    name: 'Parada de ônibus',
    area: null,
    location: [-3.078712338072259, -59.9347845159051],
    icon: busIcon,
    description: 'Parada de ônibus lateral do campus.',
  },
  {
    id: generateUniqueId(),
    name: 'Parada de ônibus',
    area: null,
    location: [-3.078592694623007, -59.934776392761115],
    icon: busIcon,
    description: 'Parada de ônibus lateral do campus.',
  },

  {
    id: generateUniqueId(),
    name: 'Parada de ônibus',
    area: null,
    location: [-3.077346698396388, -59.93218370026671],
    icon: busIcon,
    description: 'Parada de ônibus lateral do campus.',
  },
  {
    id: generateUniqueId(),
    name: 'Parada de ônibus',
    area: null,
    location: [-3.0765499781727272, -59.93019992391584],
    icon: busIcon,
    description: 'Parada de ônibus lateral do campus.',
  },
]