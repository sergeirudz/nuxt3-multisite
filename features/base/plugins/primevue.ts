// https://primevue.org/installation/#nuxtintegration
import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Galleria from 'primevue/galleria'
import Carousel from 'primevue/carousel'
import TabMenu from 'primevue/tabmenu'
import TabPanel from 'primevue/tabpanel'
import PanelMenu from 'primevue/panelmenu'
import Menubar from 'primevue/menubar'
import InputText from 'primevue/inputtext'
import Breadcrumb from 'primevue/breadcrumb'
import Image from 'primevue/image'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Galleria', Galleria)
  nuxtApp.vueApp.component('Carousel', Carousel)
  nuxtApp.vueApp.component('TabMenu', TabMenu)
  nuxtApp.vueApp.component('TabPanel', TabPanel)
  nuxtApp.vueApp.component('PanelMenu', PanelMenu)
  nuxtApp.vueApp.component('Menubar', Menubar)
  nuxtApp.vueApp.component('InputText', InputText)
  nuxtApp.vueApp.component('Breadcrumb', Breadcrumb)
  nuxtApp.vueApp.component('Image', Image)
  nuxtApp.vueApp.component('Accordion', Accordion)
  nuxtApp.vueApp.component('AccordionTab', AccordionTab)
})
