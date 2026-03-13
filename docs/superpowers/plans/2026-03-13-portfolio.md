# Portfolio Viktor — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construire un portfolio one-page Nuxt 3 visuellement distinctif avec effets CSS poussés — impossible à identifier comme généré par IA.

**Architecture:** Nuxt 3 SSG (nuxt generate), @nuxt/ui v4, Tailwind CSS v4. One-page avec ancres smooth-scroll. Composants par section. Aucun backend.

**Tech Stack:** Nuxt 3, @nuxt/ui, Tailwind CSS v4, Syne + DM Sans (Google Fonts via @nuxt/fonts), @iconify-json/lucide, @iconify-json/simple-icons

**Spec:** `docs/superpowers/specs/2026-03-13-portfolio-design.md`

---

## Chunk 1: Setup & configuration

### Task 1: Initialiser le projet Nuxt

**Files:**
- Create: `package.json`
- Create: `nuxt.config.ts`
- Create: `app.config.ts`
- Create: `assets/css/main.css`
- Create: `app.vue`
- Create: `.gitignore`

- [ ] **Step 1: Initialiser le projet**

```bash
cd /c/dev/Perso/portefollio
npx nuxi@latest init . --no-install --template minimal
```

- [ ] **Step 2: Installer les dépendances**

```bash
pnpm add @nuxt/ui tailwindcss @iconify-json/lucide @iconify-json/simple-icons
pnpm add -D @nuxt/fonts
```

- [ ] **Step 3: Configurer nuxt.config.ts**

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],

  fonts: {
    families: [
      { name: 'Syne', weights: [400, 700, 800] },
      { name: 'DM Sans', weights: [400, 500, 600] }
    ]
  },

  nitro: {
    preset: 'static'
  },

  ssr: true,

  compatibilityDate: '2025-01-01'
})
```

- [ ] **Step 4: Configurer app.config.ts**

```ts
// app.config.ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'violet',
      secondary: 'blue',
      neutral: 'zinc'
    },
    button: {
      slots: {
        base: 'font-semibold tracking-wide cursor-pointer'
      }
    },
    card: {
      slots: {
        root: 'overflow-hidden'
      }
    }
  }
})
```

- [ ] **Step 5: Créer assets/css/main.css**

```css
@import "tailwindcss";
@import "@nuxt/ui";

@theme {
  --font-sans: 'DM Sans', system-ui, sans-serif;
  --font-display: 'Syne', system-ui, sans-serif;
}

:root {
  --ui-radius: 0.375rem;
  --ui-primary: var(--ui-color-primary-600);
  --ui-container: 72rem;
}

/* Grain texture overlay */
.grain-overlay {
  position: relative;
}
.grain-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
  border-radius: inherit;
}

/* Scroll fade-in animation */
@keyframes fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-up {
  animation: fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* Stagger delays */
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }

