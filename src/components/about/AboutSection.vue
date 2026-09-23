<script setup lang="ts">
import { profile } from '@/data/portfolio'
import { formatExperienceDuration } from '@/utils/experience'
import SectionHeading from '@/components/ui/SectionHeading.vue'
</script>

<template>
  <section id="about" class="container-shell section-py">
    <SectionHeading eyebrow="About" title="About Me" />

    <div class="about-grid">
      <p v-reveal class="about-bio">{{ profile.bio }}</p>

      <div v-reveal class="about-card card-surface">
        <dl class="about-list">
          <div>
            <dt>Experience</dt>
            <dd>{{ formatExperienceDuration(profile.experienceStartDate) }}</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{{ profile.location }}</dd>
          </div>
          <div>
            <dt>Primary Focus</dt>
            <dd>{{ profile.focus }}</dd>
          </div>
          <div>
            <dt>Current Role</dt>
            <dd>{{ profile.title }}</dd>
          </div>
          <div>
            <dt>Availability</dt>
            <dd>{{ profile.availability }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  gap: var(--space-8);
  grid-template-columns: 1.4fr 1fr;
  align-items: start;
}
@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
.about-bio {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--color-text-muted);
}
.about-card {
  padding: var(--space-6);
}
.about-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
.about-list > div {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-border);
}
.about-list > div:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.about-list dt {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  letter-spacing: 0.04em;
  color: var(--color-text-faint);
  white-space: nowrap;
}
.about-list dd {
  margin: 0;
  text-align: right;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
}
</style>
