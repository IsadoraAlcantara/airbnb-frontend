<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useInfiniteScroll } from '@vueuse/core'
import { CardHostingComponent } from '@/components'
import api from '@/api/axios.js'

const route = useRoute()
const isLoading = ref(false)
const currentPage = ref(1)
const hostingList = ref([])
const hasMore = ref(true)

const fetchResults = async () => {
  if (isLoading.value || !hasMore.value) return
  isLoading.value = true

  try {
    const { data } = await api.get('/acomodacoes/', {
      params: { ...route.query, page: currentPage.value },
    })

    hostingList.value = [...hostingList.value, ...(data.results ?? data)]
    hasMore.value = data.page < data.total_pages
    currentPage.value++

  } catch (error) {
    console.error('Erro ao buscar acomodações: ', error)
    hostingList.value = []

  } finally {
    isLoading.value = false
  }
}

const { reset } = useInfiniteScroll(
  window,
  () => {
    fetchResults()
  },
  {
    distance: 200,
    canLoadMore: () => hasMore.value && !isLoading.value,
  }
)

watch(
  () => route.query,
  async () => {
    hostingList.value = []
    currentPage.value = 1
    hasMore.value = true

    await fetchResults()
    reset()
  },
  { immediate: true, deep: true },
)
</script>

<template>
  <p v-if="hostingList.length == 0">Sem resultados para essa busca</p>
  <div class="cards-section" ref="containerScroll">
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
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 15px;
  /* justify-items: center; */
}
</style>
