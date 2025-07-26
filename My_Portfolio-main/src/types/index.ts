export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'devops' | 'tools' | 'aiml' | 'aimltech';
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  url: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  command: string;
}