<script setup lang="ts">
import { Download } from '@lucide/vue'
import { profile } from '@/data/portfolio'
import { useResumeAvailability } from '@/composables/useResumeAvailability'
import BaseButton from '@/components/ui/BaseButton.vue'

const { isAvailable, checked } = useResumeAvailability()

const lastUpdated = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(new Date())
</script>

<template>
  <section id="resume" class="container-shell section-py">
    <div v-reveal class="resume-card card-surface">
      <p class="eyebrow">Resume</p>
      <h2 class="resume-heading">The Full Story</h2>
      <p class="resume-desc">
        A complete overview of {{ profile.name === '[NAME]' ? "this developer's" : `${profile.name}'s` }} experience,
        education, and technical skills in a single document.
      </p>

      <BaseButton v-if="!checked" variant="secondary" disabled>Checking resume&hellip;</BaseButton>
      <BaseButton v-else-if="isAvailable" as="a" :href="profile.resume" target="_blank" variant="primary">
        <Download :size="15" /> Download resume
      </BaseButton>
      <p v-else class="resume-unavailable">Resume coming soon — check back shortly.</p>

      <p v-if="isAvailable" class="resume-updated">Last updated: {{ lastUpdated }}</p>
    </div>
  </section>
</template>

<style scoped>
.resume-card {
  padding: var(--space-12) var(--space-8);
  text-align: center;
  max-width: 640px;
  margin-inline: auto;
}
.resume-heading {
  margin-top: var(--space-3);
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--color-text);
}
.resume-desc {
  margin: var(--space-4) auto var(--space-8);
  max-width: 46ch;
  color: var(--color-text-muted);
  line-height: 1.65;
}
.resume-unavailable {
  font-size: 0.84rem;
  color: var(--color-text-faint);
}
.resume-updated {
  margin-top: var(--space-4);
  font-size: 0.76rem;
  color: var(--color-text-faint);
}
</style>
