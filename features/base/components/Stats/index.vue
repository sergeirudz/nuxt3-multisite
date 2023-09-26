<template>
  <section class="bg-gray-200">
    <div class="container py-8">
      <div class="flex flex-row justify-between mb-4">
        <h2>{{ stats.heading }}</h2>
        <span>Viimati uuendatud: {{ stats.lastModified }}</span>
      </div>
      <Carousel :value="stats.stats" :numVisible="4" :numScroll="1" :showIndicators="false"
                :pt="{
                  root: {
                    class: 'stats-root'
                  },
                  itemscontainer: {
                    class: 'gap-2'
                  },
                  item: {
                    class: 'bg-white'
                  },
                  previousButton: {
                    class: 'stats-previousButton'
                  },
                  nextButton: {
                    class: 'stats-nextButton'
                  }
                }">
        <template #item="slotProps">
          <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
            <div>
              <h4 class="mb-1">{{ slotProps.data.name }}</h4>
              <h6 class="mt-0 mb-3">{{ slotProps.data.value }}</h6>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup lang="ts">
import Carousel from 'primevue/carousel'

const props = defineProps<{
  stats: {
    stats: Record<any, any>[],
    heading?: string,
    lastModified: string,
  },
}>()

const { stats } = toRefs(props)


</script>
<style lang="stylus">

.stats-root
  position relative;
  padding-bottom: 46px;

.stats-previousButton, .stats-nextButton
  position absolute !important;
  bottom: 0;

.stats-previousButton
  left 0;

.stats-nextButton
  left: 30px;
</style>
