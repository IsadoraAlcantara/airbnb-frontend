import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from '../api/axios'

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

  // const atualizarRascunho = async (dadosParciais = null) => {
  //   if (!draftId.value) return

  //   const payload = dadosParciais || formData.value

  //   const { data } = await api.patch(`/acomodacoes/${draftId.value}/`, payload)

  //   Object.assign(formData.value, data)
  // }

  const salvarEtapa = async (camposDaEtapa) => {
    fieldErrors.value = {} // Limpa erros anteriores

    // Monta um objeto contendo só os campos desta tela
    const payload = {}
    camposDaEtapa.forEach((campo) => {
      payload[campo] = formData.value[campo]
    })

    try {
      const { data } = await api.patch(`/acomodacoes/${draftId.value}/`, payload)
      Object.assign(formData.value, data)
      return true // Sucesso: pode avançar!
    } catch (error) {
      console.log('Erro capturado:', error.response?.status, error.response?.data)
      if (error.response?.status === 400) {
        fieldErrors.value = error.response.data
      }
      return false // Bloqueia o avanço!
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
    await api.patch(`/acomodacoes/${draftId.value}/`, { status: 'PUBLISHED' })

    draftId.value = null
    images.value = []
  }

  const getDraft = async () => {
    if (!draftId.value) return

    const { data } = await api.get(`/acomodacoes/${draftId.value}/`)
    images.value = data.imagens || []

    // Preenche cada campo do formData com o que veio do banco
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
    // atualizarRascunho,
    salvarEtapa,
    draftId,
    images,
    formData,
    fieldErrors,
  }
})
