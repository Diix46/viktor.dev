<script setup lang="ts">
const props = defineProps<{
  images: { src: string; alt: string }[]
}>()

const emit = defineEmits<{
  openLightbox: [src: string, alt: string, images: string[], index: number]
}>()

const index = ref(0)
const paused = ref(false)

function prev() {
  index.value = (index.value - 1 + props.images.length) % props.images.length
}
function next() {
  index.value = (index.value + 1) % props.images.length
}

let timer: ReturnType<typeof setInterval>

function startAutoplay() {
  timer = setInterval(() => {
    if (!paused.value) next()
  }, 3000)
}

onMounted(() => startAutoplay())
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="h-44 relative overflow-hidden bg-zinc-900 group/carousel" @mouseenter="paused = true" @mouseleave="paused = false">
    <!-- Images -->
    <Transition name="carousel-fade" mode="out-in">
      <img
        :key="index"
        :src="images[index].src"
        :alt="images[index].alt"
        class="absolute inset-0 w-full h-full object-cover cursor-zoom-in"
        @click="emit('openLightbox', images[index].src, images[index].alt, images.map(i => i.src), index)"
      />
    </Transition>

    <!-- Prev -->
    <button
      class="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 hover:bg-black/70 z-10"
      @click.stop="prev"
      aria-label="Précédent"
    >
      <UIcon name="i-lucide-chevron-left" class="w-4 h-4 text-white" />
    </button>

    <!-- Next -->
    <button
      class="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 hover:bg-black/70 z-10"
      @click.stop="next"
      aria-label="Suivant"
    >
      <UIcon name="i-lucide-chevron-right" class="w-4 h-4 text-white" />
    </button>

    <!-- Dots — toujours visibles -->
    <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
      <button
        v-for="(_, ci) in images"
        :key="ci"
        class="rounded-full transition-all duration-200"
        :class="ci === index ? 'w-3 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40'"
        @click.stop="index = ci"
        :aria-label="`Photo ${ci + 1}`"
      />
    </div>

    <!-- Bottom fade -->
    <div class="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
  </div>
</template>

<style scoped>
.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity 0.3s ease;
}
.carousel-fade-enter-from,
.carousel-fade-leave-to {
  opacity: 0;
}
</style>
