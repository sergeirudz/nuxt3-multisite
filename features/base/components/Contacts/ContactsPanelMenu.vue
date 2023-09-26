<template>
  <div class="card flex flex-column align-items-center">
    <PanelMenu v-model:expandedKeys="expandedKeys" :model="data[0].items" class="w-full md:w-25rem"
               :exact="true">
      <template #item="slotProps">
        <NuxtLink :to="`${data[0].slug}/${slotProps.item.slug}`">{{ slotProps.item.label }}</NuxtLink>
      </template>
    </PanelMenu>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import PanelMenu from 'primevue/panelmenu';

const expandedKeys = ref({});
const router = useRouter();
const route = useRoute();

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const { data } = props;


const expandNode = (node) => {
  if (node.items && node.items.length) {
    expandedKeys.value[node.key] = true;

    for (let child of node.items) {
      expandNode(child);
    }
  }
};
</script>
