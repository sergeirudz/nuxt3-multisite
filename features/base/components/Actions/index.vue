<template>
  <section class="container justify-center align-middle" :class="`grid grid-cols-4 gap-4 content-center`">
    <div v-for="action in actions" class="flex flex-col gap-6 p-6 bg-gray-100 w-72">
      <div class="flex flex-col gap-4 w-full justify-start">
        <img src="https://placehold.co/48x48" class="h-8 w-8" alt="" />
        <h3>{{ action.name }}</h3>
      </div>
      <ul class="flex flex-col gap-3">
        <li v-for="item in action.items"><nuxt-link :to="item.route">{{ item.name }}</nuxt-link></li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  actions: Record<any, any>[]
}>()
const { actions } = props;
</script>
