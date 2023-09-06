// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  extends: [
    // '../../features/config',
    // '../../features/news',
    // '../../features/frontpage',
    '../example1'
  ],
})
