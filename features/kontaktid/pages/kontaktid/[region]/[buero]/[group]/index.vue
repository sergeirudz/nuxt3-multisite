<template>
    <NuxtLayout :regions="fetchedAllRegions">
        <template #header>
            <h1>Kontaktid</h1>
            <p>RANDOM SISU</p>
        </template>
        <template #aside>
            SIDE PANEL MENU
        </template>
        <template #contacts>
            CONTACTS HERE
        </template>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

definePageMeta({
    layout: 'kontaktid'
})

const fetchedAllRegions = useFetchContacts()
const fetchedAllRegionGroups = useFetchContacts(route.path.split("/")[2])
</script>