<script setup lang="ts">
const links = [
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    to: 'https://github.com/Diix46',
    description: '@Diix46'
  },
  {
    label: 'LinkedIn',
    icon: 'i-simple-icons-linkedin',
    to: 'https://linkedin.com/in/viktor-postupak',
    description: 'Viktor Postupak'
  },
  {
    label: 'Email',
    icon: 'i-lucide-mail',
    to: 'mailto:viktor.postupak@gmail.com',
    description: 'viktor.postupak@gmail.com'
  }
]
</script>

<template>
  <section id="contact" class="py-32 relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.06]"
        style="background: radial-gradient(ellipse, var(--ui-color-primary-500) 0%, transparent 70%);"
      />
    </div>

    <UContainer class="relative z-10">
      <div class="max-w-2xl mx-auto text-center">
        <div class="reveal">
          <p class="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-3">Contact</p>
          <h2 class="font-display text-5xl font-bold tracking-tight text-highlighted mb-6">
            Parlons<br /><span class="text-gradient">boulot</span>
          </h2>
          <p class="text-muted font-sans text-lg leading-relaxed mb-12">
            Un projet, une question, une idée folle à implémenter ?<br />
            Je réponds vite, je promets.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-12 reveal delay-1">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.to"
            target="_blank"
            rel="noopener noreferrer"
            class="card-gradient-border group"
            data-cursor-hover
          >
            <div class="flex items-center gap-3 px-6 py-4 rounded-lg border border-default bg-default hover:bg-muted transition-colors duration-200 h-full">
              <UIcon :name="link.icon" class="w-5 h-5 text-muted group-hover:text-primary transition-colors flex-shrink-0" />
              <div class="text-left">
                <p class="text-sm font-semibold text-highlighted">{{ link.label }}</p>
                <p class="text-xs text-muted font-mono">{{ link.description }}</p>
              </div>
            </div>
          </a>
        </div>

        <div class="reveal delay-2">
          <UButton
            label="Envoyer un message"
            to="mailto:viktor.postupak@gmail.com"
            size="xl"
            icon="i-lucide-send"
            trailing
            class="font-display font-bold"
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>
