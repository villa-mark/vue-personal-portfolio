import { ref, watchEffect } from 'vue'

export type ThemePreference = 'dark' | 'light' | 'system'

const STORAGE_KEY = 'theme'

function systemPrefersDark(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
}

function readStoredPreference(): ThemePreference {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark' || stored === 'light' || stored === 'system') return stored
  return 'system'
}

const preference = ref<ThemePreference>(readStoredPreference())
const resolvedTheme = ref<'dark' | 'light'>('dark')

function resolve(pref: ThemePreference): 'dark' | 'light' {
  if (pref === 'system') return systemPrefersDark() ? 'dark' : 'light'
  return pref
}

function applyToDocument(theme: 'dark' | 'light') {
  if (typeof document === 'undefined') return
  document.documentElement.setAttribute('data-theme', theme)
  document.documentElement.style.colorScheme = theme
}

let initialized = false

/**
 * Theme system: on startup, check localStorage; fall back to system
 * preference; fall back to dark if unavailable. Persists explicit choices.
 */
export function useTheme() {
  if (!initialized) {
    initialized = true

    watchEffect(() => {
      resolvedTheme.value = resolve(preference.value)
      applyToDocument(resolvedTheme.value)
    })

    if (typeof window !== 'undefined') {
      const media = window.matchMedia('(prefers-color-scheme: dark)')
      media.addEventListener('change', () => {
        if (preference.value === 'system') {
          resolvedTheme.value = resolve('system')
          applyToDocument(resolvedTheme.value)
        }
      })
    }
  }

  function setPreference(next: ThemePreference) {
    preference.value = next
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
  }

  function toggle() {
    setPreference(resolvedTheme.value === 'dark' ? 'light' : 'dark')
  }

  return { preference, resolvedTheme, setPreference, toggle }
}
