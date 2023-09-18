<template>
  <div class="flex justify-center container">
    <Galleria class="slider" :value="images" :responsiveOptions="responsiveOptions" :numVisible="5"
              containerStyle="max-width: 640px"
              :showThumbnails="false" :showIndicators="true"
              :showItemNavigators="true"
              :showIndicatorsOnItem="true">

      <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
      </template>
    </Galleria>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";



const images = ref([
  {
    itemImageSrc: 'https://picsum.photos/id/1/800/400',
  },
  {
    itemImageSrc: 'https://picsum.photos/id/2/800/400',
  },
  {
    itemImageSrc: 'https://picsum.photos/id/3/800/400',
  },
  {
    itemImageSrc: 'https://picsum.photos/id/4/800/400',
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
.container {
  border: 6px solid theme('colors.warning.500');
  }

.p-galleria-indicators.p-reset {
  background: red;
}

::v-deep([data-pc-selection="indicators"]) {
  background: red !important;
}

.slider
  .p-galleria-indicators.p-reset
    background: red !important;

    :deep(.p-panel .p-panel-header) {
    background-color: var(--teal-500);
    border-color: var(--teal-500);
    color: #ffffff;
}

:deep(.p-galleria-indicators) {
  background: red !important;
}
</styles>
