<script setup lang="ts">
// import LangSwitcher from '../components/LangSwitcher.vue';
// import Navbar from '../components/Navbar.vue';

</script>

<template>
  <div data-theme="blue">
    <header class="flex flex-col">
      <InfoBar />
      <HeaderNavBar />
    </header>
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
<style lang="stylus">
.container
  max-width 1180px
  margin auto
</style>
