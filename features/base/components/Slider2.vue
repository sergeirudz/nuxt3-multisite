<template>
  <Galleria

            :value="images" :numVisible="5" :showThumbnails="false"
            :showIndicators="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="true"
            :indicatorsPosition="position"
            :pt="{
              root: {
                class: 'slider-galleria-root'
              },
              itemContainer: {
                class: 'slider-galleria-itemContainer'
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
                class: 'slider-galleria-indicators'
              },
              indicator: {
                class: 'slider-galleria-indicator'
              }
            }">
    <template #item="slotProps">
      <img :src="slotProps.item.itemImageSrc" style="width: 100%; display: block" />
    </template>
    <template #caption="slotProps">
      <h2 class="text-4xl font-bold">{{ slotProps.item.title }}</h2>
      <p class="text-base">{{ slotProps.item.description }}</p>
    </template>
    <template #indicator>
      <button class="" type="">
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

.slider-galleria-indicators::before
  pointer-events: all;
  content: attr(data-before) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M12 0C5.37097 0 0 5.37097 0 12C0 18.629 5.37097 24 12 24C18.629 24 24 18.629 24 12C24 5.37097 18.629 0 12 0ZM11.2258 15.871C11.2258 16.2968 10.8774 16.6452 10.4516 16.6452H8.12903C7.70323 16.6452 7.35484 16.2968 7.35484 15.871V8.12903C7.35484 7.70323 7.70323 7.35484 8.12903 7.35484H10.4516C10.8774 7.35484 11.2258 7.70323 11.2258 8.12903V15.871ZM16.6452 15.871C16.6452 16.2968 16.2968 16.6452 15.871 16.6452H13.5484C13.1226 16.6452 12.7742 16.2968 12.7742 15.871V8.12903C12.7742 7.70323 13.1226 7.35484 13.5484 7.35484H15.871C16.2968 7.35484 16.6452 7.70323 16.6452 8.12903V15.871Z' fill='%2331363D'/%3E%3C/svg%3E");
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0, 133%);
  color: white;
  cursor: pointer;
  pointer-events:auto;

.slider-galleria-indicator
  display: flex
  margin: 0 !important
  & > button
    height: 24px !important
    width: 24px !important
    background: theme('colors.gray.300') !important
  &.p-highlight
    & > button
      background: theme('colors.primary.500') !important



.slider-galleria-caption
  position: inherit !important
  max-width: 480px
  background: theme('colors.gray.100') !important
  color: theme('colors.black') !important
  padding: 0 2rem !important
  @apply flex justify-center align-middle flex-col gap-4;

</style>

<script setup>
import { ref } from "vue";

function handleClickPause () {
  
}

const images = ref([
  {
    itemImageSrc: 'https://picsum.photos/id/1/800/544',
    title: 'title title title title title title title title ',
    description: 'description description description description description description description description description description description description description description description description description description description description description description description description description description description description ',
  },
  {
    itemImageSrc: 'https://picsum.photos/id/2/800/544',
    title: 'title title title title title title title title title title title title title title title title ',
    description: 'description description description description description description description description description description description description description description ',
  },
  {
    itemImageSrc: 'https://picsum.photos/id/3/800/544',
    title: 'title title title title title title title title ',
    description: 'description description description description description description description ',
  },
  {
    itemImageSrc: 'https://picsum.photos/id/4/800/544',
    title: 'title title title title title title title title title title title title title title title title ',
    description: 'description description description description description description description description description description description description description description ',
  },
]);

const inside = ref(false);
const position = ref('bottom');
const positionOptions = ref([
  {
    label: 'Bottom',
    value: 'bottom'
  },
  {
    label: 'Top',
    value: 'top'
  },
  {
    label: 'Left',
    value: 'left'
  },
  {
    label: 'Right',
    value: 'right'
  }
]);

</script>
