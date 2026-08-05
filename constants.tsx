
import { PersonalInfo, Education, Experience, Publication, Project, Activity } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "João Oliveira",
  fullName: "João Oliveira",
  title: "PhD Candidate & Researcher",
  institution: "FEUP — Faculty of Engineering, University of Porto",
  presentation: "PhD candidate in Electrical and Computer Engineering at FEUP. Research focused on developing resilient wireless sensor networks for emergency and critical scenarios, with particular emphasis on railway safety, anomaly detection, and real-time condition monitoring.",
  email: "jotapoliveir@hotmail.com",
  location: "Porto, Portugal",
  orcid: "0009-0000-1404-1303",
  cienciaId: "911D-08D7-A1DC",
  photo: "", // Adicione um URL de imagem (ex: "https://...") ou caminho de ficheiro aqui
  knowledgeFields: [
    "Electrotechnical Engineering, Electronics and Informatics",
    "Automation and Control Systems",
    "Wireless Sensor Networks",
    "Railway Safety & Real-Time Monitoring"
  ]
};

export const EDUCATION_DATA: Education[] = [
  {
    id: "1",
    degree: "Ph.D. in Electrical and Computer Engineering",
    institution: "Universidade do Porto — Faculdade de Engenharia (FEUP), Portugal",
    period: "2023/09 — 2028",
    status: "Ongoing",
    details: [
      "Research focused on resilient wireless sensor networks for emergency and critical scenarios.",
      "Department of Electrical and Computer Engineering (DEEC)."
    ]
  },
  {
    id: "2",
    degree: "Integrated Master's Degree in Electrical and Computer Engineering",
    institution: "Universidade do Porto — Faculdade de Engenharia (FEUP), Portugal",
    period: "2016/09 — 2021/07",
    status: "Concluded",
    details: [
      "Major in Automation and Control Systems.",
      "Dissertation / Thesis: 'Real-time fault detection in photovoltaic power plants'.",
      "Comprehensive training in signal processing, control algorithms, microcontrollers, and automation."
    ]
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "exp1",
    role: "Research Assistant (Research)",
    category: "Science & Research",
    employer: "Universidade do Porto — Faculdade de Engenharia, Portugal",
    hostInstitution: "Universidade do Porto — Faculdade de Engenharia, Portugal",
    period: "2023/07/07 — 2026/06/30",
    details: [
      "Conducting research on intelligent freight wagons, smart sensor networks, and safety diagnostics under the SMART WAGONS project.",
      "Investigating low-power wireless communication protocols and real-time fault detection for railway systems."
    ]
  },
  {
    id: "exp2",
    role: "Invited Assistant (University Teacher)",
    category: "Teaching in Higher Education",
    employer: "Universidade do Porto — Faculdade de Engenharia, Portugal",
    hostInstitution: "Universidade do Porto — Faculdade de Engenharia, Portugal",
    period: "2023/02/01 — 2023/07/07",
    details: [
      "Higher education teaching experience at FEUP.",
      "Instructed practical and laboratory sessions in Electrical Engineering courses."
    ]
  }
];

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: "p1",
    title: "Smart Sensor Network for Real-Time Anomaly Detection in Railway Freight Wagons",
    authors: "Oliveira, João",
    venue: "First International Conference on Transportation Systems (TS2025), Lisbon, Portugal",
    year: 2025,
    type: "Conference paper",
    status: "Accepted & Presented",
    abstract: "This paper proposes a resilient wireless sensor network architecture specifically tailored for real-time anomaly detection in railway freight wagons. It addresses critical safety challenges by enabling continuous condition monitoring and early fault diagnosis in harsh operational environments."
  },
  {
    id: "p2",
    title: "Real-time fault detection in photovoltaic power plants",
    authors: "Oliveira, João",
    venue: "Master's Dissertation — Universidade do Porto, Faculdade de Engenharia (FEUP)",
    year: 2021,
    type: "Thesis / Dissertation",
    abstract: "Developed real-time fault detection algorithms for solar photovoltaic power generation systems. The work evaluated signal processing techniques and automated detection strategies to identify operational faults promptly, maximizing plant reliability and energy yield."
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "prj1",
    name: "SMART WAGONS",
    designation: "SMART WAGONS - Desenvolvimento de capacidade produtiva em Portugal de vagões inteligentes para mercadorias",
    role: "Researcher",
    status: "Ongoing",
    period: "2023/07/07 — 2026/06/30",
    funder: "Agência para a Competitividade e Inovação IP (IAPMEI), Portugal",
    grantCode: "C644940527-00000048",
    description: "Developing productive capacity in Portugal for intelligent freight wagons equipped with smart sensor networks for real-time safety and condition monitoring.",
    fullDescription: "SMART WAGONS is an R&D project funded by the Agência para a Competitividade e Inovação IP (IAPMEI). The project aims to revolutionize railway freight transport in Portugal by designing and deploying intelligent freight wagons equipped with wireless sensor networks. João's contribution centers on embedded sensor node architecture, real-time anomaly detection algorithms, and resilient wireless communication protocols designed for harsh railway environments.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1200&auto=format&fit=crop",
    tags: ["Wireless Sensor Networks", "Railway Safety", "Anomaly Detection", "Condition Monitoring", "Automation"]
  },
  {
    id: "prj2",
    name: "FERROVIA 4.0",
    designation: "FERROVIA 4.0 — Intelligent Railway Systems",
    role: "Research Fellow",
    status: "Completed",
    period: "2021/12/02 — 2023/07/07",
    funder: "Agência Nacional de Inovação SA (ANI), Portugal",
    grantCode: "POCI-01-0247-FEDER-046111",
    description: "Research fellow on national railway R&D focused on smart infrastructure monitoring, safety enhancement, and vehicle telemetry.",
    fullDescription: "FERROVIA 4.0 was a major national collaborative R&D project funded by Agência Nacional de Inovação SA under FEDER/POCI. As a research fellow, João investigated sensor telemetry, intelligent monitoring techniques, and data processing for railway safety and predictive maintenance of track and rolling stock.",
    image: "https://images.unsplash.com/photo-1523351445-626ec3a80d21?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Railway 4.0", "Embedded Systems", "IoT", "Fault Diagnosis", "POCI-FEDER"]
  }
];

export const ACTIVITIES_DATA: Activity[] = [
  {
    id: "act1",
    title: "Smart Sensor Network for Real-Time Anomaly Detection in Railway Freight Wagons",
    event: "First International Conference on Transportation Systems (TS2025)",
    location: "Lisbon, Portugal",
    date: "2025/06/17",
    type: "Oral presentation"
  },
  {
    id: "act2",
    title: "Participation in the Portugal Railway Summit 2024",
    event: "Portugal Railway Summit 2024",
    location: "Entroncamento, Portugal",
    date: "2024/05/22",
    type: "Event participation"
  },
  {
    id: "act3",
    title: "Participation in the Portugal Railway Summit 2023",
    event: "Portugal Railway Summit 2023",
    location: "Entroncamento, Portugal",
    date: "2023/05/03",
    type: "Event participation"
  }
];

