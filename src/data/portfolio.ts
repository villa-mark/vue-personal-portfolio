import type { Profile, QuickStat, PhilosophyStep } from './types'

/**
 * Single source of truth for the site owner's identity.
 */
export const profile: Profile = {
  name: 'Mark',
  title: 'Full-Stack Developer',
  tagline:
    'I build practical web applications with a focus on clean interfaces, reliable backend systems, and maintainable code.',
  location: 'Cebu City, Philippines',
  email: 'mark.anthony.villahermosa.n@gmail.com',
  bio: 'I started developing software out of curiosity and a desire to understand how applications work from the inside out. Since then, I’ve gained hands-on experience building and maintaining web applications across both frontend and backend systems. I enjoy solving practical problems, debugging existing systems, and turning requirements into working features. My approach is to understand the problem first, build a straightforward solution, test it carefully, and continuously improve it through experience.',
  availability: 'AVAILABLE FOR OPPORTUNITIES',
  focus: 'Full-Stack Web Development',
  currentActivity: 'Building and improving production web applications',
  yearsExperience: 2,
  github: 'https://github.com/villa-mark',
  linkedin: 'https://www.linkedin.com/in/mark-anthony-villahermosa-0ba3522b1/',
  resume: '/resume.pdf'
}

export const quickStats: QuickStat[] = [
  { label: 'Years Experience', value: `${profile.yearsExperience}+` },
  { label: 'Projects', value: '10+' },
  { label: 'Technologies', value: '10+' },
  { label: 'Repositories', value: '5+' }
]

export const philosophy: PhilosophyStep[] = [
  {
    index: '01',
    title: 'UNDERSTAND',
    description: 'Understand the requirements and the problem before writing code.'
  },
  {
    index: '02',
    title: 'PLAN',
    description: 'Break complex requirements into smaller, practical tasks.'
  },
  {
    index: '03',
    title: 'BUILD',
    description: 'Build functional solutions with clean and maintainable code.'
  },
  {
    index: '04',
    title: 'TEST',
    description: 'Test features, identify issues, and verify expected behavior.'
  },
  {
    index: '05',
    title: 'IMPROVE',
    description: 'Learn from real usage, fix problems, and continuously improve the system.'
  }
]