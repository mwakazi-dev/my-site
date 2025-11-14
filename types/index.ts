export interface Experience {
  id: number;
  company: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  website: string;
  technologies: string[];
  location?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  url: string;
  featured: boolean;
  technologies: string[];
  category?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

