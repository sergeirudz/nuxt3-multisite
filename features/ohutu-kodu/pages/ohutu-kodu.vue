<template>
    <div class="flex flex-col gap-10">
        <HeroWithNav :menu="pages" />
        <Banner type="full-width" image="https://placehold.co/1440x567" />
        <ImageCards :cards="IMAGE_CARDS" background="bg-gray-100" />
    </div>
</template>

<script setup>

const pages = {
    name: 'Ohutu Kodu',
    subpages: [
        {
            name: 'sub page 1',
            route: 'sub-page-1'
        },
        {
            name: 'sub page 2',
            route: 'sub-page-2'
        },
        {
            name: 'sub page 3',
            route: 'sub-page-3'
        },
        {
            name: 'sub page 4',
            route: 'sub-page-4'
        },
        {
            name: 'sub page 5',
            route: 'sub-page-5'
        },
    ]
}


const IMAGE_CARDS = [
    {
        title: 'Title1 goes here',
        path: '#',
        image: 'https://placehold.co/588x500'
    },
    {
        title: 'Title2 goes here',
        path: '#',
        image: 'https://placehold.co/588x500'
    },
    {
        title: 'Title3 goes here',
        path: '#',
        image: 'https://placehold.co/588x500'
    },
    {
        title: 'Title4 goes here',
        path: '#',
        image: 'https://placehold.co/588x500'
    },
]

</script>