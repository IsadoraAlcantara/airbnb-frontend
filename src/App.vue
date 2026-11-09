<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()

const layouts = {
  DefaultLayout: defineAsyncComponent(() => import('./layouts/DefaultLayout.vue')),
  BlanckLayout: defineAsyncComponent(() => import('./layouts/BlanckLayout.vue')),
}

const currentLayout = computed(() => {
  const layoutName = route.meta.layout || 'DefaultLayout'
  return layouts[layoutName] || layouts.DefaultLayout
})
</script>

<template>
  <component :is="currentLayout">
    <RouterView />
  </component>
</template>
