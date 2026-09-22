import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'inventory-management',
    title: 'Inventory Management System',
    category: 'fullstack',
    status: 'In Development',
    featured: true,
    description:
      'A full-stack inventory management platform designed to manage products, stock movements, users, reporting, and other inventory-related operations.',
    problem:
      '[PROJECT DESCRIPTION] Small teams often track stock in spreadsheets that drift out of sync the moment more than one person touches them, leading to over-ordering, stockouts, and no audit trail of who changed what.',
    solution:
      'A centralized, role-aware platform where every stock movement is recorded as an event, giving an accurate running balance per product and a full history for reporting.',
    technologies: ['Vue', 'TypeScript', 'Hono', 'PostgreSQL', 'Supabase'],
    features: [
      'Product catalog with categories and stock thresholds',
      'Stock-in / stock-out movement tracking with an audit trail',
      'Role-based user management (admin, staff)',
      'Reporting dashboard for stock levels and movement history'
    ],
    challenges: [
      'Designing a data model where stock levels are derived from an immutable movement log rather than a mutable counter, to keep the audit trail trustworthy'
    ],
    lessonsLearned: [
      'Event-sourced stock movements make reporting and auditing dramatically simpler than mutating a single "quantity" column'
    ],
    architecture: ['Frontend (Vue)', 'API (Hono)', 'Backend', 'Database (PostgreSQL / Supabase)'],
    image: '/images/projects/inventory-management.webp',
    github: '#',
    demo: '#'
  },
  {
    id: 'dashboard-management-system',
    title: 'Dashboard Management System',
    category: 'fullstack',
    status: 'Completed',
    featured: false,
    description:
      '[PROJECT DESCRIPTION] A multi-module admin dashboard for managing users, access templates, and day-to-day operational data behind a single, consistent interface.',
    problem:
      'Operational teams needed one dashboard to manage users, permissions, and configuration instead of several disconnected internal tools.',
    solution:
      'A modular dashboard where each domain (users, access control, scheduling) is its own self-contained section backed by a shared API and design system.',
    technologies: ['Vue', 'TypeScript', 'Hono', 'MariaDB'],
    features: [
      'User management with role-based access templates',
      'Reusable data tables with search and filtering',
      'Centralized authentication and session handling'
    ],
    challenges: ['[PROJECT DESCRIPTION] Keeping a growing number of admin modules consistent without duplicating UI logic'],
    lessonsLearned: ['A shared component/data layer pays off quickly once a dashboard grows past two or three modules'],
    architecture: ['Frontend (Vue)', 'API (Hono)', 'Backend', 'Database (MariaDB)'],
    image: '/images/projects/dashboard-management.webp',
    github: '#',
    demo: '#'
  },
  {
    id: 'personal-developer-portfolio',
    title: 'Personal Developer Portfolio',
    category: 'frontend',
    status: 'Completed',
    featured: false,
    description:
      'This site — a developer-workspace-styled portfolio built to present projects, experience, and skills without leaning on a generic template.',
    problem: 'Generic portfolio templates rarely reflect how a developer actually thinks or works.',
    solution:
      'A from-scratch design built around a "developer workspace" concept: data-driven sections, a command palette, and an optional terminal.',
    technologies: ['Vue', 'TypeScript', 'Vite', 'CSS'],
    features: [
      'Fully data-driven sections (skills, projects, experience, education)',
      'Dark / light theme with persisted preference',
      'Command palette (Ctrl+K) and optional interactive terminal'
    ],
    challenges: ['Keeping the visual identity distinctive without sacrificing recruiter-friendly clarity'],
    lessonsLearned: ['Constraints (no fake progress bars, no generic gradients) force more intentional design decisions'],
    architecture: ['Vue 3 SPA', 'Static data layer', 'No backend required'],
    image: '/images/projects/personal-portfolio.webp',
    github: '#',
    demo: '#'
  }
]

export const projectCategories: { id: 'all' | Project['category']; label: string }[] = [
  { id: 'all', label: 'ALL' },
  { id: 'frontend', label: 'FRONTEND' },
  { id: 'backend', label: 'BACKEND' },
  { id: 'fullstack', label: 'FULL STACK' },
  { id: 'api', label: 'API' },
  { id: 'other', label: 'OTHER' }
]

export const featuredProject = projects.find((project) => project.featured) ?? projects[0]
