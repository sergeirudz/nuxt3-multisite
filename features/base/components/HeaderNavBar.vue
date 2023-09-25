<template>
  <div class="bg-primary-500">
    <div class="px-8">
      <Menubar :model="items"
               :pt="{
                 root: {
                   class: 'header-menubar'
                 },
                 content: {
                   class: 'header-menubar-content',
                 },
                 action: {
                   class: 'header-menubar-action',
                 },
                 submenu: {
                   class: 'header-menubar-submenu',
                 },
                 submenuIcon: {
                   class: 'header-menubar-submenuIcon',
                 }

               }
                 ">
        <template #start>
          <img alt="logo" class="h-10 w-auto" src="https://primefaces.org/cdn/primevue/images/logo.svg" height="20px" />
        </template>
        <!-- <template #item="{ label, item, props, root, hasSubmenu }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
          <a :href="routerProps.href" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
          </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
          <span v-bind="props.icon" />
          <span v-bind="props.label">{{ label }}</span>
          <span :class="[hasSubmenu && (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right')]"
                v-bind="props.submenuicon" />
        </a>
      </template> -->
        <template #end>
          <InputText placeholder="Search" type="text" />
        </template>
      </Menubar>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const menuItems = useFetchHeaderNav()

const items = ref(menuItems);
</script>

<style lang="stylus">
.header-menubar
  @apply bg-primary-500 border-0;
  .header-menubar-submenuIcon
    color: theme('colors.white') !important
  .header-menubar-action
    .p-menuitem-text
      color: theme('colors.white') !important

  .p-menuitem.p-highlight > .p-menuitem-content
    background: unset !important
    color: inherit !important


.header-menubar-item.p-highlight
     // TODO fix the bg


.header-menubar-content
  & :hover
    background-color: theme('colors.primary.500') !important;

.header-menubar-submenu
  .p-submenu-list
    background: theme('colors.white') !important
    .p-focus
      & :hover
        background: red !important
  .header-menubar-submenuIcon
    color: theme('colors.black') !important
  .header-menubar-action
    .p-menuitem-text
      color: theme('colors.black') !important

  & > .p-menuitem-content
    color: theme('colors.black') !important



</style>
