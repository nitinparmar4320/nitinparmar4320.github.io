import type { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'shoppingate',
    number: '01',
    title: 'Shoppingate',
    category: 'Multi-service platform',
    shortDescription:
      'Unified enterprise portal orchestrating e-commerce, global flight and hotel reservations, gift cards, and automated eSIM provisioning over modular microservices.',
    description:
      'A multi-service platform connecting e-commerce, travel booking, hotel reservations, gift cards, and eSIM services into a unified operational ecosystem.',
    roleTitle: 'Full Stack Engineer (MERN & PostgreSQL)',
    timeline: 'Production Deployment',
    highlights: [
      'Modular microservices architecture with JWT authentication & role-based RBAC',
      'PostgreSQL schema handling complex multi-service transactional integrity',
      'Unified external API bridges for airline GDS, hotel engines & eSIM fulfillment'
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Microservices Architecture',
      'Third-Party Integrations',
      'REST APIs',
      'JWT Auth'
    ],
    contributions: [
      'Architected and implemented modular backend microservices orchestrating product inventories, travel reservations, booking pipelines, and JWT authentication.',
      'Designed PostgreSQL schema models and relational queries handling transactional data integrity across disparate service domains.',
      'Engineered unified external API bridges integrating hotel systems, global flight inventory, payment gateways, and automated eSIM provisioning.',
      'Developed responsive administrative portals enabling internal operators to audit multi-vendor transactions, configure services, and manage platform users.'
    ],
    challenges: [
      {
        challenge: 'Synchronizing disparate data schemas across distinct business domains (e-commerce catalog, airline GDS, hotel reservations, and digital eSIM provisioning) without data inconsistencies.',
        solution: 'Engineered a centralized transactional bus with PostgreSQL relational modeling and idempotent Express.js API gateways, enforcing strict schema validation and automated rollback states on failed cross-service checkouts.'
      },
      {
        challenge: 'Third-party latency variances during peak flight and hotel availability queries impacting user checkout conversion.',
        solution: 'Implemented intelligent caching layers and asynchronous fulfillment queues with Webhook status listeners, cutting checkout friction and stabilizing API response latencies.'
      }
    ],
    keyFeatures: [
      {
        title: 'Unified Service Aggregator',
        description: 'Single checkout cart enabling customers to bundle physical e-commerce purchases with live international flights and hotel bookings in one transaction.'
      },
      {
        title: 'Automated eSIM Dispatch',
        description: 'Instantaneous telecommunication provisioning API that delivers digital eSIM QR codes immediately after verified payment confirmation.'
      },
      {
        title: 'Multi-Vendor Operator Console',
        description: 'Internal RBAC portal empowering finance and operations teams to review settlement ledger balances and audit order disputes.'
      }
    ],
    resumeOutcome: {
      metric: '+35%',
      label: 'Operational efficiency & 50k+ users supported',
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
    shortDescription:
      'High-performance decoupled enterprise ecosystem uniting marketing landing experiences, an interactive community hub, and role-based project administration boards.',
    description:
      'A project management ecosystem combining a high-performance public marketing presence, community networking platform, and centralized administrative application.',
    roleTitle: 'Full Stack & Next.js Engineer',
    timeline: 'Live Production Platform',
    highlights: [
      'Decoupled Headless CMS with Next.js frontend and WordPress GraphQL backend',
      'Role-based project administration governance across cross-functional teams',
      'Server-Side Rendering (SSR) & Static Site Generation (SSG) for 40% faster page loads'
    ],
    technologies: [
      'React.js',
      'Next.js',
      'Node.js',
      'WordPress (Headless)',
      'GraphQL',
      'REST APIs',
      'TypeScript',
      'Tailwind CSS'
    ],
    contributions: [
      'Engineered decoupled headless CMS architecture utilizing Next.js on the frontend communicating with WordPress via structured GraphQL schemas.',
      'Developed administrative control panels governing multi-tiered organizations, project boards, cross-functional teams, and member permissions.',
      'Implemented role-based dashboard views and visual progress indicators for granular project oversight and resource allocation.',
      'Contributed to core frontend performance optimizations through server-side rendering strategies, static generation, and asset delivery tuning.'
    ],
    challenges: [
      {
        challenge: 'Maintaining real-time marketing content agility for editorial teams while ensuring sub-second global page loads and enterprise SEO excellence.',
        solution: 'Built a decoupled Headless CMS pipeline utilizing Next.js incremental static regeneration (ISR) driven by WordPress GraphQL webhooks, eliminating monolithic rendering bottlenecks.'
      },
      {
        challenge: 'Enforcing granular permission boundaries across complex multi-tiered enterprise organizations with varied stakeholder access rights.',
        solution: 'Structured role-based access control (RBAC) authorization models in Node.js, mapping organization administrators, project managers, and community contributors to discrete API privileges.'
      }
    ],
    keyFeatures: [
      {
        title: 'Decoupled Headless Content Bus',
        description: 'WordPress GraphQL integration serving dynamic localized articles, documentation, and product release notes directly into static Next.js pages.'
      },
      {
        title: 'Cross-Team Project Boards',
        description: 'Interactive Kanban and timeline visualizations displaying sprint velocity, active blockers, and milestone delivery forecasting.'
      },
      {
        title: 'Community Collaboration Hub',
        description: 'Dedicated networking space connecting certified project management professionals worldwide.'
      }
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
    shortDescription:
      'Precision agricultural IoT monitoring system streaming live microclimate telemetry, threshold alert notifications, and distributed node health analytics.',
    description:
      'An agricultural IoT monitoring system offering real-time telemetry visualizers, automated threshold notifications, and distributed sensor grid placement controls.',
    roleTitle: 'IoT Platform & Full Stack Developer',
    timeline: 'Active Deployment',
    highlights: [
      'Bidirectional WebSocket data pipeline pushing live ambient sensor metrics without polling',
      'Automated Firebase push notification dispatcher triggered by microclimate anomaly rules',
      'Interactive farm sensor grid placement visualizer with tiered operator permissions'
    ],
    technologies: [
      'React.js',
      'Node.js',
      'EJS',
      'WebSocket',
      'Firebase Notifications',
      'MySQL',
      'Chart.js',
      'IoT Telemetry'
    ],
    contributions: [
      'Built live telemetry dashboards featuring graphical sensor readouts for ambient humidity, soil moisture, and microclimate temperatures.',
      'Engineered bidirectional WebSocket streams pushing instantaneous environment changes directly to operational browser clients without polling.',
      'Integrated Firebase notification triggers broadcasting push alerts whenever temperature or humidity thresholds exceed defined safety bounds.',
      'Created interactive sensor placement maps and tiered super-admin consoles for monitoring distributed farm plots.'
    ],
    challenges: [
      {
        challenge: 'High-frequency telemetry payloads from hundreds of remote sensor nodes flooding the operational database with redundant write operations.',
        solution: 'Implemented edge-buffering and delta-threshold filtering in Node.js, storing only significant statistical deviations while serving real-time readings over lightweight WebSockets.'
      },
      {
        challenge: 'Immediate notification delivery to field operators when catastrophic frost or drought conditions occur in remote agricultural plots.',
        solution: 'Constructed an automated background worker listening to live sensor telemetry streams that immediately fires Firebase Cloud Messaging (FCM) priority push alerts to mobile devices.'
      }
    ],
    keyFeatures: [
      {
        title: 'Real-Time Telemetry Stream',
        description: 'Sub-50ms WebSocket updates delivering microclimate temperature, ambient humidity, and root-zone soil saturation graphs.'
      },
      {
        title: 'Automated Threshold Alerts',
        description: 'Customizable alert rules broadcasting instant push notifications when moisture drops below safe germination thresholds.'
      },
      {
        title: 'Distributed Grid Placement',
        description: 'Interactive acreage mapping allowing operators to assign physical hardware MAC addresses to specific crop coordinates.'
      }
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
    title: 'MPOS Suite',
    category: 'Retail POS & Multi-Store Inventory',
    shortDescription:
      'Comprehensive retail POS platform managing product catalogs, inbound GRN reconciliation, dynamic promocodes, and multi-outlet stock sync.',
    description:
      'A comprehensive point-of-sale administration platform engineered to control 6 core operational workflows: product cataloging (CRUD creation, dynamic sorting, and stock management), promocode engines, Goods Received Note (GRN) logistics, supplier relationships, POS terminal customizations, and multi-store management.',
    roleTitle: 'Frontend & System Workflow Engineer',
    timeline: 'Enterprise Retail Deployment',
    highlights: [
      '6 operational modules: Product Catalog CRUD, Promocodes, GRN, Suppliers, POS & Stores',
      'Digitized Goods Received Note (GRN) workflow matching deliveries against PO invoices',
      'Real-time multi-store inventory synchronizer serving 20+ active retail administrators'
    ],
    technologies: [
      'React.js',
      'REST APIs',
      'State Management',
      'Component Architecture',
      'Multi-Store Inventory',
      'Form Validation'
    ],
    contributions: [
      'Engineered high-performance product catalog and stock administration module supporting creation forms, multi-column sorting, SKU tracking, and real-time inventory adjustments.',
      'Implemented digitized Goods Received Note (GRN) workflows and supplier management systems to reconcile inbound shipments against vendor purchase orders.',
      'Architected dynamic promocode rule matrix configuring discount percentages, cart thresholds, time-sensitive campaigns, and automatic cashier validation.',
      'Developed multi-store management consoles and granular POS customization controls to configure register layouts, receipt formats, and outlet-specific settings.',
      'Constructed resilient client-side state synchronizers and form validation pipelines handling high-density catalog updates and stock synchronization across outlets.'
    ],
    challenges: [
      {
        challenge: 'Manual warehouse paper receiving causing stock discrepancies between vendor delivery invoices and physical register inventories.',
        solution: 'Created an end-to-end digitized Goods Received Note (GRN) workflow with automatic variance calculation, PO matching, and instantaneous barcode inventory updates.'
      },
      {
        challenge: 'Complex promotional discount calculation conflicts between store-wide percentages, minimum cart thresholds, and product-specific exclusions.',
        solution: 'Engineered a rule-evaluator engine evaluating conditions in deterministic priority order, ensuring cashiers always apply authorized promotional rules without checkout freezes.'
      }
    ],
    keyFeatures: [
      {
        title: '6-in-1 Operational Command Center',
        description: 'Single interface managing products, promocodes, GRN deliveries, supplier directories, register settings, and store branches.'
      },
      {
        title: 'Dynamic Catalog Sorting & SKU Tracking',
        description: 'Instant sorting across stock levels, unit pricing, and barcode identifiers with inline threshold warnings.'
      },
      {
        title: 'Multi-Outlet Stock Sync',
        description: 'Centralized inventory engine synchronizing stock changes across multiple physical retail branches in real time.'
      }
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
