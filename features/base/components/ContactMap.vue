<template>
  <div class="grid grid-cols-2">
    <ul class="p-10 flex flex-col gap-3 bg-gray-200">
      <li>
        <address>{{ business.address }}</address>
      </li>
      <li>{{ business.phone }}</li>
      <li>{{ business.email }}</li>
      <li>{{ business.fax }}</li>
    </ul>
    <div class="bg-gray-500">

    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  business: {
    type: Object,
    required: true,
  },
});
const { contact } = props;


</script>
