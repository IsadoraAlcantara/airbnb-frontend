<script setup>
import CardHostingComponent from '@/components/CardHostingComponent.vue';
</script>

<template>
  <h1>home</h1>
  <div class="cards-section">
  <CardHostingComponent v-for="n in 10" :key=n />
  </div>
</template>
<style scoped>
.cards-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  justify-items: center;
}
</style>
