import type { CampusIcon } from '@/components/icons-config';
import { academyIcon, amazonStoreIcon, auditoriumIcon, busIcon, cafeteriaIcon, classroomIcon, entranceIcon, fieldIcon, labsIcon, libraryIcon, maintenanceIcon, poolIcon, sportCourtIcon } from '@/components/icons-config';
import { academy_area, amazoniaBeeStore, auditorium_area, cafeteria_area, classrooms_area, enginerringLabs_area, maintenance_area, pool_area, sportsCourt } from '@/data/constants/areas-constants';
import { busStop, library } from '@/data/constants/local-constants';

export type CampusLocation = {
  id: string;
  name: string;
  area: [number, number][];
  location: [number, number];
  icon?: CampusIcon;
  description: string;
};

const generateUniqueId = () =>
  `${Date.now()}-${Math.random().toString(36).slice(2)}`;

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
    location: [-3.0808922013218742, -59.93211699406524],
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
    name: 'Loja de produtos naturais da Amazônia',
    area: amazoniaBeeStore,
    location: [-3.080687506641604, -59.93199153757129],
    icon: amazonStoreIcon,
    description: 'Loja de produtos naturais da Amazônia',
  },
  {
    id: generateUniqueId(),
    name: 'Piscina olímpica',
    area: pool_area,
    location: [-3.078765305323722, -59.93187184348665],
    icon: poolIcon,
    description: 'Piscina olímpica do campus, utilizada para atividades aquáticas e esportivas.',
  },
  {
    id: generateUniqueId(),
    name: 'Biblioteca e auditório do campus',
    area: auditorium_area,
    location: [-3.0786736632460485, -59.932786273954584],
    icon: auditoriumIcon,
    description: '1 andar - Biblioteca || 2º andar - Auditório',
  },
  {
    id: generateUniqueId(),
    name: 'Biblioteca',
    area: [],
    location: library,
    icon: libraryIcon,
    description: 'Biblioteca do campus, area destinada à leitura, estudo e pesquisa, com acervo de livros, periódicos e recursos digitais.',
  },
  {
    id: generateUniqueId(),
    name: 'Laboratórios de engenharia de software do campus',
    area: enginerringLabs_area,
    location: [-3.0772373704891285, -59.93010944849816],
    icon: labsIcon,
    description: 'Laboratórios de engenharia de software do campus, utilizados para atividades acadêmica',
  },
  {
    id: generateUniqueId(),
    name: 'Campo atlético',
    area: [],
    location: [-3.0779942147259827, -59.931151366904004],
    icon: fieldIcon,
    description: 'Campo atlético do campus, utilizado para atividades esportivas.',
  },
  {
    id: generateUniqueId(),
    name: 'Academia',
    area: academy_area,
    location: [-3.078811562390264, -59.931365185374595],
    icon: academyIcon,
    description: 'Academia do campus, utilizada para atividades físicas.',
  },
  {
    id: generateUniqueId(),
    name: 'Manutenção e serviços gerais do campus',
    area: maintenance_area,
    location: [-3.079179702690617, -59.932342313318735],
    icon: maintenanceIcon,
    description: 'Área destinada à manutenção e serviços gerais do campus, incluindo oficinas e depósitos.',
  },
  {
    id: generateUniqueId(),
    name: 'Refeitório e área de alimentação do campus',
    area: cafeteria_area,
    location: [-3.078403752618746, -59.933782358254184],
    icon: cafeteriaIcon,
    description: 'Área destinada à alimentação e refeições.',
  },
  {
    id: generateUniqueId(),
    name: 'Salas de aula do ensino médio e técnico do campus',
    area: classrooms_area,
    location: [-3.079602334061358, -59.93312434488352],
    icon: classroomIcon,
    description: 'Salas de aula do campus, utilizadas para atividades acadêmicas e administrativas.',
  },

];
