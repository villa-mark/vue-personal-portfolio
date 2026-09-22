import { onMounted, ref } from 'vue'
import { profile } from '@/data/portfolio'

/**
 * Confirms /resume.pdf actually exists before offering it as a download, so
 * a missing file never produces a broken link.
 */
export function useResumeAvailability() {
  const isAvailable = ref(false)
  const checked = ref(false)

  onMounted(async () => {
    try {
      const response = await fetch(profile.resume, { method: 'HEAD' })
      isAvailable.value = response.ok
    } catch {
      isAvailable.value = false
    } finally {
      checked.value = true
    }
  })

  return { isAvailable, checked }
}
