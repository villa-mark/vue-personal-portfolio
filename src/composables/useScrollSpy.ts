import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * Tracks which section is currently in view so the nav bar can highlight the
 * active link while scrolling.
 */
export function useScrollSpy(sectionIds: string[]) {
  const activeId = ref<string>(sectionIds[0] ?? '')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) {
          activeId.value = visible.target.id
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    elements.forEach((el) => observer?.observe(el))
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return { activeId }
}
