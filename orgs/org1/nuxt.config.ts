// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    // '../../features/config',
    // '../../features/news',
    '../../features/frontpage',
    '../../features/config2' 
  ],
  devtools: { enabled: false },
})
