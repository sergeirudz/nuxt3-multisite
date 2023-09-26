<template>
    <NuxtLayout :regions="fetchedAllRegions">
        <template #header>
            <h1 class="text-4xl text-primary-500 font-bold my-4">Kontaktid</h1>
            <p class="text-base">Amet ut enim curabitur ac erat. Neque porta tincidunt enim eu. Sit id eu nulla risus congue
                vulputate auctor
                ridiculus id. Nunc risus vulputate ultricies ante volutpat massa lacus. Condimentum risus tempor morbi
                curabitur pellentesque. Aliquet in velit id facilisis. Ac blandit mollis in ac purus nisl amet.</p>
        </template>
        <template #aside>
            <ContactsPanelMenu :data="fetchedAllRegions" />
        </template>
        <template #contacts>

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

</script>