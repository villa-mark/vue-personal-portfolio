<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  src: string
  alt: string
  fallbackLabel: string
  rounded?: 'circle' | 'square'
  icon?: 'person' | 'image'
}>()

const failed = ref(false)

watch(
  () => props.src,
  () => {
    failed.value = false
  }
)
</script>

<template>
  <div class="image-shell" :class="rounded === 'circle' ? 'is-circle' : 'is-square'">
    <img
      v-if="!failed"
      :src="src"
      :alt="alt"
      loading="lazy"
      decoding="async"
      class="h-full w-full object-cover"
      @error="failed = true"
    />
    <div v-else class="fallback" role="img" :aria-label="alt">
      <svg
        v-if="icon === 'person'"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.4"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
      </svg>
      <svg v-else width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="m4 17 5-5 3.5 3.5L18 10l2 2" />
      </svg>
      <span class="font-mono">{{ fallbackLabel }}</span>
    </div>
  </div>
</template>

<style scoped>
.image-shell {
  position: relative;
  overflow: hidden;
  background: var(--color-surface);
  border: 1px solid var(--color-border-strong);
}
.is-circle {
  border-radius: 999px;
}
.is-square {
  border-radius: var(--radius-lg);
}
.fallback {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--color-text-faint);
  background: linear-gradient(160deg, var(--color-surface), var(--color-bg));
}
.fallback span {
  font-size: 0.72rem;
  letter-spacing: 0.12em;
}
</style>
