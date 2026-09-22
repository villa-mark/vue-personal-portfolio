<script setup lang="ts">
import { ArrowUp, Mail } from '@lucide/vue'
import { profile } from '@/data/portfolio'
import BrandIcon from '@/components/ui/BrandIcon.vue'

const year = new Date().getFullYear()

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="footer-shell">
    <div class="container-shell footer-grid">
      <div>
        <p class="footer-brand">
          <span class="font-mono" style="color: var(--color-accent)">{{
            profile.name === '[NAME]' ? '[NAME]' : profile.name
          }}</span
          >.DEV
        </p>
        <p class="footer-title">{{ profile.title }}</p>
        <p class="footer-note">Built with Vue + TypeScript</p>
      </div>

      <div class="footer-links">
        <a :href="profile.github" target="_blank" rel="noreferrer noopener" class="footer-link" aria-label="GitHub">
          <BrandIcon name="github" :size="16" /> GitHub
        </a>
        <a :href="profile.linkedin" target="_blank" rel="noreferrer noopener" class="footer-link" aria-label="LinkedIn">
          <BrandIcon name="linkedin" :size="16" /> LinkedIn
        </a>
        <a :href="`mailto:${profile.email}`" class="footer-link" aria-label="Email">
          <Mail :size="16" /> Email
        </a>
      </div>

      <div class="footer-meta">
        <p>© {{ year }} {{ profile.name === '[NAME]' ? '[NAME]' : profile.name }}. All rights reserved.</p>
        <button type="button" class="back-to-top" @click="scrollToTop">
          Back to top <ArrowUp :size="14" />
        </button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-shell {
  border-top: 1px solid var(--color-border);
  padding-block: var(--space-12);
  background: var(--color-bg-elevated);
}
.footer-grid {
  display: grid;
  gap: var(--space-8);
  grid-template-columns: 1fr;
}
@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 1.4fr 1fr 1fr;
    align-items: start;
  }
}
.footer-brand {
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--color-text);
}
.footer-title {
  margin-top: 4px;
  font-size: 0.86rem;
  color: var(--color-text-muted);
}
.footer-note {
  margin-top: var(--space-3);
  font-family: var(--font-mono);
  font-size: 0.76rem;
  color: var(--color-text-faint);
}
.footer-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.86rem;
  color: var(--color-text-muted);
  text-decoration: none;
  width: fit-content;
}
.footer-link:hover {
  color: var(--color-accent);
}
.footer-meta {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-size: 0.8rem;
  color: var(--color-text-faint);
}
@media (min-width: 768px) {
  .footer-meta {
    align-items: flex-end;
    text-align: right;
  }
}
.back-to-top {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: var(--color-text-muted);
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 0.76rem;
  padding: 0;
}
.back-to-top:hover {
  color: var(--color-accent);
}
</style>
