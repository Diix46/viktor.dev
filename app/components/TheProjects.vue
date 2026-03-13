<script setup lang="ts">
const projects = [
  {
    name: 'GeoMind',
    description: 'Outil de génération de newsletters automatisées. L\'utilisateur configure ses sources et thématiques, l\'app agrège le contenu, le met en forme et génère des newsletters prêtes à envoyer. Frontend Nuxt.js, backend FastAPI, déployée sur homelab avec SSL auto via SWAG.',
    tags: ['Nuxt', 'FastAPI', 'Python', 'Docker', 'API REST'],
    icon: '📰',
    preview: 'screenshot',
    screenshotSrc: '/images/projects/geomind.png',
    blurZones: true,
    github: null,
    link: null
  },
  {
    name: 'DiixServer',
    description: 'Homelab auto-hébergé sous Unraid : stack media complète (Plex, Sonarr, Radarr, Bazarr, Prowlarr), monitoring temps réel (Beszel, Gatus, Glance), VPN WireGuard, gestionnaire de mots de passe Vaultwarden, reverse proxy SWAG, mises à jour automatiques Watchtower.',
    tags: ['Unraid', 'Docker', 'WireGuard', 'SWAG', 'Monitoring'],
    icon: '🖥️',
    preview: 'screenshot',
    screenshotSrc: '/images/projects/diixhub.png',
    blurZones: false,
    github: null,
    link: null
  },
  {
    name: 'Dealbot',
    description: 'Bot Discord de veille de bons plans et alertes automatiques. Surveillance de deals en temps réel sur plusieurs sources, intégration d\'APIs tierces, notifications intelligentes filtrées par catégorie, mots-clés et seuil de prix.',
    tags: ['Discord.js', 'Node.js', 'API', 'Automation'],
    icon: '🤖',
    preview: 'screenshot',
    screenshotSrc: '/images/projects/dealbot.png',
    blurZones: true,
    github: null,
    link: null
  },
  {
    name: 'PC Watercooling Custom',
    description: 'Chez LDLC, conception et montage de PC full custom en watercooling loop ouverte — sélection des composants, dimensionnement du circuit, câble management soigné, test de stabilité thermique et overclocking. Chaque machine, une œuvre.',
    tags: ['Hardware', 'Custom Loop', 'Overclocking', 'Câble Mgmt'],
    icon: '💧',
    preview: 'carousel',
    carouselImages: [
      '/images/projects/watercooling-1.jpg',
      '/images/projects/watercooling-2.jpg',
      '/images/projects/watercooling-3.jpg',
      '/images/projects/watercooling-4.jpg',
      '/images/projects/watercooling-5.jpg',
    ],
    github: null,
    link: null
  },
  {
    name: 'Stack Géofoncier',
    description: 'Refonte et maintenance de l\'infrastructure IT de Géofoncier : migration Vue 2 → Vue 3 / Nuxt, déploiement Django, intégration Datadog pour l\'observabilité, containerisation Docker, support et projets de collaboration entre Géomètres-Experts et le cadastre.',
    tags: ['Vue 3', 'Nuxt', 'Django', 'Docker', 'Datadog'],
    icon: '📐',
    preview: 'screenshot',
    screenshotSrc: '/images/projects/geofoncier.png',
    blurZones: true,
    github: null,
    link: null
  }
]

// Carousel state per project
const carouselIndexes = reactive<Record<number, number>>({})
function getCarouselIndex(i: number) {
  return carouselIndexes[i] ?? 0
}
function carouselNext(i: number, total: number) {
  carouselIndexes[i] = ((carouselIndexes[i] ?? 0) + 1) % total
}
function carouselPrev(i: number, total: number) {
  carouselIndexes[i] = ((carouselIndexes[i] ?? 0) - 1 + total) % total
}

// Lightbox
const lightbox = reactive<{ open: boolean; src: string; alt: string; images: string[]; index: number }>({
  open: false,
  src: '',
  alt: '',
  images: [],
  index: 0
})

function openLightbox(src: string, alt: string, images: string[] = [], index = 0) {
  lightbox.src = src
  lightbox.alt = alt
  lightbox.images = images.length ? images : [src]
  lightbox.index = index
  lightbox.open = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightbox.open = false
  document.body.style.overflow = ''
}

function lightboxNext() {
  lightbox.index = (lightbox.index + 1) % lightbox.images.length
  lightbox.src = lightbox.images[lightbox.index]
}

