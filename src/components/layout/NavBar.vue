<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from '@lucide/vue'
import { navItems } from '@/data/nav'
import { profile } from '@/data/portfolio'
import { useScrollSpy } from '@/composables/useScrollSpy'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'
import BrandIcon from '@/components/ui/BrandIcon.vue'

const { activeId } = useScrollSpy(navItems.map((item) => item.id))

const mobileOpen = ref(false)

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header class="nav-shell">
    <div class="container-shell flex h-[64px] items-center justify-between">
      <a href="#home" class="nav-brand" @click="closeMobile">
        <span class="font-mono">~/</span>{{ profile.name === '[NAME]' ? 'portfolio' : profile.name.toLowerCase() }}
      </a>

      <nav class="hidden items-center gap-1 md:flex" aria-label="Primary">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="item.href"
          class="nav-link"
          :class="{ 'is-active': activeId === item.id }"
        >
          {{ item.label }}
        </a>
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
        class="icon-link md:hidden"
        :aria-expanded="mobileOpen"
        aria-label="Toggle menu"
        @click="mobileOpen = !mobileOpen"
      >
        <X v-if="mobileOpen" :size="20" />
        <Menu v-else :size="20" />
      </button>
    </div>

    <Transition name="mobile-menu">
      <nav v-if="mobileOpen" class="mobile-nav" aria-label="Mobile primary">
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
  </header>
</template>

<style scoped>
.nav-shell {
  position: sticky;
  top: 0;
  z-index: 50;
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
.nav-link.is-active::after {
  content: '';
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 1px;
  height: 2px;
  border-radius: 2px;
  background: var(--color-accent);
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

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: var(--space-3) var(--space-6) var(--space-6);
  border-top: 1px solid var(--color-border);
  background: var(--color-bg);
}
.mobile-nav-link {
  padding: 12px 8px;
  border-radius: var(--radius-sm);
  font-size: 0.95rem;
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
  margin-top: var(--space-3);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity var(--dur-fast) var(--ease-out),
    transform var(--dur-fast) var(--ease-out);
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
