<script setup lang="ts">
import { Briefcase } from '@lucide/vue'
import { experience } from '@/data/experience'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import Badge from '@/components/ui/Badge.vue'
</script>

<template>
  <section id="experience" class="container-shell section-py">
    <SectionHeading eyebrow="Career" title="Experience" />

    <ol class="timeline">
      <li v-for="job in experience" :key="job.id" v-reveal class="timeline-item">
        <span class="timeline-dot" aria-hidden="true"><Briefcase :size="13" /></span>

        <div class="timeline-card card-surface">
          <div class="timeline-head">
            <div>
              <h3 class="timeline-role">{{ job.position }}</h3>
              <p class="timeline-company font-mono">{{ job.company }} &middot; {{ job.employmentType }}</p>
            </div>
            <p class="timeline-dates">{{ job.startDate }} &ndash; {{ job.endDate }}</p>
          </div>

          <p class="timeline-location">{{ job.location }}</p>
          <p class="timeline-desc">{{ job.description }}</p>

          <div v-if="job.responsibilities.length" class="timeline-block">
            <p class="timeline-label">Responsibilities</p>
            <ul>
              <li v-for="item in job.responsibilities" :key="item">{{ item }}</li>
            </ul>
          </div>

          <div v-if="job.achievements.length" class="timeline-block">
            <p class="timeline-label">Achievements</p>
            <ul>
              <li v-for="item in job.achievements" :key="item">{{ item }}</li>
            </ul>
          </div>

          <div class="timeline-tags">
            <Badge v-for="tech in job.technologies" :key="tech">{{ tech }}</Badge>
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 34px;
  border-left: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}
.timeline-item {
  position: relative;
}
.timeline-dot {
  position: absolute;
  left: -50px;
  top: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: var(--color-surface);
  border: 1px solid var(--color-border-strong);
  color: var(--color-accent);
}
.timeline-card {
  padding: var(--space-6);
}
.timeline-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-2);
}
.timeline-role {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text);
}
.timeline-company {
  margin-top: 2px;
  font-size: 0.82rem;
  color: var(--color-accent);
}
.timeline-dates {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--color-text-faint);
  white-space: nowrap;
}
.timeline-location {
  margin-top: var(--space-2);
  font-size: 0.82rem;
  color: var(--color-text-faint);
}
.timeline-desc {
  margin-top: var(--space-3);
  color: var(--color-text-muted);
  line-height: 1.6;
}
.timeline-block {
  margin-top: var(--space-4);
}
.timeline-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  margin-bottom: 6px;
}
.timeline-block ul {
  margin: 0;
  padding-left: 18px;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.7;
}
.timeline-tags {
  margin-top: var(--space-4);
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
</style>
