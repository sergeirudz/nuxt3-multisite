import { KontaktidKontaktCard } from './../../features/base/.nuxt/components.d';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '../../features/base',
    '../../features/frontpage',
    '../../features/news',
    '../../features/kontaktid',
    '../../features/career',
    '../../features/ohutu-kodu',
    '../../features/materjalid',
  ],
  devtools: { enabled: false },
  css: ['~/assets/styles/main.styl'],
});
