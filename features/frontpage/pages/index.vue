<template>
    <div class="flex flex-col gap-8">
        <Slider :images="SLIDER_IMAGES" textPosition="right" />
        <Actions :actions="actions" />
        <Banner type="small" image="https://placehold.co/1440x567" />
        <News :news="news" />
        <Stats :stats="stats" />
    </div>
</template>

<script setup>

const SLIDER_IMAGES = [
    {
        imageSrc: 'https://picsum.photos/id/1/800/544',
        title: 'title title title title title title title title ',
        description: 'description description description description description description description description description description description description description description description description description description description description description description description description description description description description ',
        href: '#',
    },
    {
        imageSrc: 'https://picsum.photos/id/2/800/544',
        title: 'title title title title title title title title title title title title title title title title ',
        description: 'description description description description description description description description description description description description description description ',
        href: '#',
    },
    {
        imageSrc: 'https://picsum.photos/id/3/800/544',
        title: 'title title title title title title title title ',
        description: 'description description description description description description description ',
        href: '#',
    },
    {
        imageSrc: 'https://picsum.photos/id/4/800/544',
        title: 'title title title title title title title title title title title title title title title title ',
        description: 'description description description description description description description description description description description description description description ',
        href: '#',
    },
]

const actions = useFetchActions()
const news = useFetchAllNews()
const stats = useFetchStats()
</script>