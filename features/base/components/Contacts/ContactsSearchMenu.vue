<template>
  <div class="card">
    <TabMenu v-model:activeIndex="active" :model="data"
             :pt="{
               root: {
                 class: 'mt-8 mb-12'
               },
               menu: {
                 class: 'kontaktid-tabmenu-root'
               },
               menuitem: {
                 class: 'kontaktid-tabmenu-menuitem'
               },
               action: {
                 class: 'kontaktid-tabmenu-action'
               }
             }"
             :activeindex="1">
      <!-- <template #item="{ item, props }">
        <nuxt-link :to="`/kontaktid/${item.slug}`">
          {{ item.label }}
        </nuxt-link>
      </template> -->
    </TabMenu>
  </div>
</template>

<style lang="stylus">
.kontaktid-tabmenu-root
  background: theme('colors.gray.100')!important;


.kontaktid-tabmenu-menuitem
  @apply flex justify-center;

.kontaktid-tabmenu-menuitem
  & .p-menuitem-text
    color: theme('colors.black') !important

  & .p-menuitem-link
    border-bottom: 1px solid theme('colors.primary.500') !important;
    border-top: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important;

.kontaktid-tabmenu-menuitem
  &.p-highlight .p-menuitem-link
    border-color: theme('colors.primary.500') !important;
    border-radius: 0;
    border-top: 1px solid theme('colors.primary.500') !important;
    border-left: 1px solid theme('colors.primary.500') !important;
    border-right: 1px solid theme('colors.primary.500') !important;
  &.p-highlight .p-menuitem-text
    color: theme('colors.primary.500') !important

    border-bottom: none !important;
    background: theme('colors.white') !important

.kontaktid-tabmenu-action
  border-radius: 0 !important
</style>

<script setup lang="ts">
import TabMenu from 'primevue/tabmenu';
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const router = useRouter();
const route = useRoute();

const { data } = props

const active = ref(0);

// onMounted(() => {
//   active.value = items.value.findIndex((item) => route.path === router.resolve(item.route).path);
// })

// watch(
//   route,
//   () => {
//     active.value = items.value.findIndex((item) => route.path === router.resolve(item.route).path);
//   },
//   { immediate: true }
// );

</script>
