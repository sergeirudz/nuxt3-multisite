// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '../../features/config',
    // '../../features/config2'
    
    // '../example1', 
    // '../../features/news',
    '../../features/frontpage',
  ],
  devtools: { enabled: false },
})
