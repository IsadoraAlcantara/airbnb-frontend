<script setup>
import { ref } from 'vue';
import { useFormStore } from '@/stores/formStore'

const nomeAcomodacao = ref('');
const maxCaracteres = 50;
const formStore = useFormStore()
</script>

<template>
  <div class="container">
    <div class="content-wrapper">
      <h1 class="title">Qual é o nome da sua acomodação (pousada)?</h1>
      <p class="subtitle">Este é o nome que os hóspedes verão no seu anúncio.</p>

      <div class="input-group">
        <textarea
          v-model.number="formStore.formData.titulo_acomodacao"
          :maxlength="maxCaracteres"
          class="textarea-field"
          rows="5"
          aria-label="Nome da acomodação"
        ></textarea>
        <div class="char-counter">
          {{ nomeAcomodacao.length }}/{{ maxCaracteres }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #ffffff;
  padding: 24px;
  box-sizing: border-box;
}

.content-wrapper {
  width: 100%;
  max-width: 600px;
}

.title {
  font-size: 32px;
  font-weight: 600;
  color: #222222;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 8px 0;
}

.subtitle {
  font-size: 16px;
  font-weight: 400;
  color: #717171;
  line-height: 1.4;
  margin: 0 0 32px 0;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.textarea-field {
  width: 100%;
  min-height: 170px;
  padding: 20px;
  font-family: inherit;
  font-size: 18px;
  color: #222222;
  border: 1px solid #b0b0b0;
  border-radius: 12px;
  resize: vertical;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.textarea-field:focus {
  border-color: #222222;
  box-shadow: 0 0 0 1px #222222;
}

.char-counter {
  margin-top: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #717171;
}
</style>