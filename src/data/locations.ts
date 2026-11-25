
import { generateUniqueId } from '@/config/generate-unique-id';
import { academyIcon, amazonStoreIcon, auditoriumIcon, cafeteriaIcon, classroomIcon, fieldIcon, labsIcon, libraryIcon, maintenanceIcon, poolIcon, sportCourtIcon } from '@/config/icons-config';
import { academy_area, amazoniaBeeStore, auditorium_area, cafeteria_area, classrooms_area, engineeringLabs_area, maintenance_area, pool_area, sportsCourt } from '@/data/constants/areas-constants';
import { library } from '@/data/constants/local-constants';
import type { CampusLocation } from '@/types/campus-locations';
import { changingRooms_areas } from './constants/areas/central-campus/changing-rooms';
import { medVetCampus_areas } from './constants/areas/med-vet-campus';
import { busStation_points } from './constants/points/bus-stations';
import { securityGate_points } from './constants/points/security-gates';

export const campusLocations: CampusLocation[] = [
  ...securityGate_points,
  ...busStation_points,
  ...medVetCampus_areas,
  ...changingRooms_areas,
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
    area: engineeringLabs_area,
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
