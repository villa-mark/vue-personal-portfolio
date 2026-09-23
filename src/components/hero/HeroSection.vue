<script setup lang="ts">
import { Download, Mail } from "@lucide/vue";
import { profile } from "@/data/portfolio";
import BaseButton from "@/components/ui/BaseButton.vue";
import BrandIcon from "@/components/ui/BrandIcon.vue";
import ImageWithFallback from "@/components/ui/ImageWithFallback.vue";
import DeveloperStatusCard from "@/components/hero/DeveloperStatusCard.vue";
</script>

<template>
  <section id="home" class="hero-shell">
    <div class="container-shell hero-grid">
      <div v-reveal class="hero-copy">
        <p class="eyebrow mb-5">{{ profile.availability }}</p>

        <h1 class="hero-name">
          Hi, I&rsquo;m <span class="hero-name-accent">{{ profile.name }}</span>
        </h1>
        <p class="hero-title">{{ profile.title }}</p>
        <p class="hero-tagline">&ldquo;{{ profile.tagline }}&rdquo;</p>

        <div class="hero-actions">
          <BaseButton as="a" href="#projects" variant="primary">
            View my work
          </BaseButton>
          <BaseButton
            as="a"
            :href="profile.resume"
            target="_blank"
            variant="secondary"
          >
            <Download :size="15" /> Download resume
          </BaseButton>
        </div>

        <div class="hero-social">
          <a
            :href="profile.github"
            target="_blank"
            rel="noreferrer noopener"
            class="hero-social-link"
            aria-label="GitHub"
          >
            <BrandIcon name="github" :size="18" />
          </a>
          <a
            :href="profile.linkedin"
            target="_blank"
            rel="noreferrer noopener"
            class="hero-social-link"
            aria-label="LinkedIn"
          >
            <BrandIcon name="linkedin" :size="18" />
          </a>
          <a
            :href="`mailto:${profile.email}`"
            class="hero-social-link"
            aria-label="Email"
          >
            <Mail :size="18" />
          </a>
        </div>
      </div>

      <div v-reveal class="hero-side">
        <ImageWithFallback
          src="/images/avatar.jpeg"
          :alt="`Portrait of ${profile.name}`"
          fallback-label="AVATAR"
          icon="person"
          rounded="square"
          class="hero-avatar"
        />
        <DeveloperStatusCard />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-shell {
  position: relative;
  padding-block: var(--space-32) var(--space-16);
}
@media (max-width: 768px) {
  .hero-shell {
    padding-block: var(--space-24) var(--space-12);
  }
}

.hero-grid {
  display: grid;
  gap: var(--space-16);
  align-items: center;
  grid-template-columns: 1.15fr 0.85fr;
}
@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
}

.hero-name {
  font-size: clamp(2.1rem, 4.4vw, 3.4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--color-text);
}
.hero-name-accent {
  color: var(--color-accent);
}

.hero-title {
  margin-top: var(--space-3);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--color-text-muted);
}

.hero-tagline {
  margin-top: var(--space-6);
  max-width: 46ch;
  font-size: 1.02rem;
  line-height: 1.65;
  color: var(--color-text-muted);
}

.hero-actions {
  margin-top: var(--space-8);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.hero-social {
  margin-top: var(--space-8);
  display: flex;
  gap: var(--space-3);
}
.hero-social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-btn);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  transition: color var(--dur-fast) var(--ease-out),
    border-color var(--dur-fast) var(--ease-out);
}
.hero-social-link:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.hero-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
}

.hero-avatar {
  width: min(360px, 78vw);
  aspect-ratio: 1 / 1;
  box-shadow: var(--shadow-lift);
}
.hero-avatar :deep(img) {
  object-fit: cover;
  object-position: 30% 30%;
}
</style>
