<template>
    <div class="flex flex-col gap-10">
        <HeroWithNav :menu="pages" />
        <!-- <Accordion>
            <template #tabs>
                <AccordionTab header="HEADER1">
                    <h1>CONTENT 1</h1>
                </AccordionTab>
            </template>
        </Accordion> -->
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
    { title: 'Title 1' },
    { title: 'Title 2' },
    { title: 'Title 3' }
];

</script>