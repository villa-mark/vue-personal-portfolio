import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * Tracks which section is currently in view so the nav bar can highlight the
 * active link while scrolling. Walks sections top-to-bottom and activates the
 * last one whose top edge has crossed the offset line below the sticky nav —
 * the same approach Bootstrap's scrollspy uses.
 */
export function useScrollSpy(sectionIds: string[], offset = 120) {
  const activeId = ref<string>(sectionIds[0] ?? '')
  let ticking = false

  function updateActive() {
    ticking = false

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (!elements.length) return

    let current = elements[0].id
    for (const el of elements) {
      if (el.getBoundingClientRect().top - offset <= 0) {
        current = el.id
      }
    }

    const scrolledToBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
    if (scrolledToBottom) {
      current = elements[elements.length - 1].id
    }

    activeId.value = current
  }

  function onScroll() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(updateActive)
  }

  onMounted(() => {
    updateActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
  })

  return { activeId }
}
