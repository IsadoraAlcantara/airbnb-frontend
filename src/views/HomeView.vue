<script setup>
import CardHostingComponent from '@/components/CardHostingComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
</script>

<template>
  <HeaderComponent />
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
