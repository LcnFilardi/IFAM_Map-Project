import { generateUniqueId } from "@/config/generate-unique-id";
import { classroomIcon, veterinaryClinicIcon } from "@/config/icons-config";
import type { CampusLocation } from "@/types/campus-locations";
import { veterinaryClinic_area, veterinaryMedLabs_area } from "../../areas-constants";

export const medVetCampus_areas: CampusLocation[] = [
  {
    id: generateUniqueId(),
    name: 'Salas de aula e labolatórios do campus de medicina veterinária',
    area: veterinaryMedLabs_area,
    location: [-3.0855357465870856, -59.930399880284185],
    icon: classroomIcon,
    description: 'Salas de aula e laboratórios do campus de medicina veterinária, utilizadas para atividades acadêmicas.',
  },
  {
    id: generateUniqueId(),
    name: 'Clínica veterinária do campus.',
    area: veterinaryClinic_area,
    location: [-3.085785284379843, -59.9301158138853],
    icon: veterinaryClinicIcon,
    description: 'Clínica veterinária do campus, utilizada para atividades de atendimento médico veterinário e aulas práticas.',
  },
]