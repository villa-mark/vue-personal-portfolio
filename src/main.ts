import { createApp } from 'vue'
import '@/assets/styles/main.css'
import App from '@/App.vue'
import { router } from '@/router'
import { vReveal } from '@/directives/reveal'
import { useTheme } from '@/composables/useTheme'

// Initialize the theme system before mount so there is no flash of the wrong theme.
useTheme()

const app = createApp(App)
app.directive('reveal', vReveal)
app.use(router)
app.mount('#app')
