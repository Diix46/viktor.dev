<script setup lang="ts">
const projects = [
  {
    name: 'GeoMind',
    description: 'App web de géolocalisation et d\'analyse de données géographiques. L\'utilisateur saisit une adresse, l\'app interroge plusieurs APIs (cadastre, géocodage, données foncières) et génère une fiche synthétique enrichie. Frontend Nuxt.js, backend FastAPI, déployée sur homelab avec SSL auto via SWAG.',
    tags: ['Nuxt', 'FastAPI', 'Python', 'Docker', 'API REST'],
    icon: '🌍',
    preview: 'geo',
    github: null,
    link: null
  },
  {
    name: 'DiixServer',
    description: 'Homelab auto-hébergé sous Unraid : stack media complète (Plex, Sonarr, Radarr, Bazarr, Prowlarr), monitoring temps réel (Beszel, Gatus, Glance), VPN WireGuard, gestionnaire de mots de passe Vaultwarden, reverse proxy SWAG, mises à jour automatiques Watchtower.',
    tags: ['Unraid', 'Docker', 'WireGuard', 'SWAG', 'Monitoring'],
    icon: '🖥️',
    preview: 'server',
    github: null,
    link: null
  },
  {
    name: 'Dealbot',
    description: 'Bot Discord de veille de bons plans et alertes automatiques. Surveillance de deals en temps réel sur plusieurs sources, intégration d\'APIs tierces, notifications intelligentes filtrées par catégorie, mots-clés et seuil de prix.',
    tags: ['Discord.js', 'Node.js', 'API', 'Automation'],
    icon: '🤖',
    preview: 'bot',
    github: null,
    link: null
  },
  {
    name: 'PC Watercooling Custom',
    description: 'Chez LDLC, conception et montage de PC full custom en watercooling loop ouverte — sélection des composants, dimensionnement du circuit, câble management soigné, test de stabilité thermique et overclocking. Chaque machine, une œuvre.',
    tags: ['Hardware', 'Custom Loop', 'Overclocking', 'Câble Mgmt'],
    icon: '💧',
    preview: 'water',
    github: null,
    link: null
  },
  {
    name: 'Stack Géofoncier',
    description: 'Refonte et maintenance de l\'infrastructure IT de Géofoncier : migration Vue 2 → Vue 3 / Nuxt, déploiement Django, intégration Datadog pour l\'observabilité, containerisation Docker, support et projets de collaboration entre Géomètres-Experts et le cadastre.',
    tags: ['Vue 3', 'Nuxt', 'Django', 'Docker', 'Datadog'],
    icon: '📐',
    preview: 'geo2',
    github: null,
    link: null
  }
]
</script>

