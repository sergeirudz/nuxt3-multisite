<script lang="ts" setup>
const localePath = useLocalePath();
const { locale, availableLocales, route } = useI18n();
const { setLocale } = useI18n();

const currentLang = ref(locale);

async function changeLocale(event) {
  setLocale(event.target.value);
  currentLang.value = event.target.value;
  await navigateTo(localePath(useRoute().path))
}

</script>

<template>
  <div class="container">
    BASEAPP - Header
    <select class="" v-model="currentLang" @change="changeLocale($event)">
      <option :value="lang" v-for="(lang, i) in availableLocales" :key="i">
        {{ lang.toUpperCase() }}
      </option>
    </select>
    <Navbar />
  </div>
</template>

<style scoped>
.container {
  background-color: #f5f5f5;
  border: 1px solid red;
  padding: 10px;
  margin: auto;
}
</style>
