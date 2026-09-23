<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { Menu, X } from '@lucide/vue'
import { navItems } from '@/data/nav'
import { profile } from '@/data/portfolio'
import { useScrollSpy } from '@/composables/useScrollSpy'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'
import BrandIcon from '@/components/ui/BrandIcon.vue'

const { activeId } = useScrollSpy(navItems.map((item) => item.id))

const mobileOpen = ref(false)
const navRef = ref<HTMLElement | null>(null)
const indicatorStyle = ref({ left: '0px', width: '0px', opacity: 0 })

function closeMobile() {
  mobileOpen.value = false
}

watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})

function updateIndicator() {
  const nav = navRef.value
  const activeLink = nav?.querySelector<HTMLElement>('.nav-link.is-active')
  if (!nav || !activeLink) {
    indicatorStyle.value = { ...indicatorStyle.value, opacity: 0 }
    return
  }
  const navRect = nav.getBoundingClientRect()
  const linkRect = activeLink.getBoundingClientRect()
  const inset = 12
  indicatorStyle.value = {
    left: `${linkRect.left - navRect.left + inset}px`,
    width: `${linkRect.width - inset * 2}px`,
    opacity: 1
  }
}

watch(activeId, () => nextTick(updateIndicator))

onMounted(() => {
  nextTick(updateIndicator)
  window.addEventListener('resize', updateIndicator)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIndicator)
})
</script>

<template>
  <header class="nav-shell">
    <div class="container-shell flex h-[64px] items-center justify-between">
      <a href="#home" class="nav-brand" @click="closeMobile">
        <span class="font-mono">~/</span>{{ profile.name === '[NAME]' ? 'portfolio' : profile.name.toLowerCase() }}
      </a>

      <nav ref="navRef" class="nav-links hidden items-center gap-1 md:flex" aria-label="Primary">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="item.href"
          class="nav-link"
          :class="{ 'is-active': activeId === item.id }"
        >
          {{ item.label }}
        </a>
        <span class="nav-indicator" aria-hidden="true" :style="indicatorStyle" />
      </nav>

      <div class="hidden items-center gap-2 md:flex">
        <a class="icon-link" :href="profile.github" target="_blank" rel="noreferrer noopener" aria-label="GitHub profile">
          <BrandIcon name="github" :size="17" />
        </a>
        <a class="icon-link" :href="profile.linkedin" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn profile">
          <BrandIcon name="linkedin" :size="17" />
        </a>
        <ThemeToggle />
      </div>

      <button
        type="button"
        class="icon-link mobile-toggle md:hidden"
        :aria-expanded="mobileOpen"
        aria-label="Toggle menu"
        @click="mobileOpen = !mobileOpen"
      >
        <X v-if="mobileOpen" :size="20" />
        <Menu v-else :size="20" />
      </button>
    </div>

    <Teleport to="body">
      <Transition name="mobile-backdrop">
        <div v-if="mobileOpen" class="mobile-backdrop" @click="closeMobile" />
      </Transition>

      <Transition name="mobile-drawer">
        <nav v-if="mobileOpen" class="mobile-nav" aria-label="Mobile primary">
          <div class="mobile-nav-links">
            <a
              v-for="item in navItems"
              :key="item.id"
              :href="item.href"
              class="mobile-nav-link"
              :class="{ 'is-active': activeId === item.id }"
              @click="closeMobile"
            >
              {{ item.label }}
            </a>
          </div>
          <div class="mobile-nav-footer">
            <a :href="profile.github" target="_blank" rel="noreferrer noopener" class="icon-link" aria-label="GitHub profile">
              <BrandIcon name="github" :size="18" />
            </a>
            <a :href="profile.linkedin" target="_blank" rel="noreferrer noopener" class="icon-link" aria-label="LinkedIn profile">
              <BrandIcon name="linkedin" :size="18" />
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </Transition>
    </Teleport>
  </header>
</template>

<style scoped>
.nav-shell {
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid var(--color-border);
  background: color-mix(in srgb, var(--color-bg) 78%, transparent);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.nav-brand {
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: -0.01em;
  color: var(--color-text);
  text-decoration: none;
}
.nav-brand .font-mono {
  color: var(--color-accent);
}

.nav-links {
  position: relative;
  display: none;
}
@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }
}

.nav-link {
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.86rem;
  font-weight: 500;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color var(--dur-fast) var(--ease-out);
  position: relative;
}
.nav-link:hover {
  color: var(--color-text);
}
.nav-link.is-active {
  color: var(--color-accent);
}

.nav-indicator {
  position: absolute;
  bottom: 1px;
  height: 2px;
  border-radius: 2px;
  background: var(--color-accent);
  pointer-events: none;
  transition:
    left var(--dur-med) var(--ease-out),
    width var(--dur-med) var(--ease-out),
    opacity var(--dur-fast) var(--ease-out);
}

.icon-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-btn);
  color: var(--color-text-muted);
  border: 1px solid transparent;
  cursor: pointer;
  background: transparent;
  transition:
    color var(--dur-fast) var(--ease-out),
    border-color var(--dur-fast) var(--ease-out);
}
.icon-link:hover {
  color: var(--color-accent);
  border-color: var(--color-border);
}

.mobile-toggle {
  display: inline-flex;
  position: relative;
  z-index: 90;
}
@media (min-width: 768px) {
  .mobile-toggle {
    display: none;
  }
}

.mobile-backdrop {
  position: fixed;
  inset: 0;
  z-index: 70;
  background: rgba(4, 8, 12, 0.55);
  backdrop-filter: blur(2px);
}

.mobile-nav {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 80;
  display: flex;
  flex-direction: column;
  width: 80vw;
  padding: var(--space-6);
  background: var(--color-bg-elevated);
  border-left: 1px solid var(--color-border);
  box-shadow: var(--shadow-lift);
  overflow-y: auto;
}
.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: var(--space-16);
}
.mobile-nav-link {
  padding: 12px 8px;
  border-radius: var(--radius-sm);
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-muted);
  text-decoration: none;
}
.mobile-nav-link.is-active {
  color: var(--color-accent);
}
.mobile-nav-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border);
}

.mobile-backdrop-enter-active,
.mobile-backdrop-leave-active {
  transition: opacity var(--dur-med) var(--ease-out);
}
.mobile-backdrop-enter-from,
.mobile-backdrop-leave-to {
  opacity: 0;
}

.mobile-drawer-enter-active,
.mobile-drawer-leave-active {
  transition: transform var(--dur-med) var(--ease-out);
}
.mobile-drawer-enter-from,
.mobile-drawer-leave-to {
  transform: translateX(100%);
}
</style>