/* Gradient text */
.text-gradient {
  background: linear-gradient(135deg, var(--ui-color-primary-600) 0%, var(--ui-color-secondary-500) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Text outline */
.text-outline {
  -webkit-text-stroke: 1.5px var(--ui-color-neutral-300);
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* Animated underline */
@keyframes draw-line {
  from { width: 0; }
  to { width: 100%; }
}

/* Border gradient card */
.card-gradient-border {
  position: relative;
  background: white;
}
.card-gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.5px;
  background: linear-gradient(135deg, var(--ui-color-primary-500), var(--ui-color-secondary-400));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.card-gradient-border:hover::before {
  opacity: 1;
}

/* Skill chip tilt */
.chip-tilt {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  transform-style: preserve-3d;
}
.chip-tilt:hover {
  transform: perspective(400px) rotateX(-8deg) translateY(-2px);
  box-shadow: 0 8px 20px -4px var(--ui-color-primary-200);
}

/* Custom scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--ui-color-neutral-300); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--ui-color-primary-400); }

/* Reveal animation (JS-triggered) */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal.delay-1 { transition-delay: 0.1s; }
.reveal.delay-2 { transition-delay: 0.2s; }
.reveal.delay-3 { transition-delay: 0.3s; }
```

- [ ] **Step 6: Créer app.vue**

```vue
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
          to="https://github.com"
          target="_blank"
          aria-label="GitHub"
        />
      </template>
    </UFooter>
  </UApp>
</template>
```

- [ ] **Step 7: Créer pages/index.vue (squelette)**

```vue
<!-- pages/index.vue -->
<template>
  <div>
    <TheHero />
    <TheSkills />
    <TheProjects />
    <TheExperience />
    <TheContact />
  </div>
</template>
```

- [ ] **Step 8: Vérifier que ça démarre**

```bash
pnpm dev
```

Ouvrir http://localhost:3000 — page vide sans erreur console.

- [ ] **Step 9: Commit**

```bash
git init
git add -A
git commit -m "feat: init Nuxt 3 + NuxtUI + Tailwind v4 setup"
```

---

## Chunk 2: Composant AppCursor + TheHero

### Task 2: Curseur custom

**Files:**
- Create: `components/AppCursor.vue`

- [ ] **Step 1: Créer AppCursor.vue**

```vue
<!-- components/AppCursor.vue -->
<script setup lang="ts">
const x = ref(0)
const y = ref(0)
const visible = ref(false)
const hovered = ref(false)

onMounted(() => {
  window.addEventListener('mousemove', (e) => {
    x.value = e.clientX
    y.value = e.clientY
    visible.value = true
  }, { passive: true })

  // Detect hover on interactive elements
  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement
    hovered.value = !!(target.closest('a, button, [data-cursor-hover]'))
  }, { passive: true })
})
</script>

<template>
  <Teleport to="body">
    <div
      class="pointer-events-none fixed z-[9999] transition-all duration-100 ease-out mix-blend-difference"
      :style="{
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -50%)',
        opacity: visible ? 1 : 0
      }"
    >
      <div
        :class="[
          'rounded-full bg-white transition-all duration-200',
          hovered ? 'w-8 h-8 opacity-80' : 'w-3 h-3 opacity-100'
        ]"
      />
    </div>
  </Teleport>
</template>
```

### Task 3: Section Hero

**Files:**
- Create: `components/TheHero.vue`

- [ ] **Step 1: Créer TheHero.vue**

```vue
<!-- components/TheHero.vue -->
<script setup lang="ts">
// Animate letters on mount
const titleVisible = ref(false)
onMounted(() => {
  setTimeout(() => { titleVisible.value = true }, 100)
})
</script>

<template>
  <section
    id="hero"
    class="grain-overlay relative min-h-[92vh] flex items-center overflow-hidden"
  >
    <!-- Background decoration -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <!-- Soft gradient blob top-right -->
      <div
        class="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style="background: radial-gradient(circle, var(--ui-color-primary-500) 0%, transparent 70%);"
      />
      <!-- Small blob bottom-left -->
      <div
        class="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-[0.05]"
        style="background: radial-gradient(circle, var(--ui-color-secondary-500) 0%, transparent 70%);"
      />
      <!-- Grid dots pattern -->
      <svg class="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>

    <UContainer class="relative z-10 py-24">
      <div class="max-w-4xl">

        <!-- Eyebrow badges -->
        <div class="flex flex-wrap gap-2 mb-10 animate-fade-up">
          <UBadge color="primary" variant="soft" size="md" class="chip-tilt font-mono text-xs tracking-widest uppercase">
            Frontend
          </UBadge>
          <UBadge color="secondary" variant="soft" size="md" class="chip-tilt font-mono text-xs tracking-widest uppercase">
            DevOps
          </UBadge>
          <UBadge color="neutral" variant="soft" size="md" class="chip-tilt font-mono text-xs tracking-widest uppercase">
            IA
          </UBadge>
        </div>

        <!-- Main title -->
        <h1
          class="font-display leading-[0.92] tracking-[-0.04em] mb-8 animate-fade-up delay-100"
          style="font-size: clamp(4rem, 12vw, 9rem);"
        >
          <span class="block text-highlighted">Dév</span>
          <span class="block text-outline select-none">frontend</span>
          <span class="block">
            <span class="text-gradient">& ops</span><span class="text-primary">.</span>
          </span>
        </h1>

        <!-- Animated decorative line -->
        <div class="mb-8 animate-fade-up delay-200">
          <div
            class="h-px bg-gradient-to-r from-primary to-secondary origin-left"
            style="
              width: 0;
              animation: draw-line 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
            "
          />
        </div>

        <!-- Tagline -->
        <p class="text-xl text-muted font-sans font-normal leading-relaxed max-w-xl mb-10 animate-fade-up delay-300">
          Je construis des interfaces qui tiennent la route —<br class="hidden sm:block" />
          et les infras qui les font tourner.
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4 animate-fade-up delay-400">
          <UButton
            label="Voir mes projets"
            to="#projects"
            size="lg"
            icon="i-lucide-arrow-down"
            trailing
            class="font-display font-bold"
          />
          <UButton
            label="Me contacter"
            to="#contact"
            size="lg"
            color="neutral"
            variant="subtle"
            class="font-display font-bold"
          />
        </div>

      </div>
    </UContainer>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up delay-500">
      <span class="text-dimmed text-xs font-mono tracking-widest uppercase">scroll</span>
      <div class="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" style="animation: pulse 2s ease-in-out infinite;" />
    </div>
  </section>
