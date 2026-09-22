<script setup lang="ts">
import { reactive, ref } from 'vue'
import { profile } from '@/data/portfolio'
import BaseButton from '@/components/ui/BaseButton.vue'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const form = reactive({ name: '', email: '', subject: '', message: '' })
const errors = reactive<Record<string, string>>({})
const state = ref<FormState>('idle')

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_MESSAGE_LENGTH = 20

function validate(): boolean {
  errors.name = form.name.trim() ? '' : 'Name is required.'
  errors.email = !form.email.trim()
    ? 'Email is required.'
    : EMAIL_PATTERN.test(form.email.trim())
      ? ''
      : 'Enter a valid email address.'
  errors.subject = form.subject.trim() ? '' : 'Subject is required.'
  errors.message = !form.message.trim()
    ? 'Message is required.'
    : form.message.trim().length < MIN_MESSAGE_LENGTH
      ? `Message must be at least ${MIN_MESSAGE_LENGTH} characters.`
      : ''

  return Object.values(errors).every((error) => !error)
}

async function onSubmit() {
  if (!validate()) return

  state.value = 'submitting'
  try {
    // Placeholder submit — swap for a real API call later. mailto keeps this
    // usable today without a backend.
    const subject = encodeURIComponent(form.subject)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`

    await new Promise((resolve) => setTimeout(resolve, 500))
    state.value = 'success'
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch {
    state.value = 'error'
  }
}
</script>

<template>
  <form class="contact-form" novalidate @submit.prevent="onSubmit">
    <div class="field">
      <label for="contact-name">Name</label>
      <input id="contact-name" v-model="form.name" type="text" autocomplete="name" :aria-invalid="!!errors.name" />
      <p v-if="errors.name" class="field-error">{{ errors.name }}</p>
    </div>

    <div class="field">
      <label for="contact-email">Email</label>
      <input id="contact-email" v-model="form.email" type="email" autocomplete="email" :aria-invalid="!!errors.email" />
      <p v-if="errors.email" class="field-error">{{ errors.email }}</p>
    </div>

    <div class="field">
      <label for="contact-subject">Subject</label>
      <input id="contact-subject" v-model="form.subject" type="text" :aria-invalid="!!errors.subject" />
      <p v-if="errors.subject" class="field-error">{{ errors.subject }}</p>
    </div>

    <div class="field">
      <label for="contact-message">Message</label>
      <textarea id="contact-message" v-model="form.message" rows="5" :aria-invalid="!!errors.message" />
      <p v-if="errors.message" class="field-error">{{ errors.message }}</p>
    </div>

    <BaseButton type="submit" variant="primary" :disabled="state === 'submitting'">
      {{ state === 'submitting' ? 'Sending…' : 'Send message' }}
    </BaseButton>

    <p v-if="state === 'success'" class="form-status form-status--success" role="status">
      Your email client should now be open with the message ready to send. Thank you!
    </p>
    <p v-if="state === 'error'" class="form-status form-status--error" role="alert">
      Something went wrong. Please email directly at {{ profile.email }}.
    </p>
  </form>
</template>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.field label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-faint);
}
.field input,
.field textarea {
  width: 100%;
  padding: 11px 14px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  background: var(--color-bg-elevated);
  color: var(--color-text);
  font-size: 0.92rem;
  resize: vertical;
  transition: border-color var(--dur-fast) var(--ease-out);
}
.field input:focus,
.field textarea:focus {
  border-color: var(--color-accent);
}
.field input[aria-invalid='true'],
.field textarea[aria-invalid='true'] {
  border-color: #e5484d;
}
.field-error {
  font-size: 0.78rem;
  color: #e5484d;
}
.form-status {
  font-size: 0.86rem;
  padding: 10px 14px;
  border-radius: var(--radius-sm);
}
.form-status--success {
  color: var(--color-status-live);
  background: color-mix(in srgb, var(--color-status-live) 12%, transparent);
}
.form-status--error {
  color: #e5484d;
  background: rgba(229, 72, 77, 0.12);
}
</style>
