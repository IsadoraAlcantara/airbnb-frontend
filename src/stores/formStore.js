import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from '../api/axios'

export const useFormStore = defineStore('formStore', () => {
  const draftId = ref(null)
  const images = ref([])

  const createEmptyHosting = async () => {
    if (draftId.value) return

    const { data } = await api.post(`/acomodacoes/`)
    draftId.value = data.id
    console.log('criou acomodacao', data.id)
  }

  const uploadPhoto = async (file) => {
    if (!draftId.value) {
      await createEmptyHosting()
    }

    const formData = new FormData()
    formData.append('imagem', file)
    formData.append('acomodacao', draftId.value)

    const { data } = await api.post(`/imagens/`, formData)
    images.value.push(data)
  }

  const deletePhoto = async (photoId) => {
    await api.delete(`/imagens/${photoId}/`)

    images.value = images.value.filter((img) => img.id !== photoId)
  }

  const publishHosting = async () => {
    await api.patch(`/acomodacoes/${draftId.value}/`, { status: 'PUBLISHED' })

    draftId.value = null
    images.value = []
  }

  const getDraft = async () => {
    if (!draftId.value) return

    try {
      const { data } = await api.get(`/acomodacoes/${draftId.value}/`)
      images.value = data.imagens || []
    } catch (error) {
      console.error('Erro ao recuperar rascunho:', error)
      draftId.value = null
    }
  }

  return {
    createEmptyHosting,
    uploadPhoto,
    deletePhoto,
    publishHosting,
    getDraft,
    draftId,
    images,
  }
})
