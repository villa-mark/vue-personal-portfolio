<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost'
    as?: 'button' | 'a'
    href?: string
    target?: string
    type?: 'button' | 'submit'
  }>(),
  { variant: 'primary', as: 'button', type: 'button' }
)
</script>

<template>
  <component
    :is="as"
    :type="as === 'button' ? type : undefined"
    :href="as === 'a' ? href : undefined"
    :target="as === 'a' ? target : undefined"
    :rel="as === 'a' && target === '_blank' ? 'noreferrer noopener' : undefined"
    class="btn-base"
    :class="[
      variant === 'primary' && 'btn-primary',
      variant === 'secondary' && 'btn-secondary',
      variant === 'ghost' && 'btn-ghost'
    ]"
  >
    <slot />
  </component>
</template>

<style scoped>
.btn-base {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 11px 20px;
  border-radius: var(--radius-btn);
  border: 1px solid transparent;
  cursor: pointer;
  transition:
    transform var(--dur-fast) var(--ease-out),
    background-color var(--dur-fast) var(--ease-out),
    border-color var(--dur-fast) var(--ease-out);
  white-space: nowrap;
}
.btn-base:active {
  transform: translateY(1px);
}

.btn-primary {
  background: var(--color-accent);
  color: #04120f;
  border-color: var(--color-accent);
}
.btn-primary:hover {
  background: var(--color-accent-strong);
  border-color: var(--color-accent-strong);
}

.btn-secondary {
  background: transparent;
  color: var(--color-text);
  border-color: var(--color-border-strong);
}
.btn-secondary:hover {
  background: var(--color-surface-hover);
  border-color: var(--color-accent);
}

.btn-ghost {
  background: transparent;
  color: var(--color-text-muted);
  border-color: transparent;
  padding-inline: 10px;
}
.btn-ghost:hover {
  color: var(--color-text);
  background: var(--color-surface-hover);
}
</style>
