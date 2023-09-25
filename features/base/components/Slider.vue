<template>
  <Carousel :value="products" :numVisible="1" :numScroll="3" circular :showNavigators="false"
            :showIndicators="true"
            :pt="{
              root: {
                class: '',
                style: 'height: 540px;',
              },
              content: {
                class: 'relative'
              },
              indicators: {
                class: ' bottom-0 right-0 flex gap-x-2',
                style: 'width: 40%;'
              },
              indicator: {
                class: ''
              },
              indicatorButton: {
                class: '',
                style: '',
              }
            }">
    <template #item="slotProps">
      <div class="flex flex-row">
        <div class="">
          <img :src="slotProps.data.itemImageSrc" class="" />
        </div>
        <div class="py-3 px-4 w-1/3 m-auto">
          <h2 class="text-xl fb-5">Mugavaim viis taotleda dokumenti</h2>
          <small class="">{{ slotProps.data.description }}</small>
        </div>
      </div>
    </template>
  </Carousel>
</template>

<script setup>
import { ref, onMounted } from "vue";



const products = ref([
  {
    itemImageSrc: 'https://picsum.photos/id/1/800/400',
    title: 'title title title title title title title title ',
    description: 'description description description description description description description description description description description description description description description description description description description description description description description description description description description description ',
  },
  {
    itemImageSrc: 'https://picsum.photos/id/2/800/400',
    title: 'title title title title title title title title title title title title title title title title ',
    description: 'description description description description description description description description description description description description description description ',
  },
  {
    itemImageSrc: 'https://picsum.photos/id/3/800/400',
    title: 'title title title title title title title title ',
    description: 'description description description description description description description ',
  },
  {
    itemImageSrc: 'https://picsum.photos/id/4/800/400',
    title: 'title title title title title title title title title title title title title title title title ',
    description: 'description description description description description description description description description description description description description description ',
  },
]);
const responsiveOptions = ref([
  {
    breakpoint: '991px',
    numVisible: 4
  },
  {
    breakpoint: '767px',
    numVisible: 3
  },
  {
    breakpoint: '575px',
    numVisible: 1
  }
]);
</script>

<styles lang="stylus">

.p-carousel-indicator
  margin: 0 !important
  button[data-pc-section="indicatorbutton"]
    height: 20px !important
    width: 20px !important
    border-radius: 50% !important

.p-carousel-indicator.p-highlight
  button[data-pc-section="indicatorbutton"]
    background-color: theme('colors.primary.500') !important

</styles>
