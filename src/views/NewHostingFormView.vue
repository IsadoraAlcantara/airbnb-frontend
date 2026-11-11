<template>
  <div class="wizard-container">
    <!-- Barra de Progresso Compartilhada -->
    <header class="wizard-header">
      <progress :value="currentStep" max="2"></progress>
    </header>

    <!-- O componente da etapa atual será renderizado aqui -->
    <main class="wizard-content">
      <router-view />
    </main>

    <!-- Rodapé de Navegação Global -->
    <footer class="wizard-footer">
      <button @click="prevStep" :disabled="currentStep === 1">Voltar</button>
      <button @click="nextStep">Avançar</button>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const steps = ['step-1', 'step-2']

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