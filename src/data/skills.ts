import type { SkillCategory } from '@/types';

export const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Architecture',
    badge: '01 / UI & Client',
    summary:
      'Crafting accessible, high-performance interfaces with component hierarchies, typed data contracts, and responsive layout systems.',
    skills: [
      'React.js',
      'Next.js',
      'JavaScript (ES6+)',
      'TypeScript',
      'Tailwind CSS',
      'Bootstrap',
      'Material UI',
      'Redux',
      'Formik'
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Microservices',
    badge: '02 / Server & Logic',
    summary:
      'Designing modular server architectures, secure business workflows, authentication gateways, and domain-driven service boundaries.',
    skills: [
      'Node.js',
      'Express.js',
      'Microservices',
      'Sequelize',
      'Mongoose'
    ]
  },
  {
    id: 'databases',
    title: 'Database Management',
    badge: '03 / Persistence',
    summary:
      'Relational schemas, transactional consistency, indexing, and document-store modeling for high-throughput data operations.',
    skills: [
      'MySQL',
      'PostgreSQL',
      'MongoDB'
    ]
  },
  {
    id: 'apis',
    title: 'APIs & Headless CMS',
    badge: '04 / Integration',
    summary:
      'Connecting distributed services through predictable REST conventions, flexible GraphQL schemas, and headless content sources.',
    skills: [
      'REST APIs',
      'GraphQL',
      'WordPress',
      'Headless CMS',
      'Third-party API Integrations'
    ]
  },
  {
    id: 'realtime',
    title: 'Real-time & Telemetry',
    badge: '05 / Live Streams',
    summary:
      'Event-driven communication, bi-directional socket connections, and cloud alert broadcasting for interactive systems.',
    skills: [
      'WebSocket',
      'Firebase Notifications'
    ]
  },
  {
    id: 'devops',
    title: 'Cloud & Tooling',
    badge: '06 / Infrastructure',
    summary:
      'Containerization, version tracking, reproducible development workflows, and foundational cloud service deployment.',
    skills: [
      'AWS (basic)',
      'Docker',
      'Git',
      'GitHub'
    ]
  }
];
