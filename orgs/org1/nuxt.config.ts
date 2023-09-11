// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '../../features/config',
    '../../features/frontpage',
    '../../features/news',
  ],
  devtools: { enabled: false },
  css: [
    '~/assets/styles/common/main.styl'
  ]
})
