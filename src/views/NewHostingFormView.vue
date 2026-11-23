<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useFormStore } from '@/stores/formStore'

const route = useRoute()
const router = useRouter()
const formStore = useFormStore()

const steps = ['structure', 'privacy-type', 'location', 'floor-plan', 'photos']

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
  if (currentStep.value === 1 && !formStore.draftId) {
    await formStore.createEmptyHosting()
  } else {
    await formStore.atualizarRascunho()
  }

  nextStep()
}

const nextStep = () => {
  const currentIndex = steps.indexOf(route.name)
  console.log('ID criado:', formStore.draftId)
  if (currentIndex < steps.length - 1) {
    router.push({ name: steps[currentIndex + 1], params: { id: formStore.draftId } })
  }
}

const prevStep = () => {
  const currentIndex = steps.indexOf(route.name)
  if (currentIndex > 0) {
    router.push({ name: steps[currentIndex - 1] })
  }
}
</script>

<template>
  <main>
    <div class="wizard-content">
      <router-view />
    </div>
  </main>

  <footer class="wizard-footer">
    <progress :value="currentStep" max="10"></progress>
    <div class="buttons-container">
      <button @click="prevStep" :disabled="currentStep === 1">Voltar</button>
      <button @click="handleNext" v-if="currentStep != 5">Avançar</button>
      <button @click="formStore.publishHosting" v-if="currentStep == 5">Finalizar</button>
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
  }

  & button {
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
