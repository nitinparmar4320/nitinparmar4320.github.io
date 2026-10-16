import type { ExperienceItem } from '@/types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'excellent-webworld',
    company: 'Excellent Webworld',
    role: 'MERN Stack Developer',
    period: 'December 2025 – Present',
    isCurrent: true,
    location: 'Ahmedabad, India',
    verifiedDetailsNote:
      'Active engagement focused on full-stack application development within modern MERN ecosystem.',
    technologies: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'REST APIs'],
    highlights: [
      'Architecting responsive, high-performance web applications using modern React and Next.js.',
      'Developing resilient backend APIs, authentication workflows, and database integrations.'
    ]
  },
  {
    id: 'plusinfosys',
    company: 'Plusinfosys',
    role: 'Software Engineer',
    period: 'January 2023 – November 2025',
    isCurrent: false,
    location: 'Ahmedabad, India',
    verifiedDetailsNote:
      'Engineered core web platforms, headless CMS integrations, REST/GraphQL services, and interactive frontend interfaces.',
    technologies: ['React', 'Next.js', 'GraphQL', 'Headless CMS', 'Node.js', 'Redux', 'Tailwind CSS'],
    highlights: [
      'Delivered production web platforms and headless CMS solutions with dynamic content pipelines.',
      'Engineered REST and GraphQL endpoints optimizing query efficiency and client-side rendering speed.'
    ]
  },
  {
    id: 'technoguide',
    company: 'TechnoGuide Infosoft Pvt. Ltd.',
    role: 'Software Engineer Trainee',
    period: 'June 2022 – July 2022',
    isCurrent: false,
    location: 'Anand, Gujarat, India',
    verifiedDetailsNote:
      'Early software engineering role contributing to foundational web modules and data flows.',
    technologies: ['JavaScript', 'HTML5 & CSS3', 'DOM APIs', 'Git Workflows', 'Responsive Design'],
    highlights: [
      'Built core responsive UI components and practiced modern frontend coding standards.',
      'Studied foundational data structures, web application patterns, and version control workflows.'
    ]
  }
];
