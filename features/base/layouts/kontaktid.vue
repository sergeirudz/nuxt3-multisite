<template>
  <div class="container">
    <Breadcrumbs />
    <slot name="header" />
    <ContactsSearchMenu :data="regions" />

    <div class="grid grid-cols-[308px_1fr] gap-11">
      <aside>
        <slot name="aside" />
      </aside>
      <div>
        <slot name="contacts" />
      </div>
      <slot />
    </div>
  </div>
</template>




<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const props = defineProps({
  regions: {
    type: Array,
    required: true,
  },
});

const { regions } = props

</script>
