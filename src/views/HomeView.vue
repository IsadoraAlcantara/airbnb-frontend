<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { CardHostingComponent } from '@/components'
import api from '@/api/axios.js'

const route = useRoute()
const loading = ref(false)
const hostingList = ref([])

const fetchResults = async () => {
  loading.value = true
  try {
    // Passa os filtros da URL para a função centralizada da API
    const { data } = await api.get('/acomodacoes/', {
      params: route.query,
    })
    hostingList.value = data.results ?? data
  } catch (error) {
    console.error('Erro ao buscar acomodações: ', error)
    hostingList.value = []
  } finally {
    loading.value = false
  }
}

watch(() => route.query, fetchResults, { immediate: true, deep: true })
</script>

<template>
  <p v-if="hostingList.length == 0">Sem resultados para essa busca</p>
  <div class="cards-section">
    <CardHostingComponent
      v-for="hosting in hostingList"
      :key="hosting.id"
      :id="hosting.id"
      :price="hosting.valor_diaria"
      :hosting-type="hosting.tipo_acomodacao"
      :localization="hosting.cidade"
      :image="hosting.imagens?.[0]?.imagem ?? '/img/sem-foto.jpg'"
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
  /* justify-items: center; */
}
</style>