</template>
```

- [ ] **Step 2: Tester visuellement**

```bash
pnpm dev
```

Vérifier : titre géant, badges, ligne animée, blobs en background, scroll indicator.

- [ ] **Step 3: Commit**

```bash
git add components/AppCursor.vue components/TheHero.vue
git commit -m "feat: hero section with animated title and cursor"
```

---

## Chunk 3: TheSkills + TheProjects

### Task 4: Section Compétences

**Files:**
- Create: `components/TheSkills.vue`

- [ ] **Step 1: Créer TheSkills.vue**

```vue
<!-- components/TheSkills.vue -->
<script setup lang="ts">
const groups = [
  {
    label: 'Frontend',
    icon: 'i-lucide-monitor',
    color: 'primary' as const,
    skills: ['React', 'Vue.js', 'Nuxt', 'TypeScript', 'Tailwind CSS', 'CSS avancé']
  },
  {
    label: 'DevOps',
    icon: 'i-lucide-server',
    color: 'secondary' as const,
    skills: ['Docker', 'CI/CD', 'Linux', 'WireGuard', 'SWAG', 'Self-hosting', 'Nginx']
  },
  {
    label: 'IA & Outils',
    icon: 'i-lucide-brain',
    color: 'neutral' as const,
    skills: ['LLM', 'Prompt Engineering', 'AI Tools', 'Langchain', 'RAG', 'Claude API']
  }
]

// Reveal on scroll
onMounted(() => {
  const els = document.querySelectorAll('.reveal')
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })
  els.forEach(el => io.observe(el))
})
</script>

<template>
  <section id="skills" class="py-32 bg-muted/40">
    <UContainer>
      <!-- Section header -->
      <div class="mb-16 reveal">
        <p class="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-3">Stack</p>
        <h2 class="font-display text-5xl font-bold tracking-tight text-highlighted">
          Ce que je<br /><span class="text-outline">maîtrise</span>
        </h2>
      </div>

      <!-- Groups -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(group, gi) in groups"
          :key="group.label"
          class="reveal"
          :class="`delay-${gi + 1}`"
        >
          <!-- Group header -->
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

          <!-- Skill chips -->
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
```

### Task 5: Section Projets

**Files:**
- Create: `components/TheProjects.vue`

- [ ] **Step 1: Créer TheProjects.vue**

```vue
<!-- components/TheProjects.vue -->
<script setup lang="ts">
const projects = [
  {
    name: 'GeoMind',
    description: 'Application full-stack géographique. Frontend Nuxt.js, backend FastAPI, déployée sur mon homelab avec SSL automatique via SWAG.',
    tags: ['Nuxt', 'FastAPI', 'Docker', 'SWAG'],
    icon: '🌍',
    color: 'primary',
    link: null,
    github: null
  },
  {
    name: 'DiixServer',
    description: 'Homelab complet : stack media (Plex, Sonarr, Radarr), monitoring (Beszel, Gatus), VPN WireGuard, Vaultwarden, reverse proxy SWAG.',
    tags: ['Docker Compose', 'WireGuard', 'Linux', 'Self-host'],
    icon: '🖥️',
    color: 'secondary',
    link: null,
    github: null
  },
  {
    name: 'Dealbot',
    description: 'Bot Discord de surveillance de deals et alertes automatiques. Intégration APIs tierces, notifications en temps réel.',
    tags: ['Discord.js', 'Node.js', 'API'],
    icon: '🤖',
    color: 'neutral',
    link: null,
    github: null
  },
  {
    name: 'DiixHub',
    description: 'Application custom centralisée, hébergée sur DiixServer. Dashboard personnel avec accès unifié aux services.',
    tags: ['Vue', 'Nuxt', 'Self-host'],
    icon: '🗂️',
    color: 'primary',
    link: null,
    github: null
  }
]
</script>

