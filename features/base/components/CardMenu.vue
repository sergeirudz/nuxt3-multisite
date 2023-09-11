<script lang="ts" setup></script>

<template>
  <div class="container">
    <div>Service</div>
    <div>Service</div>
    <div>Service</div>
    <div>Service</div>
    <div>Service</div>
    <div>Service</div>
    <div>Service</div>
    <div>Service</div>
  </div>
</template>

<style scoped>
.container {
  background-color: #f5f5f5;
  border: 1px solid red;
  padding: 10px;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: fit-content;

  >div {
    max-width: 100px;
    border: 1px solid blue;
    padding: 30px 40px;
  }
}
</style>
