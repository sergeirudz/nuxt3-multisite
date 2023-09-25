<!-- :class="`container grid grid-cols-${cards.length > 1 ? '2' : '1'} justify-items-stretch place-items-center py-20 grid-rows-`"> -->
<template>
  <section :class="`${background}`">
    <div
         :class="`container grid grid-cols-[500px_500px] justify-items-stretch py-20 place-content-center`">
      <NuxtLink
                v-for="card in cards" to="/"
                class="mb-4 bg-cover bg-center h-96 flex justify-start items-end py-10 px-8 flex flex-col gap-4"
                :style="{ backgroundImage: `url(${card.image})` }">
        <h3>{{ card.title }}</h3>
        <hr class="color-primary-500 h-2 w-20">
      </NuxtLink>
      <!-- <img :src="card.image" alt="" class="image w-full h-full absolute" /> -->
    </div>
  </section>
</template>

<script lang="ts" setup>

interface ImageCardsProps {
  title: string
  path: string
  image: string
}

const props = defineProps({
  cards: {
    type: Array<ImageCardsProps>,
    required: true
  },
  background: {
    type: String,
    default: 'bg-white',
    required: false
  }
})

const { cards, background } = toRefs(props)
</script>

<style lang="stylus" scoped>
a
  margin 0

</style>

<!-- https://primevue.org/card/ -->
