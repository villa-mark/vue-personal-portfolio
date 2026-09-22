<script setup lang="ts">
import { philosophy } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
</script>

<template>
  <section id="philosophy" class="container-shell section-py">
    <SectionHeading
      eyebrow="How I Build"
      title="Development Philosophy"
      description="A consistent process I follow on every project, from a one-off script to a full-stack application."
    />

    <ol class="philosophy-list">
      <li v-for="step in philosophy" :key="step.index" v-reveal class="philosophy-item">
        <span class="philosophy-index font-mono">{{ step.index }}</span>
        <div>
          <p class="philosophy-title">{{ step.title }}</p>
          <p class="philosophy-desc">{{ step.description }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.philosophy-list {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  border-left: 1px solid var(--color-border);
}
.philosophy-item {
  position: relative;
  display: flex;
  gap: var(--space-6);
  padding: var(--space-6) 0 var(--space-6) var(--space-8);
}
.philosophy-item::before {
  content: '';
  position: absolute;
  left: -5px;
  top: 34px;
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: var(--color-accent);
  box-shadow: 0 0 0 4px var(--color-bg);
}
.philosophy-index {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text-faint);
  min-width: 2.4ch;
}
.philosophy-title {
  font-weight: 700;
  letter-spacing: 0.03em;
  color: var(--color-text);
}
.philosophy-desc {
  margin-top: 4px;
  color: var(--color-text-muted);
  max-width: 60ch;
}
</style>
