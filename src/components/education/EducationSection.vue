<script setup lang="ts">
import { education } from '@/data/education'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import ImageWithFallback from '@/components/ui/ImageWithFallback.vue'
</script>

<template>
  <section id="education" class="container-shell section-py">
    <SectionHeading eyebrow="Background" title="Education" />

    <EmptyState v-if="!education.length" message="Education history will be added here." />

    <div v-else class="education-list">
      <article v-for="entry in education" :key="entry.id" v-reveal class="education-card card-surface">
        <ImageWithFallback
          :src="entry.image ?? ''"
          :alt="`${entry.institution} logo`"
          fallback-label="SCHOOL"
          rounded="square"
          class="education-image"
        />
        <div class="education-content">
          <div class="education-head">
            <div>
              <h3 class="education-institution">{{ entry.institution }}</h3>
              <p class="education-program">{{ entry.degree }} &middot; {{ entry.program }}</p>
            </div>
            <p class="education-dates font-mono">{{ entry.startDate }} &ndash; {{ entry.endDate }}</p>
          </div>
          <p class="education-location">{{ entry.location }}</p>
          <p class="education-desc">{{ entry.description }}</p>
          <ul v-if="entry.achievements.length" class="education-achievements">
            <li v-for="item in entry.achievements" :key="item">{{ item }}</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.education-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
.education-card {
  display: flex;
  gap: var(--space-4);
  padding: var(--space-6);
}
.education-image {
  width: 88px;
  height: 88px;
  flex-shrink: 0;
  border-radius: var(--radius-md);
}
.education-image :deep(svg) {
  width: 32px;
  height: 32px;
}
.education-image :deep(span) {
  display: none;
}
.education-content {
  flex: 1;
  min-width: 0;
}
.education-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-2);
}
.education-institution {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-text);
}
.education-program {
  margin-top: 2px;
  font-size: 0.86rem;
  color: var(--color-text-muted);
}
.education-dates {
  font-size: 0.76rem;
  color: var(--color-text-faint);
  white-space: nowrap;
}
.education-location {
  margin-top: var(--space-2);
  font-size: 0.8rem;
  color: var(--color-text-faint);
}
.education-desc {
  margin-top: var(--space-3);
  color: var(--color-text-muted);
  line-height: 1.6;
}
.education-achievements {
  margin: var(--space-3) 0 0;
  padding-left: 18px;
  color: var(--color-text-muted);
  font-size: 0.88rem;
  line-height: 1.7;
}
</style>
