<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()
</script>

<template>
  <div v-reveal class="section-heading mb-10 max-w-2xl md:mb-14">
    <p class="eyebrow mb-3">{{ eyebrow }}</p>
    <h2 class="section-heading-title text-3xl font-bold md:text-[2.25rem]">{{ title }}</h2>
    <p v-if="description" class="section-heading-desc mt-3 text-[15px] leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.section-heading-title {
  color: var(--color-text);
}
.section-heading-desc {
  color: var(--color-text-muted);
}
</style>
