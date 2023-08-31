<script lang="ts" setup>
const newsListData = [
  {
    date: '2021-10-01',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '#'
  },
  {
    date: '2021-10-02',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '#'
  },
  {
    date: '2021-10-03',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '#'
  },
  {
    date: '2021-10-04',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '#'
  },
  {
    date: '2021-10-05',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '#'
  },
]

</script>

<template>
  <div class="container">
    <div class="featuredNews">
      <div>TAG HERE</div>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
      <div>Date here</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus et, soluta eveniet, alias exercitationem
        voluptatibus aperiam sapiente mollitia laborum distinctio ipsa ipsum? Quo iusto unde sed perspiciatis cumque, a
        dignissimos!</div>
    </div>
    <div class="newsList">
      <div v-for="news in  newsListData " :key="news.title" class="newsItem">
        <div>{{ news.date }}</div>
        <div><a :href="news.href">{{ news.title }}</a></div>
      </div>

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
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  width: fit-content;

  gap: 50px;

  .featuredNews {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .newsList {
    widows: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .newsItem {
      display: flex;
      flex-direction: row;
      gap: 10px
    }
  }
}
</style>
