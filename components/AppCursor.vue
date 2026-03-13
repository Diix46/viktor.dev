<script setup lang="ts">
const x = ref(0)
const y = ref(0)
const visible = ref(false)
const hovered = ref(false)

// Disable on touch devices and respect reduced motion
const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

onMounted(() => {
  if (isTouch) return

  window.addEventListener('mousemove', (e) => {
    x.value = e.clientX
    y.value = e.clientY
    visible.value = true
  }, { passive: true })

  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement
    hovered.value = !!(target.closest('a, button, [data-cursor-hover]'))
  }, { passive: true })
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="!isTouch"
      class="pointer-events-none fixed z-[9999] mix-blend-difference"
      :class="prefersReducedMotion ? '' : 'transition-all duration-100 ease-out'"
      :style="{
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -50%)',
        opacity: visible ? 1 : 0
      }"
    >
      <div
        :class="[
          'rounded-full bg-white',
          prefersReducedMotion ? '' : 'transition-all duration-200',
          hovered ? 'w-8 h-8 opacity-80' : 'w-3 h-3 opacity-100'
        ]"
      />
    </div>
  </Teleport>
</template>
