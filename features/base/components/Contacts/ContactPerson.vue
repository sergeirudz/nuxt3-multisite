<template>
  <!-- CONTACT -->
  <div class="flex flex-row gap-6">
    <img :src="contact.image" :alt="contact.name" class="" />
    <div>
      <h3>{{ contact.name }}</h3>
      <p>{{ contact.title }}</p>
      <ul>
        <li>{{ contact.phone }}</li>
        <li>{{ contact.email }}</li>
        <li v-if="!contact.vacation">{{ contact.available }}</li>
        <li>{{ contact.vacation }}</li>
      </ul>
    </div>
  </div>
  <!-- MAP -->
</template>

<script setup lang="ts">
const props = defineProps<{
  contact: Record<any, any>
}>()
const { contact } = props;
</script>
