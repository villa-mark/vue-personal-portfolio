import type { EducationEntry } from './types'

export const education: EducationEntry[] = [
  {
    id: 'edu-college',
    institution: 'CITE Technical Institute, Inc.',
    program: 'Computer Engineering',
    degree: 'Diploma',
    startDate: '2022',
    endDate: '2026',
    location: 'Purok 2, San Jose, Cebu City',
    description: 'Focused on software engineering fundamentals, databases, and web development.',
    achievements: [],
    image: '/images/schools_logo/cite.jpeg'
  },
  {
    id: 'edu-secondary',
    institution: 'Manlapay National High School',
    program: 'General Academic Strand (GAS)',
    degree: 'Diploma',
    startDate: '2016',
    endDate: '2022',
    location: 'Manlapay, Dalaguete, Cebu',
    description: '',
    achievements: [],
    image: '/images/schools_logo/manlapay.jpeg'
  },
  {
    id: 'edu-primary',
    institution: 'Maloray Elementary School',
    program: '',
    degree: 'Diploma',
    startDate: '2010',
    endDate: '2016',
    location: 'Maloray, Dalaguete, Cebu',
    description: '',
    achievements: [],
    image: '/images/schools_logo/maloray.jpeg'
  }
]
