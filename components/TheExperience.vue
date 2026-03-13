<script setup lang="ts">
const experiences = [
  {
    period: 'Jan. 2025 — Aujourd\'hui',
    role: 'Développeur Frontend & DevOps',
    company: 'Géofoncier',
    location: 'Toulouse',
    description: 'Développement et maintenance d\'applications web : migration Vue 2 → Vue 3 / Nuxt, développement Django, containerisation Docker, mise en place de l\'observabilité avec Datadog. Collaboration avec les équipes cadastre sur des projets de modernisation.',
    tags: ['Vue 3', 'Nuxt', 'Django', 'Docker', 'Datadog']
  },
  {
    period: 'Sept. 2023 — Jan. 2025',
    role: 'Technicien Helpdesk & IT',
    company: 'Géofoncier',
    location: 'Toulouse',
    description: 'Support HelpDesk national pour les Géomètres-Experts de France, maintien du parc informatique, pilotage de projets de collaboration entre les GE et les services du cadastre.',
    tags: ['Helpdesk', 'Gestion de parc', 'Projets IT', 'Support N2']
  },
  {
    period: 'Mars 2023 — Juin 2023',
    role: 'Responsable de Magasin',
    company: 'Boulanger',
    location: 'Cahors',
    description: 'Ouverture et pilotage d\'un point de vente : management d\'équipe, analyse des besoins clients, planification et suivi des KPI pour l\'année d\'ouverture.',
    tags: ['Management', 'KPI', 'Commerce', 'Leadership']
  },
  {
    period: 'Févr. 2022 — Mars 2023',
    role: 'Responsable Adjoint & Technicien',
    company: 'LDLC',
    location: 'Montauban',
    description: 'Responsable adjoint du magasin, conseil et satisfaction client, gestion du stock. Partie atelier : montage de PC sur mesure et réalisation de configurations full custom en watercooling — du devis à la livraison.',
    tags: ['Hardware', 'PC Custom', 'Watercooling', 'Management']
  },
  {
    period: 'Févr. 2019 — Août 2021',
    role: 'Technicien de Maintenance Niv. 2',
    company: 'Sonova Audiological Care',
    location: 'Cahors',
    description: 'Déploiement et renouvellement de postes informatiques, support HelpDesk pour les centres Audition Santé à travers la France, rédaction de documentations et formation sur les nouveaux outils du groupe.',
    tags: ['Maintenance', 'HelpDesk', 'Déploiement', 'Formation']
  }
]
</script>

<template>
  <section id="experience" class="py-24 bg-muted/40">
    <UContainer>
      <div class="mb-14 reveal">
        <p class="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-3">Parcours</p>
        <h2 class="font-display text-5xl font-bold tracking-tight text-highlighted">
          Mon<br /><span class="text-outline">expérience</span>
        </h2>
      </div>

      <div class="relative">
        <!-- Vertical timeline line -->
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary/40 to-transparent md:-translate-x-1/2" />

        <div class="space-y-10">
          <div
            v-for="(exp, i) in experiences"
            :key="exp.role + exp.company"
            class="reveal relative pl-12 md:pl-0"
            :class="`delay-${(i % 3) + 1}`"
          >
            <!-- Mobile dot -->
            <div class="md:hidden absolute left-0 top-2 w-8 h-8 rounded-full bg-default border-2 border-primary flex items-center justify-center">
              <div class="w-2 h-2 rounded-full bg-primary" />
            </div>

            <div class="md:grid md:grid-cols-2 md:gap-16 items-start">
              <!-- Period side (alternating) -->
              <div
                :class="[
                  'hidden md:flex flex-col mb-4 md:mb-0',
                  i % 2 === 0 ? 'justify-end text-right pr-12 items-end' : 'order-2 pl-12 items-start'
                ]"
              >
                <span class="font-mono text-sm text-primary font-semibold">{{ exp.period }}</span>
                <span class="text-xs text-muted mt-1 flex items-center gap-1" :class="i % 2 === 0 ? 'flex-row-reverse' : ''">
                  <UIcon name="i-lucide-map-pin" class="w-3 h-3 flex-shrink-0" />
                  {{ exp.location }}
                </span>
              </div>

              <!-- Desktop timeline dot -->
              <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 items-center justify-center" style="top: 10px;">
                <div class="w-4 h-4 rounded-full bg-primary ring-4 ring-default shadow-sm" />
              </div>

              <!-- Card side -->
              <div :class="i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:order-1'">
                <!-- Mobile: period above card -->
                <div class="flex items-center gap-2 mb-2 md:hidden">
                  <span class="font-mono text-xs text-primary font-semibold">{{ exp.period }}</span>
                  <span class="text-xs text-muted">· {{ exp.location }}</span>
                </div>

                <div class="card-gradient-border">
                  <UCard :ui="{ body: 'p-5' }">
                    <!-- Role — font-display avec overflow visible pour les descentes (g, p, y...) -->
                    <h3
                      class="font-display font-bold text-highlighted mb-0.5"
                      style="font-size: 1.05rem; line-height: 1.4; overflow: visible;"
                    >{{ exp.role }}</h3>
                    <p class="text-primary text-sm font-semibold mb-2.5">{{ exp.company }}</p>
                    <p class="text-muted text-sm font-sans leading-relaxed mb-3">{{ exp.description }}</p>
                    <div class="flex flex-wrap gap-1.5" :class="i % 2 !== 0 ? 'md:justify-end' : ''">
                      <UBadge
                        v-for="tag in exp.tags"
                        :key="tag"
                        :label="tag"
                        color="primary"
                        variant="soft"
                        size="sm"
                        class="font-mono"
                      />
                    </div>
                  </UCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
