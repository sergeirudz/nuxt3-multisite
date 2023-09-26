// https://primevue.org/installation/#nuxtintegration
import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  // nuxtApp.vueApp.component('Button', Button)
  // nuxtApp.vueApp.component('TabMenu', TabMenu)
  // nuxtApp.vueApp.component('PanelMenu', PanelMenu)
  // nuxtApp.vueApp.component('Menubar', Menubar)
  // nuxtApp.vueApp.component('InputText', InputText)
  // nuxtApp.vueApp.component('Breadcrumb', Breadcrumb)
  // nuxtApp.vueApp.component('Image', Image)
})
