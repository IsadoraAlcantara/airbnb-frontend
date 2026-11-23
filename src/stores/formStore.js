import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from '../api/axios'

export const useFormStore = defineStore('formStore', () => {
  const draftId = ref(null)
  const images = ref([])

  const criaAcomodacaoVazia = async () => {
    if (draftId.value) return

    const { data } = await api.post(`/acomodacoes/`)
    draftId.value = data.id
    console.log("criou acomodacao", data.id)
  }

  const uploadPhoto = async (file) => {
    const formData = new FormData()
    formData.append('imagem', file)
    formData.append('acomodacao', draftId.value)

    const { data } = await api.post(`/fotos/`, formData)
    images.value.push(data)
  }

  const deletePhoto = async (photoId) => {
    await api.delete(`/fotos/${photoId}/`)

    images.value = images.value.filter((img) => img.id !== photoId)
  }

  const publishHosting = async () => {
    await api.patch(`/acomodacoes/${draftId.value}/`, { status: 'PUBLISHED' })

    draftId.value = null
    images.value = []
  }
  return { criaAcomodacaoVazia, uploadPhoto, deletePhoto, publishHosting, draftId, images }
})
