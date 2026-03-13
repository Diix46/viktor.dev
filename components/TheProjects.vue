<script setup lang="ts">
const projects = [
  {
    name: 'GeoMind',
    description: 'Application web full-stack développée en autonomie. Interface Nuxt.js, API FastAPI, déployée sur homelab via reverse proxy SWAG avec SSL automatique. Architecture conteneurisée, CI/CD maison.',
    tags: ['Nuxt', 'FastAPI', 'Docker', 'SWAG', 'Python'],
    icon: '🌍',
    github: null,
    link: null
  },
  {
    name: 'DiixServer',
    description: 'Homelab complet auto-hébergé : stack media complète (Plex, Sonarr, Radarr, Bazarr), monitoring temps réel (Beszel, Gatus, Glance), VPN WireGuard, gestionnaire de mots de passe Vaultwarden, mises à jour automatiques Watchtower.',
    tags: ['Docker Compose', 'WireGuard', 'Linux', 'Plex', 'Monitoring'],
    icon: '🖥️',
    github: null,
    link: null
  },
  {
    name: 'Dealbot',
    description: 'Bot Discord de veille et d\'alertes automatiques. Surveillance de deals en temps réel, intégration d\'APIs tierces, notifications intelligentes filtrées par catégorie et seuil de prix.',
    tags: ['Discord.js', 'Node.js', 'API', 'Automation'],
    icon: '🤖',
    github: null,
    link: null
  },
  {
    name: 'DiixHub',
    description: 'Dashboard personnel centralisé hébergé sur DiixServer. Accès unifié à tous mes services, widgets météo, liens rapides, monitoring live. Built with Vue/Nuxt, auto-déployé.',
    tags: ['Vue', 'Nuxt', 'Self-host', 'Dashboard'],
    icon: '🗂️',
    github: null,
    link: null
  },
  {
    name: 'PC Full Custom Watercooling',
    description: 'Chez LDLC, montage et réalisation de PC sur mesure en watercooling custom loop — de la sélection des composants à l\'assemblage final, en passant par le câble management et le test de charge thermique.',
    tags: ['Hardware', 'Watercooling', 'Custom Loop', 'Overclocking'],
    icon: '💧',
    github: null,
    link: null
  },
  {
    name: 'Infrastructure Géofoncier',
    description: 'Maintien du parc informatique national, support HelpDesk pour les Géomètres-Experts de France, et pilotage de projets de collaboration entre les GE et les services du cadastre.',
    tags: ['Helpdesk', 'Gestion de parc', 'Projets', 'Cadastre'],
    icon: '📐',
    github: null,
    link: null
  }
]
</script>

<template>
  <section id="projects" class="py-32">
    <UContainer>
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 reveal">
        <div>
          <p class="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-3">Projets</p>
          <h2 class="font-display text-5xl font-bold tracking-tight text-highlighted">
            Ce que j'ai<br /><span class="text-gradient">construit</span>
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, i) in projects"
          :key="project.name"
          class="card-gradient-border reveal group"
          :class="`delay-${(i % 3) + 1}`"
        >
          <UCard
            class="h-full border border-default hover:border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            :ui="{ body: 'p-7' }"
          >
            <div class="flex flex-col h-full">
              <div class="flex items-start justify-between mb-4">
                <div class="text-4xl select-none" aria-hidden="true">{{ project.icon }}</div>
                <div class="flex gap-2">
                  <UButton
                    v-if="project.github"
                    :to="project.github"
                    icon="i-simple-icons-github"
                    color="neutral"
                    variant="ghost"
                    size="sm"
                    target="_blank"
                  />
                  <UButton
                    v-if="project.link"
                    :to="project.link"
                    icon="i-lucide-external-link"
                    color="neutral"
                    variant="ghost"
                    size="sm"
                    target="_blank"
                  />
                </div>
              </div>

              <h3 class="font-display text-xl font-bold text-highlighted mb-2 group-hover:text-primary transition-colors duration-200">
                {{ project.name }}
              </h3>

              <p class="text-muted font-sans text-sm leading-relaxed mb-5 flex-1">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2">
                <UBadge
                  v-for="tag in project.tags"
                  :key="tag"
                  :label="tag"
                  color="neutral"
                  variant="soft"
                  size="sm"
                  class="font-mono"
                />
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </section>
</template>
