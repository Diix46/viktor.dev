<script setup lang="ts">
const experiences = [
  {
    period: 'Sept. 2023 — Aujourd\'hui',
    role: 'Technicien IT & Développeur',
    company: 'Géofoncier',
    location: 'Toulouse',
    description: 'Support HelpDesk national pour les Géomètres-Experts de France, maintenance du parc informatique, et pilotage de projets de collaboration avec les services du cadastre. Évolution progressive vers le développement frontend.',
    tags: ['Helpdesk', 'Gestion de parc', 'Projets IT', 'Frontend']
  },
  {
    period: 'Mars 2023 — Juin 2023',
    role: 'Responsable de Magasin',
    company: 'Boulanger',
    location: 'Cahors',
    description: 'Ouverture et pilotage d\'un point de vente : management d\'équipe, analyse des besoins clients, planification des KPI pour l\'année d\'ouverture.',
    tags: ['Management', 'KPI', 'Commerce', 'Leadership']
  },
  {
    period: 'Févr. 2022 — Mars 2023',
    role: 'Technicien Conseil',
    company: 'LDLC',
    location: 'Montauban',
    description: 'Conseil et satisfaction client, gestion du stock, montage de PC sur mesure et réalisation de configurations full custom en watercooling — du choix des composants à l\'assemblage final.',
    tags: ['Hardware', 'PC Custom', 'Watercooling', 'Conseil']
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
  <section id="experience" class="py-32 bg-muted/40">
    <UContainer>
      <div class="mb-16 reveal">
        <p class="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-3">Parcours</p>
        <h2 class="font-display text-5xl font-bold tracking-tight text-highlighted">
          Mon<br /><span class="text-outline">expérience</span>
        </h2>
      </div>

      <div class="relative">
        <!-- Vertical timeline line -->
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary/40 to-transparent md:-translate-x-1/2" />

        <div class="space-y-12">
          <div
            v-for="(exp, i) in experiences"
            :key="exp.company + i"
            class="reveal relative pl-12 md:pl-0"
            :class="`delay-${(i % 3) + 1}`"
          >
            <!-- Mobile dot -->
            <div class="md:hidden absolute left-0 top-1 w-8 h-8 rounded-full bg-default border-2 border-primary flex items-center justify-center">
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
                  <UIcon name="i-lucide-map-pin" class="w-3 h-3" />
                  {{ exp.location }}
                </span>
              </div>

              <!-- Desktop timeline dot -->
              <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 items-center justify-center" style="top: 8px;">
                <div class="w-4 h-4 rounded-full bg-primary ring-4 ring-default shadow-sm" />
              </div>

              <!-- Card side (alternating) -->
              <div :class="i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:order-1'">
                <!-- Mobile: period above card -->
                <div class="flex items-center gap-2 mb-3 md:hidden">
                  <span class="font-mono text-xs text-primary font-semibold">{{ exp.period }}</span>
                  <span class="text-xs text-muted">· {{ exp.location }}</span>
                </div>

                <div class="card-gradient-border">
                  <UCard :ui="{ body: 'p-6' }">
                    <h3 class="font-display text-lg font-bold text-highlighted mb-0.5">{{ exp.role }}</h3>
                    <p class="text-primary text-sm font-semibold mb-3">{{ exp.company }}</p>
                    <p class="text-muted text-sm font-sans leading-relaxed mb-4">{{ exp.description }}</p>
                    <div class="flex flex-wrap gap-2" :class="i % 2 !== 0 ? 'md:justify-end' : ''">
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
