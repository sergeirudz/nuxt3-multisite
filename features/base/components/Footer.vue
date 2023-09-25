<script lang="ts" setup></script>

<template>
  <footer class="footer relative flex justify-center align-middle" style="height: 330px">
    <div class="absolute grid grid-cols-[30vw_1fr] h-full w-full">
      <div class="bg-red-600"></div>
      <div class="bg-gray-800"></div>
    </div>
    <div class="container absolute grid grid-cols-[350px_1fr] py-10">
      <div>
        <img src="https://placehold.co/85x85" alt="" class="mb-6" />
        <ul class="flex flex-col gap-3">
          <li>
            <address>Address goes here</address>
          </li>

          <li>
            <a href="mailto:info@example.com">info@example.com</a>
          </li>

          <li>
            <a href="/">Pressikontaktid</a>
          </li>
        </ul>
        <ul class="flex flex-row gap-4 mt-3">
          <li>F</li>
          <li>IG</li>
          <li>TW</li>
          <li>YT</li>
        </ul>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <div v-for="widget in widgets">
          <h3 class="mb-6">{{ widget.name }}</h3>
          <ul class="flex flex-col gap-3">
            <li v-for="item in widget.items"><nuxt-link :to="item.route">{{ item.name }}</nuxt-link></li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup>

const widgets = [
  {
    name: 'Widget 1 title',
    items: [
      {
        name: 'item1',
        route: '/'
      },
      {
        name: 'item2',
        route: '/'
      },
      {
        name: 'item3',
        route: '/'
      },
      {
        name: 'item4',
        route: '/'
      },
    ]
  },
  {
    name: 'Widget 2 title',
    items: [
      {
        name: 'item1',
        route: '/'
      },
      {
        name: 'item2',
        route: '/'
      },
      {
        name: 'item3',
        route: '/'
      },
      {
        name: 'item4',
        route: '/'
      },
    ]
  }
]

</script>

<style lang="stylus" scoped>
.footer
  *
   color: theme('colors.white')
</style>
