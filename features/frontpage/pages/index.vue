<template>
    <div class="flex flex-col gap-8">
        <Slider2 />
        <Actions :actions="actions" />
        <Banner type="small" image="https://placehold.co/1440x567" />
        <News :news="news" />
        <Stats :stats="stats" />
    </div>
</template>

<script setup>
const actions = useFetchActions()
const news = useFetchAllNews()
const stats = useFetchStats()
</script>