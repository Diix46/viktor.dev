<script setup lang="ts">
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
      <div
        class="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style="background: radial-gradient(circle, var(--ui-color-primary-500) 0%, transparent 70%);"
      />
      <div
        class="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-[0.05]"
        style="background: radial-gradient(circle, var(--ui-color-secondary-500) 0%, transparent 70%);"
      />
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
            style="width: 0; animation: draw-line 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;"
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
