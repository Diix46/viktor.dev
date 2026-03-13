export function useReveal() {
  onMounted(() => {
    const els = document.querySelectorAll('.reveal')

    // Respect prefers-reduced-motion — show all immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach(el => el.classList.add('visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => io.observe(el))

    onUnmounted(() => io.disconnect())
  })
}
