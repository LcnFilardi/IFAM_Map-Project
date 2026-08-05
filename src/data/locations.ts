import type { CampusIcon } from '@/components/icons-config';
import { busIcon, entranceIcon, exitIcon, sportCourtIcon } from '@/components/icons-config';
import { AmazoniaBeeStore, sportsCourt } from '@/data/constants/areas-constants';
import { busStop } from '@/data/constants/local-constants';

export type CampusLocation = {
  id: string;
  name: string;
  area: [number, number][];
  location: [number, number];
  icon: CampusIcon;
  description: string;
};

const generateUniqueId = () => crypto.randomUUID();

export const campusLocations: CampusLocation[] = [
  {
    id: generateUniqueId(),
    name: 'Portaria principal (Entrada)',
    area: [],
    location: [-3.0800047811492446, -59.93383221137789],
    icon: entranceIcon,
    description: 'Ponto principal de entrada no campus.',
  },
  {
    id: generateUniqueId(),
    name: 'Portaria principal (Saída)',
    area: [],
    location: [-3.079980220714156, -59.933877713912274],
    icon: exitIcon,
    description: 'Ponto principal de saída no campus.',
  },
  {
    id: generateUniqueId(),
    name: 'Portaria lateral',
    area: [],
    location: [-3.0768520454339, -59.93050001337518],
    icon: entranceIcon,
    description: 'Ponto lateral de entrada no campus.',
  },
  {
    id: generateUniqueId(),
    name: 'Quadra esportiva IFAM-CMZL',
    area: sportsCourt,
    location: [-3.080927718086223, -59.93214048372894],
    icon: sportCourtIcon,
    description: 'Quadra esportiva do campus, utilizada para atividades físicas e esportivas.',
  },
  {
    id: generateUniqueId(),
    name: 'Parada de ônibus',
    area: [],
    location: busStop,
    icon: busIcon,
    description: 'Parada de ônibus a frente do campus.',
  },
  {
    id: generateUniqueId(),
    name: 'Parada de ônibus',
    area: [],
    location: [-3.0776590997167426, -59.93240414162743],
    icon: busIcon,
    description: 'Parada de ônibus lateral do campus.',
  },
  {
    id: generateUniqueId(),
    name: 'Parada de ônibus',
    area: [],
    location: [-3.076578635005317, -59.930522086056634],
    icon: busIcon,
    description: 'Parada de ônibus frente à saída lateral do campus.',
  },
  {
    id: generateUniqueId(),
    name: 'Parada de ônibus',
    area: AmazoniaBeeStore,
    location: [-3.076578635005317, -59.930522086056634],
    icon: busIcon,
    description: 'Loja de produtos naturais da Amazônia',
  },
];
