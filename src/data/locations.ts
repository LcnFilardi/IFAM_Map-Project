
import { generateUniqueId } from '@/config/generate-unique-id';
import { academyIcon, aranouaBuildingIcon, auditoriumIcon, biopsicosocialSectorIcon, cafeteriaIcon, classroomIcon, fieldIcon, labsIcon, libraryIcon, maintenanceIcon, poolIcon, sportCourtIcon } from '@/config/icons-config';
import { academy_area, aranouaBuilding_area, auditorium_area, biopsicosocialSector_area, cafeteria_area, classrooms_area, classRooms_area_2, covered_area, engineeringClassrooms_area, engineeringLabs_area, landscapingLabs_area, maintenance_area, neabiSector_area, pool_area, sportsCourt } from '@/data/constants/areas-constants';
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
    location: [-3.0807460984619937, -59.93207856815463],
    icon: sportCourtIcon,
    description: 'Quadra esportiva do campus, utilizada para atividades físicas e esportivas.',
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
  {
    id: generateUniqueId(),
    name: 'Prédio Aranouá',
    area: aranouaBuilding_area,
    location: [-3.0770903327142953, -59.9308904483404],
    icon: aranouaBuildingIcon,
    description: 'Utilizado para atividades acadêmicas de pesquisa e desenvolvimento com auditório, salas de aula e laboratórios.',
  },
  {
    id: generateUniqueId(),
    name: 'Salas de aula de Engenharia do campus',
    area: engineeringClassrooms_area,
    location: [-3.07681692975396, -59.930164007550225],
    icon: classroomIcon,
    description: 'Salas de aula de Engenharia do campus, utilizadas para atividades acadêmicas e administrativas.',
  },
  {
    id: generateUniqueId(),
    name: 'Laboratórios do Curso de paisagismo ',
    area: landscapingLabs_area,
    location: [-3.0790780414776693, -59.93476051521844],
    icon: classroomIcon,
    description: 'Laboratórios do Curso de paisagismo do campus.',
  },
  {
    id: generateUniqueId(),
    name: 'Setor NEABI',
    area: neabiSector_area,
    location: [-3.0788828377667095, -59.934365863004906],
    icon: classroomIcon,
    description: 'O NEABI (Núcleo de Estudos Afro-Brasileiros e Indígenas) é um núcleo presente em instituições de ensino (como universidades e institutos federais) voltado à pesquisa, ao ensino, à extensão e à promoção de políticas de equidade racial e educação antirracista',
  },
  {
    id: generateUniqueId(),
    name: 'Setor Biopsicosocial',
    area: biopsicosocialSector_area,
    location: [-3.078712583850932, -59.93394446877399],
    icon: biopsicosocialSectorIcon,
    description: 'Setor responsável pela Assistência Social e estudantil. Inclui psicólogo, nutricionista e médico para atendimento aos estudantes e funcionários do campus.',
  },
  {
    id: generateUniqueId(),
    name: 'Área coberta principal',
    area: covered_area,
    location: [-3.078712583850932, -59.93394446877399],
    icon: biopsicosocialSectorIcon,
    description: 'Área de convivência e circulação do campus.',
  },
  {
    id: generateUniqueId(),
    name: 'Salas de aula do ensino médio e técnico do campus - Bloco G',
    area: classRooms_area_2,
    location: [-3.079196011167628, -59.93382042265306],
    icon: classroomIcon,
    description: 'Salas de aula do do ensino médio e técnico, labolatórios de informática e sala da reprografia',
  },
];
