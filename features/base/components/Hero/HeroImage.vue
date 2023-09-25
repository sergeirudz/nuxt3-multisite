<template>
  <template>
    <div class="card flex justify-content-center">
      <img :src="image" alt="Image" width="250" height="540px" />
    </div>
  </template>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  }
})
const { image } = props.image

</script>
