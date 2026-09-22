<script setup lang="ts">
import { ExternalLink } from '@lucide/vue'
import type { Project } from '@/data/types'
import Badge from '@/components/ui/Badge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BrandIcon from '@/components/ui/BrandIcon.vue'
import ImageWithFallback from '@/components/ui/ImageWithFallback.vue'

defineProps<{ project: Project }>()
defineEmits<{ (e: 'view-details', id: string): void }>()
</script>

<template>
  <article :id="`project-${project.id}`" v-reveal class="featured card-surface">
    <ImageWithFallback
      :src="project.image"
      :alt="`${project.title} preview`"
      fallback-label="PROJECT PREVIEW"
      rounded="square"
      class="featured-image"
    />

    <div class="featured-body">
      <p class="eyebrow">Featured project</p>
      <h3 class="featured-title">{{ project.title }}</h3>
      <p class="featured-category">Full-Stack Web Application</p>
      <p class="featured-desc">{{ project.description }}</p>

      <div class="featured-tags">
        <Badge v-for="tech in project.technologies" :key="tech">{{ tech }}</Badge>
        <Badge tone="status">{{ project.status }}</Badge>
      </div>

      <div class="featured-actions">
        <BaseButton variant="primary" @click="$emit('view-details', project.id)"> View details </BaseButton>
        <BaseButton as="a" :href="project.demo" target="_blank" variant="secondary">
          <ExternalLink :size="14" /> Live demo
        </BaseButton>
        <BaseButton as="a" :href="project.github" target="_blank" variant="ghost">
          <BrandIcon name="github" :size="15" /> GitHub
        </BaseButton>
      </div>
    </div>
  </article>
</template>

<style scoped>
.featured {
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  padding: 0;
}
@media (max-width: 900px) {
  .featured {
    grid-template-columns: 1fr;
  }
}
.featured-image {
  min-height: 260px;
  border-radius: 0;
  border: none;
  border-right: 1px solid var(--color-border);
}
@media (max-width: 900px) {
  .featured-image {
    border-right: none;
    border-bottom: 1px solid var(--color-border);
  }
}
.featured-body {
  padding: var(--space-8);
}
.featured-title {
  margin-top: var(--space-2);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
}
.featured-category {
  margin-top: 4px;
  font-size: 0.78rem;
  color: var(--color-text-faint);
}
.featured-desc {
  margin-top: var(--space-4);
  color: var(--color-text-muted);
  line-height: 1.65;
}
.featured-tags {
  margin-top: var(--space-6);
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.featured-actions {
  margin-top: var(--space-6);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}
</style>
