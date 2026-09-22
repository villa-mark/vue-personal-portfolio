<script setup lang="ts">
import { Moon, Sun } from '@lucide/vue'
import { useTheme } from '@/composables/useTheme'

const { resolvedTheme, toggle } = useTheme()
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggle"
  >
    <Transition name="icon-swap" mode="out-in">
      <Sun v-if="resolvedTheme === 'dark'" key="sun" :size="17" />
      <Moon v-else key="moon" :size="17" />
    </Transition>
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-btn);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text-muted);
  cursor: pointer;
  transition:
    color var(--dur-fast) var(--ease-out),
    border-color var(--dur-fast) var(--ease-out),
    background-color var(--dur-fast) var(--ease-out);
}
.theme-toggle:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}
.icon-swap-enter-active,
.icon-swap-leave-active {
  transition:
    opacity var(--dur-fast) var(--ease-out),
    transform var(--dur-fast) var(--ease-out);
}
.icon-swap-enter-from,
.icon-swap-leave-to {
  opacity: 0;
  transform: rotate(-45deg) scale(0.7);
}
</style>
