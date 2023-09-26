<template>
  <div>
    <div v-if="image" class="h-64 bg-gray-300">
    </div>
    <div class="pb-4">
      <div class="container flex flex-row gap-11">
        <div class="menu-wrapper w-60 p-4 bg-primary-500 w-content flex flex-col gap-4 h-auto">
          <h3 class="text-base text-white font-semibold">Ohutu kodu</h3>
          <ul>
            <li v-for="item in menu.subpages"
                class="border-l border-white border-opacity-50 px-4 py-2 text-lg text-white">
              {{ item.name }}</li>
          </ul>
        </div>
        <div class="flex flex-col gap-4">
          <Breadcrumbs />
          <div class="flex flex-row justify-between align-middle">
            <h1 class="text-primary-500 text-4xl">Heading 1 goes here</h1>
            <SocialIcons :data="SOCIAL" />
          </div>
          <p>Amet faucibus auctor adipiscing nulla arcu dignissim nisl. Viverra risus dignissim malesuada velit at
            scelerisque pellentesque in nisl. Felis hendrerit et donec posuere integer ullamcorper magna etiam. Magna
            posuere platea consectetur placerat. Cursus elit est cursus accumsan at.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb';

const props = defineProps({
  menu: {
    type: Object,
    required: true,
  },
  image: {
    type: String,
    required: false,
  }
});

const { menu } = props;

const SOCIAL = [
  {
    path: "https://facebook.com",
    icon: "facebook",
  },
  {
    path: "https://twitter.com",
    icon: "twitter",
  },
]

</script>

<style lang="stylus" scoped>
.menu-wrapper
  top: 50%
  min-width: 360px
  transform: translateY(-10%)
  height: fit-content
  z-index 12

</style>
