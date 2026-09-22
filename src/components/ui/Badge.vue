<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'default' | 'accent' | 'status' }>(), { tone: 'default' })
</script>

<template>
  <span class="badge" :class="`badge--${tone}`">
    <slot />
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 5px 10px;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  background: var(--color-surface);
}
.badge--accent {
  color: var(--color-accent);
  border-color: color-mix(in srgb, var(--color-accent) 45%, transparent);
  background: var(--color-accent-soft);
}
.badge--status {
  color: var(--color-status-live);
  border-color: color-mix(in srgb, var(--color-status-live) 45%, transparent);
  background: color-mix(in srgb, var(--color-status-live) 12%, transparent);
}
</style>
