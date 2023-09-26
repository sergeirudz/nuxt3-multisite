<template>
  <Accordion :activeIndex="0">
    <template v-for="(slotName, index) in listOfTabs">
      <AccordionTab :header="slotName.header">
        <slot :name="index" />
      </AccordionTab>
    </template>
  </Accordion>
</template>

<script setup lang="ts">
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'

defineProps<{
  listOfTabs: Record<string, string>[]
}>()
</script>
