<template>
  <div class="card">
    <MegaMenu :model="items">

    </MegaMenu>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MegaMenu from 'primevue/megamenu';

const items = ref([
  {
    key: '1',
    label: 'Menu 1',
    items: [
      [
        {
          key: '11',
          items: [
            {
              key: '111',
              label: '111',
              items: [
                {
                  key: '1111',
                  label: '1.1.1.1',
                }
              ]
            },
          ]
        },
      ],

    ]
  }
]);
</script>
