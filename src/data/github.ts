import type { GithubProfile } from './types'

/**
 * Static placeholder data — structured so it can later be swapped for a real
 * GitHub API call (e.g. `GET https://api.github.com/users/{username}`)
 * without changing any component.
 */
export const githubProfile: GithubProfile = {
  username: 'villa-mark',
  publicRepos: 20,
  followers: 4,
  topLanguages: ['TypeScript', 'Vue', 'JavaScript', 'SQL'],
  featuredRepos: [
    {
      name: 'inventory-management',
      description: 'Full-stack inventory management platform.',
      language: 'TypeScript',
      stars: 0,
      url: '#'
    },
    {
      name: 'dashboard-management-system',
      description: 'Multi-module admin dashboard for users and access control.',
      language: 'TypeScript',
      stars: 0,
      url: '#'
    },
    {
      name: 'personal-developer-portfolio',
      description: 'This portfolio — a developer-workspace-styled personal site.',
      language: 'Vue',
      stars: 0,
      url: '#'
    }
  ]
}
