<template>
  <div class="card flex justify-content-center">
    <Breadcrumb :home="home" :model="items2"
                :pt="{
                  root: {
                    class: '',
                    style: 'border: 0'
                  }
                }">
      <template #item="slotProps">
        <NuxtLink :to="`${slotProps.item.slug}`">{{ slotProps.item.label }}</NuxtLink>
      </template>
    </Breadcrumb>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb'
import { useBreadcrumbs } from '../../composables/useBreadcrumbs'
const home = ref({
  icon: 'pi pi-home',
  to: '/',
});

const route = useRoute();

const pathParams = route.path.split('/');


// const breadcrumbs = computed(() => {
//   const pathParams = route.path.split('/');
//   return pathParams.map((path, index, arr) => ({
//     label: path,
//     slug: arr.slice(1, index + 1).join('/'),
//   })).splice(1);
// });


const breadcrumbs = computed(() => {
  const result = route.path.split('/').splice(1).map((item, index, arr) => {

    if (index === 0)
      return {
        label: 'home',
        slug: '/'
      }
    else if (index === arr.length - 1)
      return {
        label: item,
        slug: null
      }
    else
      return {
        label: item,
        slug: arr.slice(0, index + 1).join('/'),
      }

  })


  return result

});

const items2 = breadcrumbs.value;

const items = [
  {
    label: 'kontaktid',
    slug: '/kontaktid'
  },
  {
    label: 'region-1',
    slug: '/kontaktid/region-1'
  },
  {
    label: 'buero-1',
    slug: '/kontaktid/region-1/buero-1'
  },
  {
    label: 'group1',
    slug: '/kontaktid/region-1/buero-1/group1'
  },
];

</script>
