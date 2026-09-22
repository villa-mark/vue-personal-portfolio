<script setup lang="ts">
import { Mail } from '@lucide/vue'
import { profile } from '@/data/portfolio'
import BaseButton from '@/components/ui/BaseButton.vue'
import BrandIcon from '@/components/ui/BrandIcon.vue'
import ContactForm from '@/components/contact/ContactForm.vue'
</script>

<template>
  <section id="contact" class="container-shell section-py">
    <div class="contact-grid">
      <div v-reveal class="contact-copy">
        <p class="eyebrow mb-4">Get In Touch</p>
        <h2 class="contact-heading">Let&rsquo;s Build Something</h2>
        <p class="contact-sub">Have a project, opportunity, or just want to talk about development?</p>

        <div class="contact-actions">
          <BaseButton as="a" :href="`mailto:${profile.email}`" variant="primary">
            <Mail :size="15" /> Send me an email
          </BaseButton>
          <BaseButton as="a" :href="profile.linkedin" target="_blank" variant="secondary">
            <BrandIcon name="linkedin" :size="15" /> LinkedIn
          </BaseButton>
        </div>

        <ul class="contact-details">
          <li><span>Email</span><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></li>
          <li><span>LinkedIn</span><a :href="profile.linkedin" target="_blank" rel="noreferrer noopener">{{ profile.linkedin }}</a></li>
          <li><span>GitHub</span><a :href="profile.github" target="_blank" rel="noreferrer noopener">{{ profile.github }}</a></li>
        </ul>
      </div>

      <div v-reveal class="contact-form-card card-surface">
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-grid {
  display: grid;
  gap: var(--space-12);
  grid-template-columns: 1fr 1fr;
}
@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
.contact-heading {
  font-size: clamp(1.9rem, 3.4vw, 2.6rem);
  font-weight: 800;
  color: var(--color-text);
}
.contact-sub {
  margin-top: var(--space-3);
  color: var(--color-text-muted);
  max-width: 42ch;
}
.contact-actions {
  margin-top: var(--space-8);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}
.contact-details {
  margin-top: var(--space-8);
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
.contact-details li {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 0.86rem;
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-border);
}
.contact-details span {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-faint);
}
.contact-details a {
  color: var(--color-text-muted);
  text-decoration: none;
  word-break: break-word;
}
.contact-details a:hover {
  color: var(--color-accent);
}
.contact-form-card {
  padding: var(--space-8);
}
</style>
