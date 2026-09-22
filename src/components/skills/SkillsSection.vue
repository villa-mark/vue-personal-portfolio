<script setup lang="ts">
import { ref, computed } from 'vue'
import { skills, skillCategories } from '@/data/skills'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import SkillExplorer from '@/components/skills/SkillExplorer.vue'

const selectedId = ref<string | null>(null)
const selectedSkill = computed(() => skills.find((skill) => skill.id === selectedId.value) ?? null)

const grouped = computed(() =>
  skillCategories
    .map((category) => ({ category, items: skills.filter((skill) => skill.category === category) }))
    .filter((group) => group.items.length > 0)
)

function select(id: string) {
  selectedId.value = selectedId.value === id ? null : id
}
</script>

<template>
  <section id="skills" class="container-shell section-py">
    <SectionHeading
      eyebrow="Tech Stack"
      title="Skills & Tools"
      description="Organized by category. Select any technology to see what it's used for and where."
    />

    <div class="skills-grid">
      <div v-reveal class="skills-groups">
        <div v-for="group in grouped" :key="group.category" class="skill-group">
          <p class="skill-group-title font-mono">{{ group.category }}</p>
          <div class="skill-chip-row">
            <button
              v-for="skill in group.items"
              :key="skill.id"
              type="button"
              class="skill-chip"
              :class="{ 'is-selected': selectedId === skill.id }"
              :aria-pressed="selectedId === skill.id"
              @click="select(skill.id)"
            >
              {{ skill.name }}
            </button>
          </div>
        </div>
      </div>

      <div v-reveal>
        <SkillExplorer :skill="selectedSkill" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  gap: var(--space-8);
  grid-template-columns: 1.5fr 1fr;
  align-items: start;
}
@media (max-width: 900px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
.skills-groups {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}
.skill-group-title {
  font-size: 0.74rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  margin-bottom: var(--space-3);
}
.skill-chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.skill-chip {
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text-muted);
  font-size: 0.84rem;
  cursor: pointer;
  transition:
    color var(--dur-fast) var(--ease-out),
    border-color var(--dur-fast) var(--ease-out),
    background-color var(--dur-fast) var(--ease-out);
}
.skill-chip:hover {
  color: var(--color-text);
  border-color: var(--color-border-strong);
}
.skill-chip.is-selected {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background: var(--color-accent-soft);
}
</style>
