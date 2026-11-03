<script setup>
import { onMounted, ref } from 'vue'
import { getHosting } from '@/plugins/axios.js'
import CardHostingComponent from '@/components/CardHostingComponent.vue'

// const fetchHosting = async () => {
//   try
// }

const hostingList = ref([])

onMounted(async () => {
  // fetchHosting()
  try {
    const data = await getHosting()
    hostingList.value = data.results
    console.log(hostingList.value)
  } catch (error) {
    console.error('Erro ao buscar acomodações: ', error)
  }
})
</script>

<template>
  <div class="cards-section">
    <CardHostingComponent
      v-for="hosting in hostingList"
      :key="hosting.id"
      :id="hosting.id"
      :price="hosting.valor_diaria"
      :hosting-type="hosting.tipo_acomodacao"
      :localization="hosting.cidade"
    />
  </div>
</template>
<style scoped>
.cards-section {
  padding: 3rem;
  display: grid;
  width: 100%;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  justify-items: center;
}
</style>
