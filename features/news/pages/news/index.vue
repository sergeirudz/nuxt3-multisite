<script setup lang="ts">
const route = useRoute()
const fetchedNews = await useFetchAllNews()
const response = fetchedNews.value.articles




defineI18nRoute({
    paths: {
        en: '/news',
        et: '/uudised',
    }
})

</script>

<template>
    <div class="container">
        <h1>{{ $t("news") }}</h1>
        <div v-for="item in response" :key="item.id" class="card">
            <h2>{{ item.title }}</h2>
            <small>{{ item.description }}</small>
        </div>
    </div>
</template>

<style>
.container {
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    text-align: center;
    margin-top: 1rem;
}

.card {
    border: 1px solid red;
    margin: 1rem;
    padding: 1rem
}
</style>