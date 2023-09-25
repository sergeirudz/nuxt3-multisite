<template>
  <section v-if="type === BannerType.FULL_WIDTH" class="p-0 flex justify-center align-middle">
    <img :src="image" alt="" />
  </section>


  <section v-if="type === BannerType.SMALL" class="container py-5 flex justify-center align-middle">
    <img :src="image" alt="" />
  </section>
</template>


<script setup lang="ts">
enum BannerType {
  FULL_WIDTH = 'full-width',
  SMALL = 'small'
}

const props = defineProps({
  type: {
    type: String as PropType<BannerType>,
    required: false
  },
  image: {
    type: String as PropType<string>,
    required: false
  }
})

const { type, image } = props

</script>
