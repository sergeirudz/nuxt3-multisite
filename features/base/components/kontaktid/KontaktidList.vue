<template>
  <h1>CONTACTS HERE</h1>
</template>

<script setup>

const props = defineProps({
  contacts: {
    type: Array,
    required: true,
  },
  business: {
    type: Object,
    required: false,
  },
});

</script>
