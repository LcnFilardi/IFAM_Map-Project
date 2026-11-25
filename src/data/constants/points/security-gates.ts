import { generateUniqueId } from "@/config/generate-unique-id";
import { entranceIcon } from "@/config/icons-config";
import type { CampusLocation } from "@/types/campus-locations";

export const securityGate_points: CampusLocation[] = [
  {
    id: generateUniqueId(),
    name: 'Portaria principal (Entrada)',
    area: null,
    location: [-3.0800047811492446, -59.93383221137789],
    icon: entranceIcon,
    description: 'Ponto principal de entrada no campus.',
  },
  {
    id: generateUniqueId(),
    name: 'Portaria lateral',
    area: null,
    location: [-3.0768520454339, -59.93050001337518],
    icon: entranceIcon,
    description: 'Ponto lateral de entrada no campus.',
  },
  {
    id: generateUniqueId(),
    name: 'Portaria do Campus de Medicina Veterinária.',
    area: null,
    location: [-3.085014739708768, -59.9303074871518],
    icon: entranceIcon,
    description: 'Portaria do Campus de Medicina Veterinária, utilizada para controle de acesso e segurança.',
  },
]