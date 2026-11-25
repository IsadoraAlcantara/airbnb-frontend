import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from '../api/axios'
import router from '@/router'

export const useFormStore = defineStore('formStore', () => {
  const draftId = ref(null)
  const images = ref([])
  const fieldErrors = ref({})

  const formData = ref({
    titulo_acomodacao: '',
    descricao_acomodacao: '',
    categoria_acomodacao: 'Espaço inteiro',
    tipo_acomodacao: 'Casa',
    qtd_quartos: 0,
    qtd_banheiros: 0,
    qtd_camas: 0,
    max_hospedes: 1,
    valor_diaria: null,
    logradouro: '',
    numero_hospedagem: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
  })

  const createEmptyHosting = async () => {
    if (draftId.value) return

    const { data } = await api.post(`/acomodacoes/`)
    draftId.value = data.id
  }

  const salvarEtapa = async (camposDaEtapa) => {
    fieldErrors.value = {}
    const payload = {}

    camposDaEtapa.forEach((campo) => {
      payload[campo] = formData.value[campo]
    })

    try {
      const { data } = await api.patch(`/acomodacoes/${draftId.value}/`, payload)
      Object.assign(formData.value, data)
      return true
    } catch (error) {
      console.log('Erro capturado:', error.response?.status, error.response?.data)
      if (error.response?.status === 400) {
        fieldErrors.value = error.response.data
      }
      return false
    }
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
    if (!draftId.value) return

    try {
      await api.patch(`/acomodacoes/${draftId.value}/`, {
        status_hospedagem: 'PUBLISHED',
        valor_diaria: formData.value.valor_diaria,
      })

      draftId.value = null
      images.value = []
      fieldErrors.value = {}

      router.push('/admin-hosting')
    } catch (error) {
      if (error.response?.status === 400) {
        fieldErrors.value = error.response.data
      }
      console.error('Erro ao publicar acomodação:', error)
    }
  }

  const getDraft = async () => {
    if (!draftId.value) return

    const { data } = await api.get(`/acomodacoes/${draftId.value}/`)
    images.value = data.imagens || []

    Object.keys(formData.value).forEach((campo) => {
      if (data[campo] !== undefined) {
        formData.value[campo] = data[campo]
      }
    })
  }

  return {
    createEmptyHosting,
    uploadPhoto,
    deletePhoto,
    publishHosting,
    getDraft,
    salvarEtapa,
    draftId,
    images,
    formData,
    fieldErrors,
  }
})
