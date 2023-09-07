// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss',  '@nuxtjs/i18n',],
  // tailwindcss: {
  //   // tailwindcss Options https://tailwindcss.nuxtjs.org/tailwind/config
  // },
  build: {
    transpile: ['nuxt', 'primevue']
  },
  // primevue: {
  //   config: {
  //     // Set global config
  //   }
  // },
  css: [
    // 'primevue/resources/primevue.css',
    "primevue/resources/themes/lara-light-blue/theme.css"

  ],
  devtools: { enabled: false },
  i18n: {
    // detectBrowserLanguage: false, // https://v8.i18n.nuxtjs.org/guide/browser-language-detection


    customRoutes: 'config',   // disable custom route with page components
    pages: {
      'news/index': {
        en: '/news',
        et: '/uudised'
      },
    },

    defaultLocale: 'et',
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en",
        dir: "ltr",
        file: "en.ts",
      },
      {
        code: "et",
        name: "Eesti",
        iso: "et",
        dir: "ltr",
        file: "et.ts",
      },
    ],
    lazy: true,
    langDir: "locale",
    strategy: 'prefix_except_default',
    vueI18n: './i18n.config.ts', // if you are using custom path, default
  }
})
