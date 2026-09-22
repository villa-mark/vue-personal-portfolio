import type { ExperienceEntry } from './types'

export const experience: ExperienceEntry[] = [
  {
    id: 'exp-current',
    company: 'Litecloud Corporation',
    position: 'Software Developer',
    employmentType: 'Full-time',
    location: 'Sanson St. Lahug, Cebu City',
    startDate: 'August 15, 2024',
    endDate: 'Present',
    description:
      'Develop and maintain CERPSYS, a web-based enterprise system used to support and automate business operations across multiple departments.',
    responsibilities: [
      'Develop and maintain enterprise modules for Payroll, Cash Advance, PEMASYS, Contributions, Payments, Funds, Vicinage, Voucher, Accounts Payable, and other business processes',
      'Build and improve frontend functionality, user interfaces, and interactive features using JavaScript, TypeScript, Vue, Svelte, and jQuery',
      'Develop and maintain backend functionality and APIs using Hono, SQL, and MariaDB',
      'Create and modify database queries, stored procedures, and data-related functionality to support application requirements',
      'Investigate, reproduce, and fix issues across frontend, backend, and database layers',
      'Perform functional testing by validating application behavior and verifying data changes in the database',
      'Maintain and improve existing legacy code while implementing new features and resolving reported issues'
    ],
    achievements: [
      'Contributed to the development and maintenance of multiple enterprise modules used in day-to-day business operations',
      'Worked across frontend, backend, and database layers to investigate and resolve application issues'
    ],
    technologies: [
      'JavaScript',
      'TypeScript',
      'Svelte',
      'jQuery',
      'Hono',
      'SQL',
      'MariaDB'
    ]
  },

  {
    id: 'exp-previous',
    company: 'Pocari Sweat',
    position: 'Dicer',
    employmentType: 'Part-time',
    location: 'Mandaue, Cebu',
    startDate: '2024',
    endDate: '2025',
    description: 'Work as a helper | Dicer',
    responsibilities: [
      'Prepare and load pocari products',
      'Help in distribution to the runner'
    ],
    achievements: [],
    technologies: []
  }
]