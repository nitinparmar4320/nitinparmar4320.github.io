import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'shoppingate',
    number: '01',
    title: 'Shoppingate',
    category: 'Multi-service commerce & travel platform',
    description:
      'A multi-service platform connecting e-commerce, travel booking, hotel reservations, gift cards, and eSIM services into a unified operational ecosystem.',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Microservices Architecture',
      'Third-Party Integrations'
    ],
    contributions: [
      'Architected and implemented modular backend microservices orchestrating product inventories, travel reservations, booking pipelines, and JWT authentication.',
      'Designed PostgreSQL schema models and relational queries handling transactional data integrity across disparate service domains.',
      'Engineered unified external API bridges integrating hotel systems, global flight inventory, payment gateways, and automated eSIM provisioning.',
      'Developed responsive administrative portals enabling internal operators to audit multi-vendor transactions, configure services, and manage platform users.'
    ],
    resumeOutcome: {
      metric: '+35%',
      label: 'Operational efficiency & 50+ active users supported',
      disclaimer: 'Resume-reported outcome metric; presented as stated in candidate documentation.'
    },
    links: [
      {
        label: 'Visit Shoppingate',
        url: 'https://shoppinggate.app/',
        isPrimary: true
      }
    ],
    layoutType: 'wide-commerce',
    accentColor: '#E5533D'
  },
  {
    id: 'pmpeople',
    number: '02',
    title: 'PMPeople',
    category: 'Project management platform & headless CMS ecosystem',
    description:
      'A project management ecosystem combining a high-performance public marketing presence, community networking platform, and centralized administrative application.',
    technologies: [
      'React.js',
      'Next.js',
      'Node.js',
      'WordPress (Headless)',
      'GraphQL',
      'REST APIs'
    ],
    contributions: [
      'Engineered decoupled headless CMS architecture utilizing Next.js on the frontend communicating with WordPress via structured GraphQL schemas.',
      'Developed administrative control panels governing multi-tiered organizations, project boards, cross-functional teams, and member permissions.',
      'Implemented role-based dashboard views and visual progress indicators for granular project oversight and resource allocation.',
      'Contributed to core frontend performance optimizations through server-side rendering strategies, static generation, and asset delivery tuning.'
    ],
    resumeOutcome: {
      metric: '40%',
      label: 'Page-load performance improvement',
      disclaimer: 'Resume-reported metric; reflective of transition to decoupled Next.js SSR architecture.'
    },
    links: [
      {
        label: 'Public Platform',
        url: 'https://pmpeople.ai/',
        isPrimary: true
      },
      {
        label: 'Community Hub',
        url: 'https://community.pmpeople.ai/'
      },
      {
        label: 'Web Application',
        url: 'https://app.pmpeople.ai/'
      }
    ],
    layoutType: 'split-cms',
    accentColor: '#5267D8'
  },
  {
    id: 'seedling',
    number: '03',
    title: 'Seedling',
    category: 'Farm sensor monitoring & real-time telemetry management',
    description:
      'An agricultural IoT monitoring system offering real-time telemetry visualizers, automated threshold notifications, and distributed sensor grid placement controls.',
    technologies: [
      'React.js',
      'Node.js',
      'EJS',
      'WebSocket',
      'Firebase Notifications',
      'MySQL'
    ],
    contributions: [
      'Built live telemetry dashboards featuring graphical sensor readouts for ambient humidity, soil moisture, and microclimate temperatures.',
      'Engineered bidirectional WebSocket streams pushing instantaneous environment changes directly to operational browser clients without polling.',
      'Integrated Firebase notification triggers broadcasting push alerts whenever temperature or humidity thresholds exceed defined safety bounds.',
      'Created interactive sensor placement maps and tiered super-admin consoles for monitoring distributed farm plots.'
    ],
    resumeOutcome: {
      metric: '35%',
      label: 'Reported reduction in manual field monitoring; 50+ users supported',
      disclaimer: 'Resume-reported operational claim; reflects automated sensor streaming capability.'
    },
    links: [],
    layoutType: 'sensor-telemetry',
    accentColor: '#2E7D32'
  },
  {
    id: 'mpos',
    number: '04',
    title: 'MPOS',
    category: 'Point-of-sale administration & operational inventory',
    description:
      'A point-of-sale administrative management interface engineered to streamline retail product cataloging, promotion scheduling, and Goods Received Note (GRN) logistics.',
    technologies: [
      'React.js',
      'JavaScript (ES6+)',
      'State Management',
      'Component Architecture',
      'REST APIs'
    ],
    contributions: [
      'Engineered structured administrative management consoles for managing product SKUs, price matrixes, discount tiers, and real-time order tracking.',
      'Implemented digitized Goods Received Note (GRN) generation workflows to verify inbound inventory against supplier purchase orders.',
      'Developed comprehensive system settings, tax configurations, and operational audit reporting tools for retail administrators.',
      'Constructed resilient client-side form validation and state synchronizers handling high-volume inventory updates.'
    ],
    resumeOutcome: {
      metric: '20+',
      label: 'Administrators actively supported in daily inventory workflows',
      disclaimer: 'Resume-reported operational volume.'
    },
    links: [],
    layoutType: 'admin-workflows',
    accentColor: '#D97706'
  }
];
