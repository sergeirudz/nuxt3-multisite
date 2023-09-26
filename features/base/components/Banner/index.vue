<template>
  <section v-if="type === BannerType.FULL_WIDTH" class="p-0 flex justify-center align-middle">
    <img :src="image" alt="" />
  </section>


  <section v-if="type === BannerType.SMALL"
           :class="`container py-5 flex justify-center align-middle w-fit ${height}`">
    <img :src="image" alt="" class="h-full w-full object-cover" />
  </section>
</template>


<script setup lang="ts">
enum BannerType {
  FULL_WIDTH = 'full-width',
  SMALL = 'small'
}

const props = defineProps<{
  type: BannerType,
  image: string,
  height: string
}>()

const { type, image } = props

</script>
