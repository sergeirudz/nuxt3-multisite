<script setup lang="ts">
// import LangSwitcher from '../components/LangSwitcher.vue';
// import Navbar from '../components/Navbar.vue';
import HeaderNavBarMega from '../components/HeaderNavBarMega/index.vue';
</script>

<template>
  <div data-theme="blue">
    <header class="flex flex-col">
      <InfoBar />
      <HeaderNavBar />
      <!-- <HeaderNavBarMega /> -->
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
