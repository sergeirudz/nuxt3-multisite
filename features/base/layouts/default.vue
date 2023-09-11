<script setup lang="ts">
</script>

<template>
    <header>
        <LangSwitcher />
    </header>
    <main class="main">
        <slot />
    </main>
</template>

<style>
.main {
    display: flex;
    justify-content: center;
}
</style>