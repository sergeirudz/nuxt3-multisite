<template>
  <section class="container">
    <div class="grid grid-cols-2">
      <div class="">
        <h3>{{ featuredNews.name }}</h3>
        <small>{{ featuredNews.date }}</small>
        <p class="mt-8">{{ featuredNews.description }}</p>
      </div>
      <div class="flex flex-col gap-3">
        <div v-for="news in otherNews" class="flex flex-row gap-4">
          <p>{{ news.date }}</p>
          <h4>{{ news.name }}</h4>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-end mt-8 w-full">
      <button class="ml-auto">All news -></button>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  news: {
    type: Promise<[]>,
    required: true,
  },
});

const news = ref([]);


onMounted(async () => {
  try {
    const newsData = await props.news;
    news.value = newsData;
  } catch (error) {
    console.error('Error fetching news:', error);
  }
});

const featuredNews = ref([]);
const otherNews = ref([]);

watch(news, (newValue) => {
  if (Array.isArray(newValue)) {
    featuredNews.value = newValue.find((item) => item.featured === true);
    otherNews.value = newValue.filter((item) => item.featured !== true);
  }
});
</script>
