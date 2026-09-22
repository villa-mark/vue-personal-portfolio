<script setup lang="ts">
import { computed, ref } from 'vue'
import { projects, projectCategories, featuredProject } from '@/data/projects'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import FeaturedProjectCard from '@/components/projects/FeaturedProjectCard.vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import ProjectDetailModal from '@/components/projects/ProjectDetailModal.vue'

const activeCategory = ref<(typeof projectCategories)[number]['id']>('all')
const activeProjectId = ref<string | null>(null)

const nonFeatured = computed(() => projects.filter((project) => project.id !== featuredProject.id))

const filteredProjects = computed(() =>
  activeCategory.value === 'all'
    ? nonFeatured.value
    : nonFeatured.value.filter((project) => project.category === activeCategory.value)
)

const activeProject = computed(() => projects.find((project) => project.id === activeProjectId.value) ?? null)
</script>

<template>
  <section id="projects" class="container-shell section-py">
    <SectionHeading
      eyebrow="Work"
      title="Projects"
      description="A mix of full-stack platforms, dashboards, and this portfolio itself."
    />

    <FeaturedProjectCard :project="featuredProject" class="mb-10" @view-details="activeProjectId = $event" />

    <div v-reveal class="filter-row" role="tablist" aria-label="Filter projects by category">
      <button
        v-for="category in projectCategories"
        :key="category.id"
        type="button"
        role="tab"
        class="filter-chip"
        :aria-selected="activeCategory === category.id"
        :class="{ 'is-active': activeCategory === category.id }"
        @click="activeCategory = category.id"
      >
        {{ category.label }}
      </button>
    </div>

    <div v-if="filteredProjects.length" class="projects-grid">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
        @view-details="activeProjectId = $event"
      />
    </div>
    <p v-else class="no-results font-mono">No projects in this category yet.</p>

    <ProjectDetailModal :project="activeProject" @close="activeProjectId = null" />
  </section>
</template>

<style scoped>
.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: var(--space-8);
}
.filter-chip {
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.74rem;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition:
    color var(--dur-fast) var(--ease-out),
    border-color var(--dur-fast) var(--ease-out),
    background-color var(--dur-fast) var(--ease-out);
}
.filter-chip:hover {
  color: var(--color-text);
}
.filter-chip.is-active {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background: var(--color-accent-soft);
}
.projects-grid {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}
.no-results {
  padding: var(--space-16) 0;
  text-align: center;
  color: var(--color-text-faint);
}
</style>
