// stores/searchStore.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('searchStore', () => {
  const checkIn = ref(null)  // Ex: '2026-10-16' ou objeto Date
  const checkOut = ref(null) // Ex: '2026-10-18' ou objeto Date

  // Calcula a quantidade de diárias (noites) entre check-in e check-out
  const totalNights = computed(() => {
    if (!checkIn.value || !checkOut.value) return 0

    const inicio = new Date(checkIn.value)
    const fim = new Date(checkOut.value)
    const diffMs = fim - inicio
    const dias = Math.round(diffMs / (1000 * 60 * 60 * 24))

    return dias > 0 ? dias : 0
  })

  // Formata o intervalo de datas (ex: "16 - 18 out.")
  const formattedDateRange = computed(() => {
    if (!checkIn.value || !checkOut.value) return null

    const inicio = new Date(checkIn.value + 'T00:00:00')
    const fim = new Date(checkOut.value + 'T00:00:00')

    const diaInicio = inicio.getDate()
    const diaFim = fim.getDate()
    const mesFim = fim.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '')

    return `${diaInicio} - ${diaFim} ${mesFim}.`
  })

  return {
    checkIn,
    checkOut,
    totalNights,
    formattedDateRange,
  }
})