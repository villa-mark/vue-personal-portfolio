<script setup lang="ts">
import { ExternalLink } from '@lucide/vue'
import type { Project } from '@/data/types'
import Badge from '@/components/ui/Badge.vue'
import BrandIcon from '@/components/ui/BrandIcon.vue'
import ImageWithFallback from '@/components/ui/ImageWithFallback.vue'

defineProps<{ project: Project }>()
defineEmits<{ (e: 'view-details', id: string): void }>()
</script>

<template>
  <article :id="`project-${project.id}`" v-reveal class="project-card card-surface">
    <button type="button" class="project-image-btn" @click="$emit('view-details', project.id)">
      <ImageWithFallback
        :src="project.image"
        :alt="`${project.title} preview`"
        fallback-label="PROJECT PREVIEW"
        rounded="square"
        class="project-image"
      />
    </button>

    <div class="project-body">
      <div class="project-head">
        <h3 class="project-title">{{ project.title }}</h3>
        <Badge tone="status">{{ project.status }}</Badge>
      </div>
      <p class="project-desc">{{ project.description }}</p>

      <div class="project-tags">
        <Badge v-for="tech in project.technologies.slice(0, 4)" :key="tech">{{ tech }}</Badge>
      </div>

      <div class="project-links">
        <button type="button" class="project-details-link" @click="$emit('view-details', project.id)">
          View details
        </button>
        <div class="project-icon-links">
          <a :href="project.github" target="_blank" rel="noreferrer noopener" aria-label="GitHub repository">
            <BrandIcon name="github" :size="16" />
          </a>
          <a :href="project.demo" target="_blank" rel="noreferrer noopener" aria-label="Live demo">
            <ExternalLink :size="16" />
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
  transition:
    transform var(--dur-fast) var(--ease-out),
    border-color var(--dur-fast) var(--ease-out);
}
.project-card:hover {
  transform: translateY(-2px);
  border-color: var(--color-border-strong);
}
.project-image-btn {
  display: block;
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  border-bottom: 1px solid var(--color-border);
}
.project-image {
  aspect-ratio: 16 / 10;
  border-radius: 0;
  border: none;
}
.project-image :deep(img) {
  transition: transform var(--dur-med) var(--ease-out);
}
.project-card:hover .project-image :deep(img) {
  transform: scale(1.02);
}
.project-body {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  flex: 1;
}
.project-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-2);
}
.project-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-text);
}
.project-desc {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  line-height: 1.55;
  flex: 1;
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.project-links {
  margin-top: var(--space-2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border);
}
.project-details-link {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-accent);
}
.project-icon-links {
  display: flex;
  gap: var(--space-3);
  color: var(--color-text-muted);
}
.project-icon-links a:hover {
  color: var(--color-accent);
}
</style>
