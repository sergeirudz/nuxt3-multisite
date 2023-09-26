<template>
  <div class="flex flex-row gap-6">
    <img src="https://picsum.photos/id/1/150/200" />
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <h3>{{ kontakt.name }}</h3>
        <p>{{ kontakt.title }}</p>
      </div>
      <ul class="flex flex-col gap-2">
        <li>
          <p>{{ kontakt.phone }}</p>
        </li>
        <li>
          <p>{{ kontakt.email }}</p>
        </li>
        <li>
          <p>{{ kontakt.available }}</p>
        </li>
        <li>
          <p>{{ kontakt.vacation }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  kontakt: {
    type: Object,
    required: true
  }
})
const { kontakt } = props.kontakt

</script>
