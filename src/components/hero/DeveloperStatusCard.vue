<script setup lang="ts">
import { profile } from '@/data/portfolio'
import { formatExperienceDuration } from '@/utils/experience'
</script>

<template>
  <div class="status-card card-surface">
    <p class="eyebrow mb-4">At a glance</p>

    <p class="status-line status-live">
      <span class="status-dot" aria-hidden="true" />
      {{ profile.availability }}
    </p>

    <dl class="status-list">
      <div>
        <dt>Location</dt>
        <dd>{{ profile.location }}</dd>
      </div>
      <div>
        <dt>Focus</dt>
        <dd>{{ profile.focus }}</dd>
      </div>
      <div>
        <dt>Experience</dt>
        <dd>{{ formatExperienceDuration(profile.experienceStartDate) }}</dd>
      </div>
      <div>
        <dt>Currently</dt>
        <dd>{{ profile.currentActivity }}</dd>
      </div>
    </dl>
  </div>
</template>

<style scoped>
.status-card {
  width: 100%;
  max-width: 340px;
  padding: var(--space-6);
}

.status-line {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-border);
}
.status-live {
  color: var(--color-status-live);
}
.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: currentColor;
}

.status-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
.status-list dt {
  font-size: 0.72rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--color-text-faint);
}
.status-list dd {
  margin: 2px 0 0;
  font-size: 0.88rem;
  color: var(--color-text);
}
</style>
