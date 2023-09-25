<template>
  <div>
    <h2 class="text-base font-semibold text-gray-900">Transfer funds</h2>
    <p class="mt-1 text-sm text-gray-500">Transfer your balance to your bank account.</p>
    <fieldset class="mt-2">
      <legend class="sr-only">Bank account</legend>
      <div class="divide-y divide-gray-200">
        <div v-for="(account, accountIdx) in accounts" :key="accountIdx" class="relative flex items-start pb-4 pt-3.5">
          <div class="min-w-0 flex-1 text-sm leading-6">
            <label :for="`account-${account.id}`" class="font-medium text-gray-900">{{ account.name }}</label>
            <p :id="`account-${account.id}-description`" class="text-gray-500">{{ account.description }}</p>
          </div>
          <div class="ml-3 flex h-6 items-center">
            <input :id="`account-${account.id}`" :aria-describedby="`account-${account.id}-description`" name="account"
                   type="radio" :checked="account.id === 'checking'"
                   class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
          </div>
        </div>
      </div>
    </fieldset>
  </div>
  <!-- <div id="default-carousel" class="relative w-full" data-carousel="slide">

    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">

      <div class="hidden flex duration-700 ease-in-out" data-carousel-item v-for="(item, index) in items">
        <img src="https://picsum.photos/id/1/800/400"
             class="w1/2 block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        <div class="w1/2">
          <h2>Title here</h2>
          <p>Description here</p>
        </div>
      </div>

    </div>
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
      <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
              v-for="(item, index) in items" :data-carousel-slide-to="index"></button>

    </div>
  </div> -->
  <!-- <div id="default-carousel" class="relative w-full flex" data-carousel="slide">
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96 bg-red-400">
      <div v-for="item in items" class="flex" data-carousel-item :key="index">
        <img :src="item.image"
             class=" block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div>
          <h1>{{ item.title }}</h1>
          <p>{{ item.description }}</p>

        </div>
      </div>
      <div class="z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 border-1 ">
        <button v-for="(item, index) in items" :data-carousel-slide-to="index"
                class="h-4 w-4 rounded-full bg-primary-500">
        </button>
      </div>
    </div>

  </div> -->
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
const accounts = [
  { id: 'checking', name: 'Checking', description: 'CIBC ••••6610' },
  { id: 'savings', name: 'Savings', description: 'Bank of America ••••0149' },
  { id: 'mastercard', name: 'Mastercard', description: 'Capital One ••••7877' },
]
const items = [
  {
    image: 'https://picsum.photos/id/1/800/400',
    title: 'Title1 here',
    description: 'Description here'
  },
  {
    image: 'https://picsum.photos/id/1/800/400',
    title: 'Title2 here',
    description: 'Description here'
  },
  {
    image: 'https://picsum.photos/id/1/800/400',
    title: 'Title3 here',
    description: 'Description here'
  }
]
</script>

