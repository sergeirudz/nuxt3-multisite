<script lang="ts" setup></script>

<template>
  <div class="container">
    <div>Item</div>
    <div>Item</div>
    <div>Item</div>
    <div>Item</div>
    <div>Item</div>
  </div>
</template>

<style scoped>
.container {
  background-color: yellow;
  border: 1px solid red;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  width: 100%;

  >div {
    padding: 30px 100px;
    border: 1px solid red
  }
}
</style>
