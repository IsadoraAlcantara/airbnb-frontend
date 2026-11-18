<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  min: {
    type: Number,
    default: 0,
  },
})

const valor = defineModel({ type: Number, default: 0 })

onMounted(() => {
  if (valor.value < props.min) {
    valor.value = props.min
  }
})

const aumentaContador = () => {
  valor.value++
}

const diminuiContador = () => {
  if (valor.value > props.min) {
    valor.value--
  }
}
</script>
<template>
  <div class="counter-container">
    <button type="button" @click="diminuiContador" class="counter-button" :disabled="valor <= props.min">-</button>
    <p>{{ valor }}</p>
    <button type="button" @click="aumentaContador" class="counter-button">+</button>
  </div>
</template>
<style scoped>
.counter-container {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: black;

  & button {
    background-color: #ececec;
    border-radius: 50%;
    border: none;
    width: 30px;
    height: 30px;
    font-size: 20px;
    color: #393939;
  }

  & p {
    font-weight: 400;
    width: 20px;
    text-align: center;
  }
}

.counter-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
