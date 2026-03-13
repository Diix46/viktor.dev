<!-- app.vue -->
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const navItems = computed<NavigationMenuItem[]>(() => [
  { label: 'Projets', to: '#projects' },
  { label: 'Compétences', to: '#skills' },
  { label: 'Expérience', to: '#experience' },
  { label: 'Contact', to: '#contact' }
])

// Sticky nav border on scroll
const scrolled = ref(false)
onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 40
  }, { passive: true })
})
</script>

<template>
  <UApp>
    <AppCursor />

    <UHeader
      :class="[
        'transition-all duration-300',
        scrolled ? 'border-b border-default shadow-sm backdrop-blur-md bg-default/80' : 'border-b border-transparent bg-transparent'
      ]"
    >
      <template #title>
        <span class="font-display font-bold text-lg tracking-tight text-highlighted">
          Viktor<span class="text-primary">.</span>
        </span>
      </template>

      <UNavigationMenu :items="navItems" />

      <template #right>
        <UColorModeButton variant="ghost" color="neutral" />
        <UButton
          label="Contact"
          to="#contact"
          size="sm"
          class="hidden sm:flex"
        />
      </template>

      <template #body>
        <UNavigationMenu :items="navItems" orientation="vertical" class="-mx-2.5" />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter>
      <template #left>
        <p class="text-muted text-sm font-sans">
          © {{ new Date().getFullYear() }} Viktor — Fait avec ☕ et trop de Docker Compose
        </p>
      </template>
      <template #right>
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/Diix46"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        />
      </template>
    </UFooter>
  </UApp>
</template>
