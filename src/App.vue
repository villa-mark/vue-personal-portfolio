<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="app-shell">
    <NavBar />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
