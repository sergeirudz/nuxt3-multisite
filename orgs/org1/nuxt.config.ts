// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '../../features/config',
    '../../features/news'
  ],
  devtools: { enabled: true }
})
