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
