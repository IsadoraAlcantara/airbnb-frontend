<script setup>
import { HeaderComponent } from '@/components'
</script>
<template>
  <HeaderComponent />
  <main>
    <slot />
  </main>
</template>
<style scoped>
/* main {
  display: grid;
  justify-items: center;
} */
</style>
