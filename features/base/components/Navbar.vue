<script lang="ts" setup>
const localePath = useLocalePath()
</script>

<template>
  <div class="container">
    <NuxtLinkLocale :to="localePath('index')">{{ $t('nav.home') }}</NuxtLinkLocale>
    <NuxtLinkLocale :to="localePath('news')">{{ $t('nav.news') }}</NuxtLinkLocale>

  </div>
</template>

<style scoped>
.container {
  background-color: #f5f5f5;
  border: 1px solid red;
  padding: 10px;
  margin: 1rem auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}
</style>