<template>
  <section id="projects" class="py-32">
    <UContainer>
      <!-- Section header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 reveal">
        <div>
          <p class="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-3">Projets</p>
          <h2 class="font-display text-5xl font-bold tracking-tight text-highlighted">
            Ce que j'ai<br /><span class="text-gradient">construit</span>
          </h2>
        </div>
      </div>

      <!-- Projects grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(project, i) in projects"
          :key="project.name"
          class="card-gradient-border reveal group"
          :class="`delay-${i % 3 + 1}`"
        >
          <UCard
            class="h-full border border-default hover:border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            :ui="{ body: 'p-7' }"
          >
            <div class="flex flex-col h-full">
              <!-- Card header -->
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

              <!-- Name -->
              <h3 class="font-display text-xl font-bold text-highlighted mb-2 group-hover:text-primary transition-colors duration-200">
                {{ project.name }}
              </h3>

              <!-- Description -->
              <p class="text-muted font-sans text-sm leading-relaxed mb-5 flex-1">
                {{ project.description }}
              </p>

              <!-- Tags -->
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
```

- [ ] **Step 2: Tester visuellement**

```bash
pnpm dev
```

Vérifier : skills groupées, chips avec tilt hover, project cards avec border gradient hover, reveal au scroll.

- [ ] **Step 3: Commit**

```bash
git add components/TheSkills.vue components/TheProjects.vue
git commit -m "feat: skills and projects sections with scroll reveal and hover effects"
```

---

## Chunk 4: TheExperience + TheContact + polish

### Task 6: Section Expérience (Timeline)

**Files:**
- Create: `components/TheExperience.vue`

- [ ] **Step 1: Créer TheExperience.vue**

```vue
<!-- components/TheExperience.vue -->
<script setup lang="ts">
const experiences = [
  {
    period: '2023 — Aujourd\'hui',
    role: 'Développeur Frontend',
    company: 'À compléter',
    description: 'À compléter avec tes vraies expériences.',
    tags: ['React', 'Vue', 'TypeScript']
  },
  {
    period: '2021 — 2023',
    role: 'Développeur Full-Stack',
    company: 'À compléter',
    description: 'À compléter.',
    tags: ['Node.js', 'Docker', 'CI/CD']
  },
  {
    period: '2019 — 2021',
    role: 'Développeur Junior',
    company: 'À compléter',
    description: 'À compléter.',
    tags: ['JavaScript', 'HTML/CSS']
  }
]
</script>

<template>
  <section id="experience" class="py-32 bg-muted/40">
    <UContainer>
      <!-- Section header -->
      <div class="mb-16 reveal">
        <p class="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-3">Parcours</p>
        <h2 class="font-display text-5xl font-bold tracking-tight text-highlighted">
          Mon<br /><span class="text-outline">expérience</span>
        </h2>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary/50 to-transparent transform md:-translate-x-1/2" />

        <div class="space-y-12">
          <div
            v-for="(exp, i) in experiences"
            :key="i"
            class="reveal relative"
            :class="`delay-${i + 1}`"
          >
            <div
              class="md:grid md:grid-cols-2 gap-8"
              :class="i % 2 === 0 ? '' : 'direction-rtl'"
            >
              <!-- Left: period (alternating sides) -->
              <div
                class="flex items-start mb-4 md:mb-0"
                :class="i % 2 === 0 ? 'md:justify-end md:text-right md:pr-12' : 'md:order-2 md:pl-12'"
              >
                <div>
                  <span class="font-mono text-sm text-primary font-semibold">{{ exp.period }}</span>
                </div>
              </div>

              <!-- Timeline dot -->
              <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10" style="top: 4px;">
                <div class="w-3 h-3 rounded-full bg-primary ring-4 ring-default" />
              </div>

              <!-- Right: content -->
              <div
                :class="i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right md:order-1'"
              >
                <div class="card-gradient-border">
                  <UCard :ui="{ body: 'p-6' }">
                    <h3 class="font-display text-lg font-bold text-highlighted mb-1">{{ exp.role }}</h3>
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
```

### Task 7: Section Contact

**Files:**
- Create: `components/TheContact.vue`

- [ ] **Step 1: Créer TheContact.vue**

```vue
<!-- components/TheContact.vue -->
<script setup lang="ts">
const links = [
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    to: 'https://github.com',
    description: '@viktor'
  },
  {
    label: 'LinkedIn',
    icon: 'i-simple-icons-linkedin',
    to: 'https://linkedin.com',
    description: 'Viktor'
  },
  {
    label: 'Email',
    icon: 'i-lucide-mail',
    to: 'mailto:viktor@example.com',
    description: 'viktor@example.com'
  }
]
</script>

