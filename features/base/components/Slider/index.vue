<template>
  <Galleria
            :value="images" :numVisible="5" :showThumbnails="false"
            :showIndicators="true" :changeItemOnIndicatorHover="false" :showIndicatorsOnItem="true"
            :transitionInterval="33000"
            :circular="true"
            :autoPlay="autoPlay"
            :pt="{
              root: {
                class: 'slider-galleria-root'
              },
              itemContainer: {
                class: `slider-galleria-itemContainer ${textPosition === SliderText.LEFT ? 'flex-row-reverse' : 'flex-row'}`
              },
              itemWrapper: {
                class: 'slider-galleria-itemWrapper',
                style: 'max-height: 100%;'
              },
              content: {
                class: 'slider-galleria-content'
              },
              item: {
                class: 'slider-galleria-item'
              },
              caption: {
                class: 'slider-galleria-caption'
              },
              indicators: {
                class: `slider-galleria-indicators ${textPosition === SliderText.LEFT ? 'slider-galleria-indicators-left' : null}`
              },
              indicator: {
                class: 'slider-galleria-indicator'
              }
            }">
    <template #item="slotProps">
      <NuxtLink :to="slotProps.item.href" class="h-full w-full">
        <img :src="slotProps.item.imageSrc" class="w-full h-full object-cover" />
      </NuxtLink>
    </template>
    <template #caption="slotProps">
      <NuxtLink :to="slotProps.item.href" class="h-full w-full">
        <h2 class="text-4xl font-bold">{{ slotProps.item.title }}</h2>
        <p class="text-base">{{ slotProps.item.description }}</p>
      </NuxtLink>
    </template>
    <template #indicator="slotProps">
      <button v-if="slotProps.index === 0" class="transform -translate-x-3 indicator-control"
              @click="autoPlay = !autoPlay">
        <svg v-if="autoPlay === true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
             fill="none">
          <path d="M12 0C5.37097 0 0 5.37097 0 12C0 18.629 5.37097 24 12 24C18.629 24 24 18.629 24 12C24 5.37097 18.629 0 12 0ZM11.2258 15.871C11.2258 16.2968 10.8774 16.6452 10.4516 16.6452H8.12903C7.70323 16.6452 7.35484 16.2968 7.35484 15.871V8.12903C7.35484 7.70323 7.70323 7.35484 8.12903 7.35484H10.4516C10.8774 7.35484 11.2258 7.70323 11.2258 8.12903V15.871ZM16.6452 15.871C16.6452 16.2968 16.2968 16.6452 15.871 16.6452H13.5484C13.1226 16.6452 12.7742 16.2968 12.7742 15.871V8.12903C12.7742 7.70323 13.1226 7.35484 13.5484 7.35484H15.871C16.2968 7.35484 16.6452 7.70323 16.6452 8.12903V15.871Z"
                fill="#31363D" />
        </svg>
        <svg v-else fill="#31363D" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 408.221 408.221" xml:space="preserve">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path
                      d="M204.11,0C91.388,0,0,91.388,0,204.111c0,112.725,91.388,204.11,204.11,204.11c112.729,0,204.11-91.385,204.11-204.11 C408.221,91.388,316.839,0,204.11,0z M286.547,229.971l-126.368,72.471c-17.003,9.75-30.781,1.763-30.781-17.834V140.012 c0-19.602,13.777-27.575,30.781-17.827l126.368,72.466C303.551,204.403,303.551,220.217,286.547,229.971z">
                </path>
              </g>
            </g>
          </g>
        </svg>
      </button>
      <button class="indicator-item">
        <span class=""></span>
      </button>
    </template>
  </Galleria>
</template>

<style lang="stylus">
$slider-height = 544px

.slider-galleria-root
  height: $slider-height !important

.slider-galleria-itemContainer
  display: grid
  grid-template-columns: 1fr 1fr

.slider-galleria-content
  height: $slider-height !important

.slider-galleria-item
  & > img
    height: $slider-height !important

.slider-galleria-indicators
  background: 0 !important
  right: 20%!important
  left: 80%!important
  width: fit-content !important
  padding: 40px !important
  display: flex !important
  gap: 14px !important
  transform: translateX(-20%) !important
.slider-galleria-indicators-left
  left: 10%!important



.slider-galleria-indicator
  display: flex
  margin: 0 !important
  & > button.indicator-item, button.indicator-control
    height: 24px !important
    width: 24px !important
    background: theme('colors.gray.300') !important
  &.p-highlight
    & > button.indicator-item
      background: theme('colors.primary.500') !important



.slider-galleria-caption
    position: inherit !important
    max-width: 480px
    background: theme('colors.gray.100') !important
    color: theme('colors.black') !important
    padding: 0 2rem !important
    a
      @apply flex justify-center align-middle flex-col gap-4;

</style>

<script setup lang="ts">
import Galleria from 'primevue/galleria'

interface Image {
  imageSrc: string
  title: string
  description: string
  href: string
}
enum SliderText {
  LEFT = 'left',
  RIGHT = 'right'
}
enum Type {
  ONE,
  TWO
}
const props = defineProps<{
  images: Image[],
  textPosition?: SliderText,
  type?: Type
}>()
const { images, textPosition } = toRefs(props)

const autoPlay = useState<boolean>('sliderAutoplay', () => true)

/*
TODO:
pause/play does not work
type 1,2
height
hover pause on/off
*/

</script>
