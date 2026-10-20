<script setup>
import CardHostingComponent from '@/components/CardHostingComponent.vue';
</script>

<template>
  
  <div class="cards-section">
  <CardHostingComponent v-for="n in 10" :key=n />
  </div>
</template>
<style scoped>
.cards-section {
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  justify-items: center;
}
</style>
