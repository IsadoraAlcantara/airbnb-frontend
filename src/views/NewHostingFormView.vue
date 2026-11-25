<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useFormStore } from '@/stores/formStore'

const route = useRoute()
const router = useRouter()
const formStore = useFormStore()

const stepFieldsMap = {
  structure: ['tipo_acomodacao'],
  'privacy-type': ['categoria_acomodacao'],
  location: ['logradouro', 'numero_hospedagem', 'bairro', 'cidade', 'estado', 'cep'],
  'floor-plan': ['max_hospedes', 'qtd_quartos', 'qtd_banheiros', 'qtd_camas'],
  photos: ['imagens'],
  title: ['titulo_acomodacao'],
  description: ['descricao_acomodacao'],
  price: ['valor_diaria'],
}

const canAdvance = computed(() => {
  const campos = stepFieldsMap[route.name] || []

  return campos.every((campo) => {
    if (campo === 'imagens') {
      return formStore.images.length > 4
    }
    const valor = formStore.formData[campo]
    return valor !== null && valor !== undefined && String(valor).trim() !== ''
  })
})

const steps = [
  'structure',
  'privacy-type',
  'location',
  'floor-plan',
  'photos',
  'title',
  'description',
  'price'
]

const currentStep = computed(() => {
  const index = steps.indexOf(route.name)
  return index !== -1 ? index + 1 : 1
})

onMounted(async () => {
  if (route.params.id) {
    formStore.draftId = route.params.id
    await formStore.getDraft()
  }
})

const handleNext = async () => {
  if (!canAdvance.value) return

  if (route.name === 'structure' && !formStore.draftId) {
    await formStore.createEmptyHosting()
  }

  const camposDaEtapa = stepFieldsMap[route.name] || []
  const isValid = await formStore.salvarEtapa(camposDaEtapa)

  if (isValid) {
    const steps = Object.keys(stepFieldsMap)
    const currentIndex = steps.indexOf(route.name)
    if (currentIndex < steps.length - 1) {
      router.push({
        name: steps[currentIndex + 1],
        params: { id: formStore.draftId },
      })
    }
  }
}

const prevStep = () => {
  const currentIndex = steps.indexOf(route.name)
  if (currentIndex > 0) {
    router.push({ name: steps[currentIndex - 1] })
  }
}

const handlePublish = () => {
  formStore.publishHosting  
  router.push({
    name: 'admin-hosting',
  })
}
</script>

<template>
  <main>
    <div class="wizard-content">
      <router-view />
    </div>
  </main>

  <footer class="wizard-footer">
    <progress :value="currentStep" max="8"></progress>
    <div class="buttons-container">
      <button @click="prevStep" :disabled="currentStep === 1">Voltar</button>
      <button :disabled="!canAdvance" @click="handleNext" v-if="currentStep != 8">Avançar</button>
      <button
        v-if="currentStep == 8"
        type="button"
        class="btn-next"
        @click="handlePublish"
      >
        Finalizar
      </button>
    </div>
  </footer>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wizard-content {
  margin-top: 45px;
}

.wizard-footer {
  box-sizing: border-box;
  width: 100vw;
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
  background-color: white;

  & .buttons-container {
    display: flex;
    justify-content: space-between;

    & button:nth-child(2) {
      background-color: #262626;
      color: #f2f2f2;
    }

    & button:nth-child(2):disabled {
      background-color: #dddddd;
      color: #ffffff;
      cursor: not-allowed;
    }
  }

  & button {
    text-decoration: none;
    margin: 10px 40px;
    padding: 12px 28px;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    font-size: 16px;
  }
}

progress {
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 7px;
  background-color: #f2f2f2;
}

progress::-webkit-progress-bar {
  background-color: #f2f2f2;
}

progress::-webkit-progress-value {
  background-color: #262626;
}
</style>
