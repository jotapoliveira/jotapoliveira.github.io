
export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  institution: string;
  presentation: string;
  email: string;
  location: string;
  orcid: string;
  cienciaId: string;
  knowledgeFields: string[];
  photo?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: 'Ongoing' | 'Concluded';
  details: string[];
}

export interface Experience {
  id: string;
  role: string;
  category: 'Science & Research' | 'Teaching in Higher Education';
  employer: string;
  hostInstitution: string;
  period: string;
  details: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'Conference paper' | 'Thesis / Dissertation';
  status?: string;
  doi?: string;
  abstract: string;
}

export interface Activity {
  id: string;
  title: string;
  event: string;
  location?: string;
  date: string;
  type: 'Oral presentation' | 'Event participation';
}

export interface Project {
  id: string;
  name: string;
  designation: string;
  role: string;
  status: 'Ongoing' | 'Completed';
  period: string;
  funder: string;
  grantCode?: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
}

