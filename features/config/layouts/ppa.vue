<script setup lang="ts">
import Navbar from '../components/Navbar.vue';

</script>

<template>
    <header>
        <LangSwitcher />
        <Navbar />
    </header>
    <main class="main">
        <slot />
    </main>
</template>
<style>
.main {
    border: 5px solid blue;
}
</style>