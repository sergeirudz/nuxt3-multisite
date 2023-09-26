<template>
    <div class="card">
        <TabMenu v-model:activeIndex="active" :model="items">
            <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)"
                       @keydown.enter.space="($event) => routerProps.navigate($event)">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
            </template>
        </TabMenu>
        <router-view />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import TabMenu from 'primevue/tabmenu';
const router = useRouter();
const route = useRoute();

const actvie = ref(0);
const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        route: '/teenindused'
    },
    {
        label: 'Calendar',
        icon: 'pi pi-fw pi-calendar',
        route: '/teenindused/calendar'
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        route: '/teenindused/edit'
    },
    {
        label: 'Documentation',
        icon: 'pi pi-fw pi-file',
        route: '/teenindused/documentation'
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        route: '/teenindused/settings'
    }
]);

onMounted(() => {
    active.value = items.value.findIndex((item) => route.path === router.resolve(item.route).path);
})

watch(
    route,
    () => {
        active.value = items.value.findIndex((item) => route.path === router.resolve(item.route).path);
    },
    { immediate: true }
);
</script>