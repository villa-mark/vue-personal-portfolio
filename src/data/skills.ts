import type { Skill } from './types'

/**
 * Every technology on the site is configurable from this single list.
 * No fake proficiency percentages — the Skill Explorer instead shows
 * category, description, and where each skill was actually used.
 */
export const skills: Skill[] = [
  {
    id: 'vue',
    name: 'Vue',
    category: 'Frontend',
    description: 'Primary framework for building reactive, component-driven user interfaces.',
    projectIds: ['inventory-management', 'dashboard-management-system', 'personal-developer-portfolio'],
    relatedSkillIds: ['typescript', 'vite']
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Languages',
    description: 'Core language for interactive, browser-based application logic.',
    projectIds: ['inventory-management', 'dashboard-management-system', 'personal-developer-portfolio'],
    relatedSkillIds: ['typescript', 'nodejs']
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Languages',
    description: 'Typed superset of JavaScript used across the front and back end for safer refactors.',
    projectIds: ['inventory-management', 'dashboard-management-system', 'personal-developer-portfolio'],
    relatedSkillIds: ['vue', 'nodejs']
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'Frontend',
    description: 'Semantic markup and accessible document structure.',
    projectIds: ['personal-developer-portfolio'],
    relatedSkillIds: ['css']
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Frontend',
    description: 'Layout, responsive design, and theming, including custom design systems.',
    projectIds: ['personal-developer-portfolio'],
    relatedSkillIds: ['html', 'bootstrap']
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'Frontend',
    description: 'Utility-driven component library used for rapid, consistent UI scaffolding.',
    projectIds: [],
    relatedSkillIds: ['css']
  },
  {
    id: 'svelte',
    name: 'Svelte',
    category: 'Frontend',
    description: 'Compiler-based UI framework used for lightweight dashboard interfaces.',
    projectIds: [],
    relatedSkillIds: ['typescript']
  },
  {
    id: 'hono',
    name: 'Hono',
    category: 'Backend',
    description: 'Lightweight, edge-friendly web framework used for building typed REST APIs.',
    projectIds: ['inventory-management', 'dashboard-management-system'],
    relatedSkillIds: ['nodejs', 'rest-apis']
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    description: 'JavaScript runtime powering API servers and build tooling.',
    projectIds: ['inventory-management', 'dashboard-management-system'],
    relatedSkillIds: ['hono', 'typescript']
  },
  {
    id: 'rest-apis',
    name: 'REST APIs',
    category: 'Backend',
    description: 'Designing predictable, resource-oriented HTTP APIs.',
    projectIds: ['inventory-management', 'dashboard-management-system'],
    relatedSkillIds: ['hono']
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Database',
    description: 'Relational database used for transactional application data.',
    projectIds: [],
    relatedSkillIds: ['mariadb', 'sql']
  },
  {
    id: 'mariadb',
    name: 'MariaDB',
    category: 'Database',
    description: 'MySQL-compatible relational database used in dashboard-style applications.',
    projectIds: ['dashboard-management-system'],
    relatedSkillIds: ['mysql', 'sql']
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Database',
    description: 'Relational database used for structured, constraint-driven data models.',
    projectIds: ['inventory-management'],
    relatedSkillIds: ['supabase', 'sql']
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'Database',
    description: 'Managed Postgres platform providing auth, storage, and instant APIs.',
    projectIds: ['inventory-management'],
    relatedSkillIds: ['postgresql']
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Database',
    description: 'Querying and modeling relational data across engines.',
    projectIds: ['inventory-management', 'dashboard-management-system'],
    relatedSkillIds: ['postgresql', 'mariadb']
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'Languages',
    description: 'Server-side language used for traditional web application backends.',
    projectIds: [],
    relatedSkillIds: []
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Languages',
    description: 'General-purpose language used for scripting, tooling, and data tasks.',
    projectIds: [],
    relatedSkillIds: []
  },
  {
    id: 'c',
    name: 'C',
    category: 'Languages',
    description: 'Low-level systems programming language and CS fundamentals.',
    projectIds: [],
    relatedSkillIds: ['cpp']
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'Languages',
    description: 'Systems and performance-oriented programming language.',
    projectIds: [],
    relatedSkillIds: ['c']
  },
  {
    id: 'csharp',
    name: 'C#',
    category: 'Languages',
    description: 'Object-oriented language used for desktop and backend applications.',
    projectIds: [],
    relatedSkillIds: []
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Languages',
    description: 'Object-oriented, platform-independent programming language.',
    projectIds: [],
    relatedSkillIds: []
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Tools',
    description: 'Distributed version control used for every project in this portfolio.',
    projectIds: ['inventory-management', 'dashboard-management-system', 'personal-developer-portfolio'],
    relatedSkillIds: ['github']
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Tools',
    description: 'Source hosting, code review, and CI/CD workflows.',
    projectIds: ['inventory-management', 'dashboard-management-system', 'personal-developer-portfolio'],
    relatedSkillIds: ['git']
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'Tools',
    description: 'Primary code editor, configured with a lean, focused extension set.',
    projectIds: [],
    relatedSkillIds: []
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'Tools',
    description: 'API exploration and manual testing during backend development.',
    projectIds: ['inventory-management', 'dashboard-management-system'],
    relatedSkillIds: ['rest-apis']
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'Other',
    description: 'Interface design and prototyping before implementation.',
    projectIds: [],
    relatedSkillIds: []
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'Tools',
    description: 'Fast dev server and build tool for modern frontend projects.',
    projectIds: ['personal-developer-portfolio'],
    relatedSkillIds: ['vue']
  }
]

export const skillCategories = ['Frontend', 'Backend', 'Database', 'Languages', 'Tools', 'Other'] as const
