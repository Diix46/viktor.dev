// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Viktor Postupak — Développeur Frontend & DevOps',
      meta: [
        { name: 'description', content: 'Portfolio de Viktor Postupak — Développeur Frontend Vue/Nuxt, DevOps et passionné d\'IA. Basé à Toulouse.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  fonts: {
    families: [
      { name: 'Syne', weights: [400, 700, 800] },
      { name: 'DM Sans', weights: [400, 500, 600] }
    ]
  },

  dir: {
    public: 'app/public'
  },

  nitro: {
    preset: 'static'
  },

  ssr: true,

  compatibilityDate: '2025-01-01'
})
