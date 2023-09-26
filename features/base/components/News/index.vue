<template>
  <section class="container">
    <div class="grid grid-cols-2">
      <div class="">
        <h3>{{ featured.name }}</h3>
        <small>{{ featured.date }}</small>
        <p class="mt-8">{{ featured.description }}</p>
      </div>
      <div class="flex flex-col gap-3">
        <div v-for="newsItem in other" class="flex flex-row gap-4">
          <p>{{ newsItem.date }}</p>
          <h4>{{ newsItem.name }}</h4>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-end mt-8 w-full">
      <NuxtLink to="#" class="ml-auto">All news -></NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">

const props = defineProps<{
  news: Record<any, any>[];
}>()

const { news } = toRefs(props);


const featuredNews = toRef(computed(async () => {
  const newsData = await news.value;
  return await newsData.find((item) => item.featured === true) || {};
}))


const otherNews = computed(async () => {
  const newsData = await news.value;
  return await newsData.filter((item) => item.featured !== true);
});

const featured = await featuredNews.value
const other = await otherNews.value
</script>
