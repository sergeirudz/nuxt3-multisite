// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '../../features/config',
    // '../../features/news',
    // '../../features/frontpage',
    // '../example1'
  ],
  devtools: { enabled: false },  
  i18n: {
    baseUrl: "http://localhost:3000",
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
        name: "Estonian",
        iso: "et",
        dir: "ltr",
        file: "et.ts",
      },
    ],
    lazy: true,
    langDir: "lang",
    strategy: "prefix_except_default",
    defaultLocale: "et",
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
  },
})
