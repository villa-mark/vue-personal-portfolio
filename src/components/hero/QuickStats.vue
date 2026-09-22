<script setup lang="ts">
import { quickStats } from '@/data/portfolio'
</script>

<template>
  <section aria-label="Quick statistics" class="stats-shell">
    <div v-reveal class="container-shell stats-grid">
      <div v-for="stat in quickStats" :key="stat.label" class="stat-item">
        <p class="stat-value font-mono">{{ stat.value }}</p>
        <p class="stat-label">{{ stat.label }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-shell {
  border-block: 1px solid var(--color-border);
  background: var(--color-bg-elevated);
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
  padding-block: var(--space-12);
  text-align: center;
}
@media (min-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
.stat-value {
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--color-accent);
}
.stat-label {
  margin-top: 4px;
  font-size: 0.78rem;
  letter-spacing: 0.03em;
  color: var(--color-text-muted);
}
</style>
