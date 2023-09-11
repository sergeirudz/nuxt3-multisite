<script lang="ts" setup></script>

<template>
  <div class="container">
    <div class="section">
      <h3>Heading here</h3>
      <ul>
        <li>Some link here</li>
        <li>Some link here</li>
        <li>Some link here</li>
        <li>Some link here</li>
        <li>Some link here</li>
      </ul>
    </div>
    <div class="section">
      <h3>Heading here</h3>
      <ul>
        <li>Some link here</li>
        <li>Some link here</li>
        <li>Some link here</li>
        <li>Some link here</li>
        <li>Some link here</li>
      </ul>
    </div>
    <div class="section">
      <h3>Heading here</h3>
      <ul>
        <li>Some link here</li>
        <li>Some link here</li>
        <li>Some link here</li>
        <li>Some link here</li>
        <li>Some link here</li>
      </ul>
    </div>
    <div class="section">
      <h3>Heading here</h3>
      <ul>
        <li>Some link here</li>
        <li>Some link here</li>
        <li>Some link here</li>
        <li>Some link here</li>
        <li>Some link here</li>
      </ul>
    </div>
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
    padding: 10px 50px;

    >ul {
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>
