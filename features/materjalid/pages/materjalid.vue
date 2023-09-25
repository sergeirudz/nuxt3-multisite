<template>
    <div class="flex flex-col gap-10">
        <HeroWithNav :menu="pages" />
        <Accordion :listOfTabs="tabs">
            <template #0>
                First slot
            </template>
            <template #1>
                Second slot
            </template>
            <template #2>
                Third slot
            </template>
        </Accordion>
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

const tabs = [
    { header: 'Title 1' },
    { header: 'Title 2' },
    { header: 'Title 3' }
];

</script>