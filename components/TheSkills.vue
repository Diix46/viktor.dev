<script setup lang="ts">
const groups = [
  {
    label: 'Frontend',
    icon: 'i-lucide-monitor',
    color: 'primary' as const,
    skills: ['React', 'Vue.js', 'Nuxt', 'TypeScript', 'Tailwind CSS', 'CSS avancé']
  },
  {
    label: 'DevOps & Infra',
    icon: 'i-lucide-server',
    color: 'secondary' as const,
    skills: ['Docker', 'CI/CD', 'Linux', 'WireGuard', 'SWAG / Nginx', 'Self-hosting', 'Watchtower']
  },
  {
    label: 'IA & Outils',
    icon: 'i-lucide-brain',
    color: 'neutral' as const,
    skills: ['LLM', 'Prompt Engineering', 'Claude API', 'Langchain', 'RAG', 'AI Tools']
  }
]
</script>

<template>
  <section id="skills" class="py-32 bg-muted/40">
    <UContainer>
      <div class="mb-16 reveal">
        <p class="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-3">Stack</p>
        <h2 class="font-display text-5xl font-bold tracking-tight text-highlighted">
          Ce que je<br /><span class="text-outline">maîtrise</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(group, gi) in groups"
          :key="group.label"
          class="reveal"
          :class="`delay-${gi + 1}`"
        >
          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-9 h-9 rounded-lg flex items-center justify-center"
              :class="group.color === 'primary' ? 'bg-primary/10' : group.color === 'secondary' ? 'bg-secondary/10' : 'bg-muted'"
            >
              <UIcon
                :name="group.icon"
                class="w-5 h-5"
                :class="group.color === 'primary' ? 'text-primary' : group.color === 'secondary' ? 'text-secondary' : 'text-muted'"
              />
            </div>
            <h3 class="font-display font-bold text-lg text-highlighted">{{ group.label }}</h3>
          </div>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in group.skills"
              :key="skill"
              class="chip-tilt inline-flex items-center px-3 py-1.5 rounded-md text-sm font-sans font-medium border border-default text-default bg-default hover:border-primary/40 hover:text-primary transition-colors duration-200 cursor-default"
              data-cursor-hover
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
