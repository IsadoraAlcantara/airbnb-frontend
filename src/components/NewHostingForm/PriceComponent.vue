<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useFormStore } from '@/stores/formStore'

const formStore = useFormStore()

const precoBase = ref(0)

onMounted(() => {
  if (formStore.formData.valor_diaria == null) {
    precoBase.value = 0
    formStore.formData.valor_diaria = 0
  } else {
    precoBase.value = Math.round(formStore.formData.valor_diaria / 1.14)
  }
})

const number = computed(() => Number(precoBase.value) || 0)

const clientServiceFee = computed(() => Math.round(number.value * 0.14))
const hostServiceFee = computed(() => Math.round(number.value * 0.03))

const clientTotal = computed(() => number.value + clientServiceFee.value)
const hostEarnings = computed(() => Math.max(0, number.value - hostServiceFee.value))

watch(clientTotal, (novoTotal) => {
  formStore.formData.valor_diaria = novoTotal
})
</script>

<template>
  <div class="step-container">
    <div class="header-section">
      <h1 class="title">Agora, defina seu preço</h1>
      <p class="subtitle">Você pode alterá-lo quando quiser.</p>
    </div>

    <div class="price-display-wrapper">
      <label for="price-input" class="price-label">
        <span class="currency">R$</span>
        <input
          id="price-input"
          type="number"
          min="0"
          v-model.number="precoBase"
          class="price-input"
          :style="{ width: `${Math.max(String(number).length, 1)}ch` }"
        />
        <i class="mdi mdi-pencil edit-icon"></i>
      </label>

      <div class="breakdown-wrapper">
        <div class="breakdown-card">
          <div class="breakdown-row">
            <span>Preço base</span>
            <span>R$ {{ number }}</span>
          </div>
          <div class="breakdown-row">
            <span>Taxa de serviço do hóspede</span>
            <span>R$ {{ clientServiceFee }}</span>
          </div>
          <div class="breakdown-divider"></div>
          <div class="breakdown-row bold">
            <span>Preço para o hóspede</span>
            <span>R$ {{ clientTotal }}</span>
          </div>
        </div>

        <div class="breakdown-card host-earnings">
          <div class="breakdown-row bold">
            <span>Você ganha</span>
            <span>R$ {{ hostEarnings }}</span>
          </div>
          <p class="host-note">Já descontada a taxa de serviço do anfitrião (3%).</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}

.step-container {
  max-width: 640px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
  color: #222222;
}

.header-section {
  margin-bottom: 3.5rem;
}

.title {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0 0 0.5rem 0;
  color: #222222;
}

.subtitle {
  font-size: 1.05rem;
  color: #717171;
  margin: 0;
  font-weight: 400;
}

.price-display-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.price-label {
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  cursor: text;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 12px;
}

.price-label:hover {
  background-color: #f7f7f7;
}

.currency {
  font-size: 4.5rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-right: 0.25rem;
  user-select: none;
}

.price-input {
  font-family: inherit;
  font-size: 4.5rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #222222;
  border: none;
  background: transparent;
  outline: none;
  padding: 0;
  margin: 0;
  min-width: 1ch;
  max-width: 7ch;
  text-align: left;
}

.edit-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  margin-left: 0.75rem;
  align-self: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  transition: transform 0.15s ease;
}

.price-label:hover .edit-icon {
  transform: scale(1.06);
}

.edit-icon svg {
  width: 14px;
  height: 14px;
  fill: #222222;
}

.breakdown-wrapper {
  width: 100%;
  max-width: 400px;
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.toggle-breakdown-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: transparent;
  border: none;
  font-family: inherit;
  font-size: 0.95rem;
  color: #222222;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.toggle-breakdown-btn:hover {
  background-color: #f7f7f7;
}

.chevron-icon {
  width: 12px;
  height: 12px;
  transition: transform 0.25s ease;
}

.chevron-icon.rotated {
  transform: rotate(180deg);
}

.breakdown-card {
  width: 100%;
  margin-top: 1rem;
  padding: 1.25rem;
  border: 1px solid #b0b0b0;
  border-radius: 12px;
  background-color: #ffffff;
  box-sizing: border-box;
}

.breakdown-card.host-earnings {
  margin-top: 0.75rem;
  background-color: #f7f7f7;
  border-color: #dddddd;
}

.breakdown-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  color: #222222;
  margin-bottom: 0.65rem;
}

.breakdown-row:last-child {
  margin-bottom: 0;
}

.breakdown-row.bold {
  font-weight: 600;
  font-size: 1rem;
}

.breakdown-divider {
  height: 1px;
  background-color: #ebebeb;
  margin: 0.75rem 0;
}

.host-note {
  margin: 0.35rem 0 0 0;
  font-size: 0.82rem;
  color: #717171;
}
</style>
