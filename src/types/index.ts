export interface ProjectLink {
  label: string;
  url: string;
  isPrimary?: boolean;
}

export interface ProjectContribution {
  headline: string;
  detail: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  clientType?: string;
  description: string;
  shortDescription?: string;
  highlights?: string[];
  roleTitle?: string;
  timeline?: string;
  technologies: string[];
  contributions: string[];
  challenges?: ProjectChallenge[];
  keyFeatures?: ProjectFeature[];
  resumeOutcome?: {
    metric: string;
    label: string;
    disclaimer: string;
  };
  links: ProjectLink[];
  layoutType: 'wide-commerce' | 'split-cms' | 'sensor-telemetry' | 'admin-workflows';
  accentColor?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  location?: string;
  verifiedDetailsNote?: string;
  technologies?: string[];
  highlights?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  summary: string;
  skills: string[];
}

export interface EducationData {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  scale: string;
  field: string;
  credentialNote: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  role: string;
  tech: string[];
  description: string;
  dataFlow: string;
}
