import type { ArchitectureNode } from '../types';

export const architectureLayers: ArchitectureNode[] = [
  {
    id: 'client',
    label: '01. Client & Presentation Layer',
    role: 'Responsive interfaces, accessible state models, dynamic client rendering',
    tech: ['React.js', 'Next.js (SSR / SSG)', 'TypeScript', 'Formik / Redux'],
    description:
      'Engineers component hierarchies with declarative state management, predictable data contracts, and mobile-first layouts.',
    dataFlow: 'Dispatches validated user actions & handles optimistic UI mutations'
  },
  {
    id: 'gateway',
    label: '02. API Gateway & Routing',
    role: 'Request sanitization, routing, token-based authentication, rate limits',
    tech: ['Express.js Routes', 'REST Controllers', 'GraphQL Schemas', 'JWT Tokens'],
    description:
      'Guards endpoint boundaries, authenticates identity headers, and routes structured payloads to isolated business handlers.',
    dataFlow: 'Inspects bearer tokens & routes queries/mutations to appropriate microservices'
  },
  {
    id: 'microservices',
    label: '03. Business Logic & Microservices',
    role: 'Domain-specific services for products, bookings, notifications, and transactions',
    tech: ['Node.js Runtime', 'Service Modules', 'External API Connectors', 'Async Pipelines'],
    description:
      'Implements clean domain logic, handles third-party vendor integrations (travel, hotel, eSIM, payment), and coordinates asynchronous jobs.',
    dataFlow: 'Transforms business transactions into ACID database operations'
  },
  {
    id: 'persistence',
    label: '04. Data Persistence & Modeling',
    role: 'Transactional consistency, relational joins, indexing, and object modeling',
    tech: ['PostgreSQL', 'MySQL', 'MongoDB', 'Sequelize & Mongoose ORMs'],
    description:
      'Maintains database schemas, transactional integrity for commerce transactions, and indexing strategies for optimized read performance.',
    dataFlow: 'Commits state changes to persistent disk and returns verified records'
  },
  {
    id: 'realtime',
    label: '05. Real-Time Telemetry & Streams',
    role: 'Low-latency bidirectional updates, sensor streaming, and push alerts',
    tech: ['WebSocket', 'Firebase Notifications', 'Event Listeners'],
    description:
      'Delivers instant push telemetry for IoT sensor arrays and operational state notifications without repetitive HTTP polling.',
    dataFlow: 'Broadcasts telemetry diffs directly to connected clients in sub-100ms'
  }
];
