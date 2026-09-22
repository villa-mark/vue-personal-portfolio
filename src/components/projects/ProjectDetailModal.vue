<script setup lang="ts">
import { onBeforeUnmount, watch } from 'vue'
import { ExternalLink, X } from '@lucide/vue'
import type { Project } from '@/data/types'
import Badge from '@/components/ui/Badge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BrandIcon from '@/components/ui/BrandIcon.vue'
import ImageWithFallback from '@/components/ui/ImageWithFallback.vue'

const props = defineProps<{ project: Project | null }>()
const emit = defineEmits<{ (e: 'close'): void }>()

watch(
  () => props.project,
  (project) => {
    document.body.style.overflow = project ? 'hidden' : ''
  }
)

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && props.project) emit('close')
}

document.addEventListener('keydown', onKeydown)
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="project" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-panel card-surface" role="dialog" aria-modal="true" :aria-label="`${project.title} details`">
        <button type="button" class="modal-close" aria-label="Close" @click="$emit('close')">
          <X :size="18" />
        </button>

        <ImageWithFallback
          :src="project.image"
          :alt="`${project.title} preview`"
          fallback-label="PROJECT PREVIEW"
          rounded="square"
          class="modal-image"
        />

        <div class="modal-body">
          <div class="modal-tags">
            <Badge tone="accent">{{ project.category.toUpperCase() }}</Badge>
            <Badge tone="status">{{ project.status }}</Badge>
          </div>
          <h3 class="modal-title">{{ project.title }}</h3>

          <section class="modal-section">
            <h4>Overview</h4>
            <p>{{ project.description }}</p>
          </section>

          <section class="modal-section">
            <h4>Problem</h4>
            <p>{{ project.problem }}</p>
          </section>

          <section class="modal-section">
            <h4>Solution</h4>
            <p>{{ project.solution }}</p>
          </section>

          <section v-if="project.features.length" class="modal-section">
            <h4>Key Features</h4>
            <ul>
              <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
            </ul>
          </section>

          <section class="modal-section">
            <h4>Architecture</h4>
            <div class="architecture-flow">
              <template v-for="(step, index) in project.architecture" :key="step">
                <span class="architecture-step font-mono">{{ step }}</span>
                <span v-if="index < project.architecture.length - 1" class="architecture-arrow">&rarr;</span>
              </template>
            </div>
          </section>

          <section class="modal-section">
            <h4>Technologies</h4>
            <div class="modal-tags">
              <Badge v-for="tech in project.technologies" :key="tech">{{ tech }}</Badge>
            </div>
          </section>

          <section v-if="project.challenges.length" class="modal-section">
            <h4>Challenges</h4>
            <ul>
              <li v-for="item in project.challenges" :key="item">{{ item }}</li>
            </ul>
          </section>

          <section v-if="project.lessonsLearned.length" class="modal-section">
            <h4>Lessons Learned</h4>
            <ul>
              <li v-for="item in project.lessonsLearned" :key="item">{{ item }}</li>
            </ul>
          </section>

          <div class="modal-actions">
            <BaseButton as="a" :href="project.demo" target="_blank" variant="primary">
              <ExternalLink :size="14" /> LIVE DEMO
            </BaseButton>
            <BaseButton as="a" :href="project.github" target="_blank" variant="secondary">
              <BrandIcon name="github" :size="15" /> GITHUB
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: var(--space-8) var(--space-4);
  overflow-y: auto;
  background: rgba(4, 8, 12, 0.6);
  backdrop-filter: blur(4px);
}
.modal-panel {
  position: relative;
  width: min(720px, 100%);
  margin-block: auto;
  padding: 0;
  overflow: hidden;
}
.modal-close {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: color-mix(in srgb, var(--color-bg) 70%, transparent);
  color: var(--color-text);
  cursor: pointer;
}
.modal-image {
  border-radius: 0;
  border: none;
  border-bottom: 1px solid var(--color-border);
  aspect-ratio: 16 / 8;
}
.modal-body {
  padding: var(--space-8);
}
.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.modal-title {
  margin-top: var(--space-3);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text);
}
.modal-section {
  margin-top: var(--space-6);
}
.modal-section h4 {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-2);
}
.modal-section p {
  color: var(--color-text-muted);
  line-height: 1.65;
}
.modal-section ul {
  margin: 0;
  padding-left: 18px;
  color: var(--color-text-muted);
  line-height: 1.7;
}
.architecture-flow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}
.architecture-step {
  padding: 6px 10px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  font-size: 0.78rem;
  color: var(--color-text);
}
.architecture-arrow {
  color: var(--color-text-faint);
}
.modal-actions {
  margin-top: var(--space-8);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity var(--dur-fast) var(--ease-out);
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
