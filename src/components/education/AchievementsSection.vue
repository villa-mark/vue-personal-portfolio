<script setup lang="ts">
import { Trophy } from '@lucide/vue'
import { achievements } from '@/data/achievements'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
</script>

<template>
  <section id="achievements" class="container-shell section-py">
    <SectionHeading eyebrow="Recognition" title="Achievements" />

    <EmptyState v-if="!achievements.length" message="Achievements will be added here." />

    <div v-else class="achievement-list">
      <article v-for="item in achievements" :key="item.id" v-reveal class="achievement-card card-surface">
        <span class="achievement-icon" aria-hidden="true"><Trophy :size="16" /></span>
        <div>
          <div class="achievement-head">
            <h3 class="achievement-title">{{ item.title }}</h3>
            <p class="achievement-date font-mono">{{ item.date }}</p>
          </div>
          <p class="achievement-desc">{{ item.description }}</p>
          <a v-if="item.link" :href="item.link" target="_blank" rel="noreferrer noopener" class="achievement-link">
            Learn more
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.achievement-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
.achievement-card {
  display: flex;
  gap: var(--space-4);
  padding: var(--space-6);
}
.achievement-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  color: var(--color-accent);
  background: var(--color-accent-soft);
}
.achievement-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-2);
}
.achievement-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text);
}
.achievement-date {
  font-size: 0.76rem;
  color: var(--color-text-faint);
}
.achievement-desc {
  margin-top: var(--space-2);
  color: var(--color-text-muted);
  line-height: 1.6;
}
.achievement-link {
  display: inline-block;
  margin-top: var(--space-2);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-accent);
}
</style>
