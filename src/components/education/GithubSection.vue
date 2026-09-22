<script setup lang="ts">
import { Star } from '@lucide/vue'
import { githubProfile } from '@/data/github'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BrandIcon from '@/components/ui/BrandIcon.vue'
</script>

<template>
  <section id="github" class="container-shell section-py">
    <SectionHeading eyebrow="Open Source" title="GitHub" />

    <div class="github-shell card-surface">
      <div class="github-head">
        <div class="github-identity">
          <span class="github-avatar" aria-hidden="true"><BrandIcon name="github" :size="22" /></span>
          <div>
            <p class="github-username font-mono">@{{ githubProfile.username }}</p>
            <p class="github-meta">{{ githubProfile.publicRepos }} public repos &middot; {{ githubProfile.followers }} followers</p>
          </div>
        </div>
        <BaseButton
          as="a"
          :href="`https://github.com/${githubProfile.username}`"
          target="_blank"
          variant="secondary"
        >
          View GitHub
        </BaseButton>
      </div>

      <div class="github-languages">
        <span v-for="lang in githubProfile.topLanguages" :key="lang" class="lang-chip">{{ lang }}</span>
      </div>

      <div class="repo-grid">
        <a
          v-for="repo in githubProfile.featuredRepos"
          :key="repo.name"
          :href="repo.url"
          target="_blank"
          rel="noreferrer noopener"
          class="repo-card"
        >
          <p class="repo-name">{{ repo.name }}</p>
          <p class="repo-desc">{{ repo.description }}</p>
          <div class="repo-meta">
            <span>{{ repo.language }}</span>
            <span class="repo-stars"><Star :size="12" /> {{ repo.stars }}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.github-shell {
  padding: var(--space-6);
}
.github-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-border);
}
.github-identity {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}
.github-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-elevated);
  color: var(--color-text);
}
.github-username {
  font-size: 0.95rem;
  color: var(--color-text);
}
.github-meta {
  font-size: 0.78rem;
  color: var(--color-text-faint);
  margin-top: 2px;
}
.github-languages {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-block: var(--space-4);
}
.lang-chip {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
}
.repo-grid {
  display: grid;
  gap: var(--space-3);
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}
.repo-card {
  display: block;
  padding: var(--space-4);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  text-decoration: none;
  transition: border-color var(--dur-fast) var(--ease-out);
}
.repo-card:hover {
  border-color: var(--color-accent);
}
.repo-name {
  font-size: 0.86rem;
  color: var(--color-accent);
}
.repo-desc {
  margin-top: 6px;
  font-size: 0.8rem;
  color: var(--color-text-muted);
  line-height: 1.5;
}
.repo-meta {
  margin-top: var(--space-3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.72rem;
  color: var(--color-text-faint);
}
.repo-stars {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
</style>
