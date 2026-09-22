<script setup lang="ts">
import { computed } from 'vue'
import type { Skill } from '@/data/types'
import { skills } from '@/data/skills'
import { projects } from '@/data/projects'
import Badge from '@/components/ui/Badge.vue'

const props = defineProps<{ skill: Skill | null }>()

const usedInProjects = computed(() =>
  props.skill ? projects.filter((project) => props.skill!.projectIds.includes(project.id)) : []
)

const relatedSkills = computed(() =>
  props.skill ? skills.filter((s) => props.skill!.relatedSkillIds.includes(s.id)) : []
)
</script>

<template>
  <div class="explorer card-surface">
    <template v-if="skill">
      <div class="explorer-head">
        <h3 class="explorer-name">{{ skill.name }}</h3>
        <Badge tone="accent">{{ skill.category }}</Badge>
      </div>
      <p class="explorer-desc">{{ skill.description }}</p>

      <div class="explorer-block">
        <p class="explorer-label">Used in projects</p>
        <ul v-if="usedInProjects.length" class="explorer-tags">
          <li v-for="project in usedInProjects" :key="project.id">
            <a :href="`#project-${project.id}`" class="explorer-tag-link">{{ project.title }}</a>
          </li>
        </ul>
        <p v-else class="explorer-empty">Not yet used in a featured project.</p>
      </div>

      <div class="explorer-block">
        <p class="explorer-label">Related technologies</p>
        <div v-if="relatedSkills.length" class="explorer-tags">
          <Badge v-for="related in relatedSkills" :key="related.id">{{ related.name }}</Badge>
        </div>
        <p v-else class="explorer-empty">No closely related technologies listed.</p>
      </div>
    </template>

    <div v-else class="explorer-empty-state">
      <p class="font-mono">Select a technology</p>
      <p class="explorer-hint">Click any item on the left to see details, related tools, and where it was used.</p>
    </div>
  </div>
</template>

<style scoped>
.explorer {
  padding: var(--space-6);
  min-height: 280px;
  position: sticky;
  top: 84px;
}
.explorer-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
}
.explorer-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text);
}
.explorer-desc {
  margin-top: var(--space-4);
  color: var(--color-text-muted);
  line-height: 1.6;
  font-size: 0.92rem;
}
.explorer-block {
  margin-top: var(--space-6);
}
.explorer-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  margin-bottom: var(--space-2);
}
.explorer-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.explorer-tag-link {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  font-size: 0.78rem;
  color: var(--color-text-muted);
  text-decoration: none;
}
.explorer-tag-link:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}
.explorer-empty {
  font-size: 0.84rem;
  color: var(--color-text-faint);
}
.explorer-empty-state {
  display: flex;
  height: 100%;
  min-height: 220px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  color: var(--color-text-faint);
}
.explorer-hint {
  max-width: 32ch;
  font-size: 0.82rem;
}
</style>
