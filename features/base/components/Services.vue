<script lang="ts" setup></script>

<template>
  <div class="container">
    <div class="heading">
      <h2>Some text here</h2>
    </div>
    <div class="services">
      <div>Service1</div>
      <div>Service2</div>
      <div>Service3</div>
      <div>Service4</div>
      <div>Service5</div>
      <div>Service6</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #f5f5f5;
  border: 1px solid red;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  max-width: fit-content;
  margin: auto;
  padding: 0 20px;


  .services {
    margin: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid blue;


    >div {
      margin: 10px;
      padding: 20px 80px;
      border: 1px solid blue;
    }
  }
}
</style>