<template>
  <section id="contact" class="py-32 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.06]"
        style="background: radial-gradient(ellipse, var(--ui-color-primary-500) 0%, transparent 70%);"
      />
    </div>

    <UContainer class="relative z-10">
      <div class="max-w-2xl mx-auto text-center reveal">
        <p class="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-3">Contact</p>
        <h2 class="font-display text-5xl font-bold tracking-tight text-highlighted mb-6">
          Parlons<br /><span class="text-gradient">boulot</span>
        </h2>
        <p class="text-muted font-sans text-lg leading-relaxed mb-12">
          Un projet, une question, une idée folle à implémenter ?<br />
          Je réponds vite, je promets.
        </p>

        <!-- Contact links -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 reveal delay-1">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.to"
            target="_blank"
            rel="noopener noreferrer"
            class="card-gradient-border group w-full sm:w-auto"
            data-cursor-hover
          >
            <div class="flex items-center gap-3 px-6 py-4 rounded-lg border border-default bg-default hover:bg-muted transition-colors duration-200">
              <UIcon :name="link.icon" class="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
              <div class="text-left">
                <p class="text-sm font-semibold text-highlighted">{{ link.label }}</p>
                <p class="text-xs text-muted font-mono">{{ link.description }}</p>
              </div>
            </div>
          </a>
        </div>

        <!-- Big CTA email -->
        <UButton
          label="Envoyer un message"
          to="mailto:viktor@example.com"
          size="xl"
          icon="i-lucide-send"
          trailing
          class="font-display font-bold reveal delay-2"
        />
      </div>
    </UContainer>
  </section>
</template>
```

### Task 8: IntersectionObserver global + polish final

**Files:**
- Modify: `app.vue` — ajouter le composable reveal global

- [ ] **Step 1: Créer composable useReveal**

```ts
// composables/useReveal.ts
export function useReveal() {
  onMounted(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target) // fire once
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => io.observe(el))
  })
}
```

- [ ] **Step 2: Appeler useReveal dans pages/index.vue**

```vue
<!-- pages/index.vue -->
<script setup lang="ts">
useReveal()
</script>

<template>
  <div>
    <TheHero />
    <TheSkills />
    <TheProjects />
    <TheExperience />
    <TheContact />
  </div>
</template>
```

- [ ] **Step 3: Supprimer les onMounted IntersectionObserver des composants individuels**

Retirer le `onMounted` dans `TheSkills.vue` (il est maintenant géré globalement).

- [ ] **Step 4: Test build SSG**

```bash
pnpm generate
```

Vérifier : pas d'erreurs, dossier `.output/public` généré.

- [ ] **Step 5: Preview du build**

```bash
pnpm preview
```

Vérifier toutes les sections, animations, effets hover, curseur custom.

- [ ] **Step 6: Commit final**

```bash
git add -A
git commit -m "feat: complete portfolio with experience timeline, contact, scroll reveal, and CSS effects"
```

---

## Notes de personnalisation post-implémentation

Une fois le site qui tourne, Viktor devra :

1. **Mettre à jour `TheExperience.vue`** — remplacer les placeholders par ses vraies expériences
2. **Mettre à jour `TheContact.vue`** — son vrai email, GitHub URL, LinkedIn URL
3. **Mettre à jour `TheProjects.vue`** — ajouter les vrais liens GitHub/demo de ses projets
4. **Déployer sur DiixServer** via SWAG — `nuxt generate` → copier `.output/public` dans le volume du conteneur Nginx ou utiliser un conteneur statique

## Effets CSS résumé (anti-AI-slop checklist)

- [x] Grain SVG overlay sur le hero
- [x] Titre géant avec text-outline + text-gradient alternés
- [x] Ligne décorative animée `draw-line`
- [x] Scroll dots pattern SVG en arrière-plan
- [x] Skill chips avec `chip-tilt` (transform 3D au hover)
- [x] Project cards avec `card-gradient-border` (border gradient au hover)
- [x] Scroll-triggered reveal via IntersectionObserver
- [x] Timeline alternée avec ligne verticale gradient
- [x] Curseur custom mix-blend-difference
- [x] Nav sticky avec transition border/backdrop-blur au scroll
- [x] Scrollbar custom violet
- [x] Police Syne (display atypique) + DM Sans (body propre)
