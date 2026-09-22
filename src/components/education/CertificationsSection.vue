<script setup lang="ts">
import { certifications } from '@/data/certifications'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import ImageWithFallback from '@/components/ui/ImageWithFallback.vue'
</script>

<template>
  <section id="certifications" class="container-shell section-py">
    <SectionHeading eyebrow="Credentials" title="Certifications" />

    <EmptyState v-if="!certifications.length" message="Certifications will be added here." />

    <div v-else class="cert-grid">
      <article v-for="cert in certifications" :key="cert.id" v-reveal class="cert-card card-surface">
        <ImageWithFallback
          :src="cert.image ?? ''"
          :alt="`${cert.name} certificate`"
          fallback-label="CERTIFICATE"
          rounded="square"
          class="cert-image"
        />
        <div class="cert-body">
          <h3 class="cert-name">{{ cert.name }}</h3>
          <p class="cert-issuer font-mono">{{ cert.issuer }}</p>
          <p class="cert-dates">
            Issued {{ cert.issueDate }}<span v-if="cert.expirationDate"> &middot; Expires {{ cert.expirationDate }}</span>
          </p>
          <p class="cert-id">Credential ID: {{ cert.credentialId }}</p>
          <a v-if="cert.verifyUrl" :href="cert.verifyUrl" target="_blank" rel="noreferrer noopener" class="cert-verify">
            Verify credential
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.cert-grid {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}
.cert-card {
  overflow: hidden;
  padding: 0;
}
.cert-image {
  aspect-ratio: 16 / 10;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid var(--color-border);
}
.cert-body {
  padding: var(--space-4) var(--space-6) var(--space-6);
}
.cert-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text);
}
.cert-issuer {
  margin-top: 2px;
  font-size: 0.78rem;
  color: var(--color-accent);
}
.cert-dates {
  margin-top: var(--space-2);
  font-size: 0.78rem;
  color: var(--color-text-faint);
}
.cert-id {
  margin-top: 4px;
  font-size: 0.74rem;
  color: var(--color-text-faint);
}
.cert-verify {
  display: inline-block;
  margin-top: var(--space-3);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-accent);
}
</style>