<template>
  <section id="projects" class="py-24">
    <UContainer>
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 reveal">
        <div>
          <p class="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-3">Projets</p>
          <h2 class="font-display text-5xl font-bold tracking-tight text-highlighted">
            Ce que j'ai<br /><span class="text-gradient">construit</span>
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(project, i) in projects"
          :key="project.name"
          class="card-gradient-border reveal group"
          :class="`delay-${(i % 3) + 1}`"
        >
          <UCard
            class="h-full border border-default hover:border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
            :ui="{ body: 'p-0' }"
          >
            <!-- Visual preview band -->
            <div class="h-28 relative overflow-hidden flex items-center justify-center" :class="{
              'bg-gradient-to-br from-violet-50 to-blue-50': project.preview === 'geo',
              'bg-gradient-to-br from-zinc-900 to-zinc-800': project.preview === 'server',
              'bg-gradient-to-br from-indigo-50 to-violet-50': project.preview === 'bot',
              'bg-gradient-to-br from-cyan-50 to-blue-50': project.preview === 'water',
              'bg-gradient-to-br from-slate-50 to-violet-50': project.preview === 'geo2',
            }">
              <!-- Geo preview -->
              <template v-if="project.preview === 'geo'">
                <div class="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" viewBox="0 0 400 120">
                    <path d="M0,60 Q50,20 100,60 T200,60 T300,60 T400,60" stroke="#7c3aed" stroke-width="1.5" fill="none" opacity="0.4"/>
                    <path d="M0,80 Q60,40 120,80 T240,80 T360,80" stroke="#3b82f6" stroke-width="1" fill="none" opacity="0.3"/>
                    <circle cx="180" cy="55" r="12" fill="#7c3aed" opacity="0.15"/>
                    <circle cx="180" cy="55" r="6" fill="#7c3aed" opacity="0.3"/>
                    <circle cx="180" cy="55" r="2.5" fill="#7c3aed" opacity="0.8"/>
                  </svg>
                </div>
                <div class="relative z-10 font-mono text-xs text-violet-600 bg-white/80 backdrop-blur px-3 py-1.5 rounded-md border border-violet-200 shadow-sm">
                  GET /api/parcelle?addr=...
                </div>
              </template>

              <!-- Server preview -->
              <template v-if="project.preview === 'server'">
                <div class="flex gap-2 px-4 w-full">
                  <div v-for="svc in ['Plex','Sonarr','WireGuard','Vaultwarden']" :key="svc"
                    class="flex-1 bg-zinc-700/60 rounded px-1.5 py-2 text-center">
                    <div class="w-1.5 h-1.5 rounded-full bg-emerald-400 mx-auto mb-1"/>
                    <span class="text-zinc-300 text-[9px] font-mono">{{ svc }}</span>
                  </div>
                </div>
              </template>

              <!-- Bot preview -->
              <template v-if="project.preview === 'bot'">
                <div class="space-y-1.5 px-4 w-full">
                  <div class="flex items-center gap-2 bg-indigo-100/60 rounded px-2.5 py-1.5">
                    <div class="w-5 h-5 rounded-full bg-indigo-400 flex items-center justify-center text-[9px] text-white font-bold">D</div>
                    <span class="font-mono text-[10px] text-indigo-700">🔥 Deal -60% RTX 4080 — 549€</span>
                  </div>
                  <div class="flex items-center gap-2 bg-violet-100/60 rounded px-2.5 py-1.5">
                    <div class="w-5 h-5 rounded-full bg-violet-400 flex items-center justify-center text-[9px] text-white font-bold">D</div>
                    <span class="font-mono text-[10px] text-violet-700">💾 SSD 2To — 79€ (-45%)</span>
                  </div>
                </div>
              </template>

              <!-- Watercooling preview -->
              <template v-if="project.preview === 'water'">
                <div class="relative w-full h-full flex items-center justify-center">
                  <svg width="200" height="90" viewBox="0 0 200 90" class="opacity-70">
                    <!-- Tubing -->
                    <path d="M20,45 L50,45 Q60,45 60,35 L60,20 L140,20 Q150,20 150,30 L150,45 L180,45" stroke="#06b6d4" stroke-width="4" fill="none" stroke-linecap="round"/>
                    <path d="M180,45 L150,45 Q140,45 140,55 L140,70 L60,70 Q50,70 50,60 L50,45 L20,45" stroke="#0891b2" stroke-width="4" fill="none" stroke-linecap="round"/>
                    <!-- Pump -->
                    <circle cx="20" cy="45" r="10" fill="#0e7490" stroke="#06b6d4" stroke-width="1.5"/>
                    <text x="20" y="48.5" text-anchor="middle" font-size="7" fill="white" font-family="monospace">P</text>
                    <!-- Radiator -->
                    <rect x="155" y="28" width="28" height="35" rx="3" fill="#164e63" stroke="#06b6d4" stroke-width="1"/>
                    <line x1="161" y1="28" x2="161" y2="63" stroke="#06b6d4" stroke-width="0.8" opacity="0.5"/>
                    <line x1="167" y1="28" x2="167" y2="63" stroke="#06b6d4" stroke-width="0.8" opacity="0.5"/>
                    <line x1="173" y1="28" x2="173" y2="63" stroke="#06b6d4" stroke-width="0.8" opacity="0.5"/>
                    <!-- Block CPU -->
                    <rect x="85" y="35" width="30" height="20" rx="3" fill="#0e7490" stroke="#06b6d4" stroke-width="1.5"/>
                    <text x="100" y="48" text-anchor="middle" font-size="7" fill="#67e8f9" font-family="monospace">CPU</text>
                  </svg>
                </div>
              </template>

              <!-- Géofoncier stack preview -->
              <template v-if="project.preview === 'geo2'">
                <div class="flex gap-1.5 px-4 flex-wrap justify-center">
                  <div v-for="tech in ['Vue 3','Nuxt','Django','Docker','Datadog']" :key="tech"
                    class="bg-white/70 backdrop-blur border border-violet-200/60 rounded px-2 py-1">
                    <span class="text-[10px] font-mono text-violet-700 font-semibold">{{ tech }}</span>
                  </div>
                </div>
              </template>
            </div>

            <!-- Card content -->
            <div class="p-6 flex flex-col h-[calc(100%-7rem)]">
              <div class="flex items-start justify-between mb-3">
                <h3 class="font-display text-lg font-bold text-highlighted group-hover:text-primary transition-colors duration-200">
                  {{ project.name }}
                </h3>
                <div class="flex gap-1 ml-2 flex-shrink-0">
                  <UButton v-if="project.github" :to="project.github" icon="i-simple-icons-github" color="neutral" variant="ghost" size="xs" target="_blank" rel="noopener noreferrer"/>
                  <UButton v-if="project.link" :to="project.link" icon="i-lucide-external-link" color="neutral" variant="ghost" size="xs" target="_blank" rel="noopener noreferrer"/>
                </div>
              </div>

              <p class="text-muted font-sans text-sm leading-relaxed mb-4 flex-1">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-1.5">
                <UBadge v-for="tag in project.tags" :key="tag" :label="tag" color="neutral" variant="soft" size="sm" class="font-mono"/>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </section>
</template>
