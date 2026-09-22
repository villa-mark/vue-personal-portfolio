export interface Profile {
  name: string
  title: string
  tagline: string
  location: string
  email: string
  bio: string
  availability: 'AVAILABLE FOR OPPORTUNITIES' | 'NOT CURRENTLY AVAILABLE'
  focus: string
  currentActivity: string
  yearsExperience: number
  github: string
  linkedin: string
  resume: string
}

export interface QuickStat {
  label: string
  value: string
}

export interface PhilosophyStep {
  index: string
  title: string
  description: string
}

export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'Languages' | 'Tools' | 'Other'

export interface Skill {
  id: string
  name: string
  category: SkillCategory
  description: string
  projectIds: string[]
  relatedSkillIds: string[]
}

export interface ExperienceEntry {
  id: string
  company: string
  position: string
  employmentType: string
  location: string
  startDate: string
  endDate: string
  description: string
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
}

export type ProjectCategory = 'frontend' | 'backend' | 'fullstack' | 'api' | 'other'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  status: string
  featured: boolean
  description: string
  problem: string
  solution: string
  technologies: string[]
  features: string[]
  challenges: string[]
  lessonsLearned: string[]
  architecture: string[]
  image: string
  github: string
  demo: string
}

export interface EducationEntry {
  id: string
  institution: string
  program: string
  degree: string
  startDate: string
  endDate: string
  location: string
  description: string
  achievements: string[]
}

export interface Certification {
  id: string
  name: string
  issuer: string
  issueDate: string
  expirationDate: string | null
  credentialId: string
  image: string | null
  verifyUrl: string | null
}

export interface Achievement {
  id: string
  title: string
  date: string
  description: string
  link: string | null
}

export interface GithubRepo {
  name: string
  description: string
  language: string
  stars: number
  url: string
}

export interface GithubProfile {
  username: string
  publicRepos: number
  followers: number
  featuredRepos: GithubRepo[]
  topLanguages: string[]
}

export interface NavItem {
  id: string
  label: string
  href: string
}
