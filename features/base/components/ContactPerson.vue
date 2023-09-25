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
<script setup>
const props = defineProps({
  contact: {
    type: Object,
    required: true,
  },
});
const { contact } = props;


</script>

<!--
    {
        name: 'Eesnimi Perenimi',
        title: 'Rühmapealik',
        phone: '55555555',
        email: 'eesnimi.perenimi@example.com',
        available: 'Kokkuleppel',
        vacation: '14.08.2023 kuni 28.08.2023 asendab Eesnimi Perenimi',
        image: 'https://picsum.photos/id/64/150/200',
        featured: true
    },

 -->
