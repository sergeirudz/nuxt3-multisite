<script setup lang="ts">
import LangSwitcher from '../components/LangSwitcher.vue';
import Navbar from '../components/Navbar.vue';

</script>

<template>
  <div data-theme="blue">

    <header>
      <LangSwitcher />
      <Navbar />
    </header>
    <main class="bg-primary-500">
      <slot />
    </main>
  </div>
</template>
<style></style>
