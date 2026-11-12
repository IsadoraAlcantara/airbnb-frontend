<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const steps = ['step-1', 'step-2', 'step-3']

const currentStep = computed(() => {
  const index = steps.indexOf(route.name)
  return index !== -1 ? index + 1 : 1
})

const nextStep = () => {
  const currentIndex = steps.indexOf(route.name)
  if (currentIndex < steps.length - 1) {
    router.push({ name: steps[currentIndex + 1] })
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
    <!-- Barra de Progresso Compartilhada -->
    <header class="wizard-header">
      <progress :value="currentStep" max="10"></progress>
    </header>

    <!-- O componente da etapa atual será renderizado aqui -->
    <main class="wizard-content">
      <router-view />
    </main>

    <!-- Rodapé de Navegação Global -->
  </main>
  <footer class="wizard-footer">
    <progress :value="currentStep" max="10"></progress>
    <div class="buttons-container">
      <button @click="prevStep" :disabled="currentStep === 1">Voltar</button>
      <button @click="nextStep">Avançar</button>
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