function lightboxPrev() {
  lightbox.index = (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length
  lightbox.src = lightbox.images[lightbox.index]
}

function onLightboxKey(e: KeyboardEvent) {
  if (!lightbox.open) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') lightboxNext()
  if (e.key === 'ArrowLeft') lightboxPrev()
}

onMounted(() => window.addEventListener('keydown', onLightboxKey))
onUnmounted(() => window.removeEventListener('keydown', onLightboxKey))
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
            class="h-full border border-default hover:border-transparent transition-all duration-300 hover:shadow-xl overflow-hidden"
            :ui="{ body: 'p-0' }"
          >
            <!-- Screenshot preview -->
            <template v-if="project.preview === 'screenshot'">
              <div
                class="h-44 relative overflow-hidden bg-muted cursor-zoom-in"
                @click="openLightbox(project.screenshotSrc!, project.name)"
              >
                <img
                  :src="project.screenshotSrc"
                  :alt="project.name + ' preview'"
                  class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <!-- Blur overlay on bottom portion for sensitive data -->
                <div
                  v-if="project.blurZones"
                  class="absolute bottom-0 left-0 right-0 h-1/2 backdrop-blur-sm"
                  style="mask-image: linear-gradient(to bottom, transparent 0%, black 60%);"
                />
                <!-- Hover hint -->
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm rounded-full p-2">
                    <UIcon name="i-lucide-zoom-in" class="w-5 h-5 text-white" />
                  </div>
                </div>
                <div class="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-default/60 to-transparent pointer-events-none" />
              </div>
            </template>

            <!-- Carousel preview (watercooling) -->
            <template v-else-if="project.preview === 'carousel'">
              <div class="h-44 relative overflow-hidden bg-zinc-900 group/carousel">
                <!-- Images -->
                <transition-group name="carousel-fade" tag="div" class="relative w-full h-full">
                  <img
                    v-for="(src, ci) in project.carouselImages"
                    v-show="ci === getCarouselIndex(i)"
                    :key="src"
                    :src="src"
                    :alt="`${project.name} ${ci + 1}`"
                    class="absolute inset-0 w-full h-full object-cover cursor-zoom-in"
                    @click="openLightbox(src, `${project.name} ${ci + 1}`, project.carouselImages!, ci)"
                  />
                </transition-group>

                <!-- Prev / Next -->
                <button
                  class="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 hover:bg-black/70 z-10"
                  @click.stop="carouselPrev(i, project.carouselImages!.length)"
                  aria-label="Précédent"
                >
                  <UIcon name="i-lucide-chevron-left" class="w-4 h-4 text-white" />
                </button>
                <button
                  class="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 hover:bg-black/70 z-10"
                  @click.stop="carouselNext(i, project.carouselImages!.length)"
                  aria-label="Suivant"
                >
                  <UIcon name="i-lucide-chevron-right" class="w-4 h-4 text-white" />
                </button>

                <!-- Dots -->
                <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                  <button
                    v-for="(_, ci) in project.carouselImages"
                    :key="ci"
                    class="w-1.5 h-1.5 rounded-full transition-all duration-200"
                    :class="ci === getCarouselIndex(i) ? 'bg-white scale-125' : 'bg-white/40'"
                    @click.stop="carouselIndexes[i] = ci"
                    :aria-label="`Photo ${ci + 1}`"
                  />
                </div>

                <!-- Bottom fade -->
                <div class="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-zinc-900/60 to-transparent pointer-events-none" />
              </div>
            </template>

            <!-- Card content -->
            <div class="p-6 flex flex-col h-[calc(100%-11rem)]">
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

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="lightbox.open"
          class="fixed inset-0 z-[100] flex items-center justify-center"
          @click.self="closeLightbox"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/90 backdrop-blur-md" @click="closeLightbox" />

          <!-- Image container -->
          <div class="relative z-10 flex items-center gap-4 px-4 max-w-[95vw] max-h-[95vh]">
            <!-- Prev (multi-image) -->
            <button
              v-if="lightbox.images.length > 1"
              class="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
              @click="lightboxPrev"
              aria-label="Précédent"
            >
              <UIcon name="i-lucide-chevron-left" class="w-5 h-5 text-white" />
            </button>

            <div class="relative">
              <img
                :src="lightbox.src"
                :alt="lightbox.alt"
                class="max-w-[80vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <!-- Caption -->
              <div class="absolute bottom-0 inset-x-0 text-center py-2 text-white/60 text-xs font-mono">
                {{ lightbox.alt }}
                <span v-if="lightbox.images.length > 1"> · {{ lightbox.index + 1 }} / {{ lightbox.images.length }}</span>
              </div>
            </div>

            <!-- Next (multi-image) -->
            <button
              v-if="lightbox.images.length > 1"
              class="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
              @click="lightboxNext"
              aria-label="Suivant"
            >
              <UIcon name="i-lucide-chevron-right" class="w-5 h-5 text-white" />
            </button>
          </div>

          <!-- Close button -->
          <button
            class="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
            @click="closeLightbox"
            aria-label="Fermer"
          >
            <UIcon name="i-lucide-x" class="w-5 h-5 text-white" />
          </button>

          <!-- Keyboard hint -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 text-white/30 text-xs font-mono">
            <span v-if="lightbox.images.length > 1">← → naviguer</span>
            <span>Esc fermer</span>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity 0.4s ease;
  position: absolute;
  inset: 0;
}
.carousel-fade-enter-from,
.carousel-fade-leave-to {
  opacity: 0;
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.25s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
