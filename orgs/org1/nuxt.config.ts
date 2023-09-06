// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '../../features/config',
    '../../features/frontpage',
  ],
  devtools: { enabled: false },
})
