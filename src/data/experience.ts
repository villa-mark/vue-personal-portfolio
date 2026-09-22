import type { ExperienceEntry } from './types'

export const experience: ExperienceEntry[] = [
  {
    id: 'exp-current',
    company: '[COMPANY NAME]',
    position: '[JOB TITLE]',
    employmentType: 'Full-time',
    location: '[LOCATION]',
    startDate: '[START DATE]',
    endDate: 'Present',
    description:
      '[PROJECT DESCRIPTION] Building and maintaining full-stack web applications as part of a small product team.',
    responsibilities: [
      'Designed and implemented REST APIs consumed by internal dashboards',
      'Built responsive, accessible user interfaces from design specs',
      'Collaborated with teammates on code review and technical planning'
    ],
    achievements: ['[ACHIEVEMENT] Shipped a full internal module from spec to production'],
    technologies: ['Vue', 'TypeScript', 'Hono', 'MariaDB']
  },
  {
    id: 'exp-previous',
    company: '[COMPANY NAME]',
    position: '[JOB TITLE]',
    employmentType: 'Internship',
    location: '[LOCATION]',
    startDate: '[START DATE]',
    endDate: '[END DATE]',
    description: '[PROJECT DESCRIPTION] Supported a development team on internal tooling and bug fixes.',
    responsibilities: [
      'Fixed reported bugs across frontend and backend codebases',
      'Wrote documentation for internal developer tools'
    ],
    achievements: [],
    technologies: ['JavaScript', 'HTML', 'CSS']
  }
]
