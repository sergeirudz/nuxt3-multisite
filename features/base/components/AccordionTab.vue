<script>
import { defineComponent } from 'vue'
import Accordion from 'primevue/accordion'

export default defineComponent({
  extends: Accordion,
  methods: {
    getTabHeaderClass(tab, i) {
      const headerClasses = Accordion.methods.getTabHeaderClass.call(this, tab, i)
      const variantClass = this.getCurrentVariantClass(tab.props.variant)
      return headerClasses.concat(variantClass)
    },
    getCurrentVariantClass(variantNumber) {
      switch (variantNumber) {
        case 1:
          return 'p-accordion-header-variant-a'
        case 2:
          return 'p-accordion-header-variant-b'
        case 3:
          return 'p-accordion-header-variant-c'
      }
    },
  },
  render: Accordion.render,
})
</script>

<style scoped>
.p-accordion-header-variant-a .p-accordion-header-link {
  border: solid 1px red;
}

.p-accordion-header-variant-b .p-accordion-header-link {
  border: solid 1px green;
}

.p-accordion-header-variant-c .p-accordion-header-link {
  border: solid 1px blue;
}
</style>
