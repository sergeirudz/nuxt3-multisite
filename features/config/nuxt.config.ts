// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    // tailwindcss Options https://tailwindcss.nuxtjs.org/tailwind/config
  },
  build: {
    transpile: ['nuxt', 'primevue']
  },
  primevue: {
    config: {
      // Set global config
    }
  },
  css: [
    // 'primevue/resources/primevue.css',
    "primevue/resources/themes/lara-light-blue/theme.css"

  ],
  devtools: { enabled: true }
})
