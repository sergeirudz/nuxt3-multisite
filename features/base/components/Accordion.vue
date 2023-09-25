<template>
  <div class="card">
    <Accordion :activeIndex="0">
      <slot name="tabs" />
    </Accordion>
  </div>
</template>

<script setup lang="ts">

interface Props {
  title: string;
  content: string;
}

const props = defineProps({
  tabs: {
    type: Object as PropType<Props[]>,
  }
});

</script>
