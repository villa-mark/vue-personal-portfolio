<script setup lang="ts">
defineProps<{ message: string }>()
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-2 rounded-[var(--radius-card)] border border-dashed py-16 text-center"
    style="border-color: var(--color-border-strong); color: var(--color-text-faint)"
    role="status"
  >
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
    </svg>
    <p class="font-mono text-sm">{{ message }}</p>
  </div>
</template>
