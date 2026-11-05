<script setup>
import { RouterView } from 'vue-router'
import { HeaderComponent } from '@/components'
</script>

<template>
  <div>
    <HeaderComponent />
    <RouterView />
  </div>
</template>

<style scoped>
div {
  display: grid;
  justify-items: center;
}
</style>
