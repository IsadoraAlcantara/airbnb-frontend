<script setup>
import { CounterComponent } from '@/components'
import { useFormStore } from '@/stores/formStore';

const formStore = useFormStore()
</script>
<template>
  <main>
    <h1>Compartilhe algumas informações básicas sobre sua acomodação</h1>
    <p class="sub-title">Você adicionará mais informações depois, como tipos de cama.</p>
    <div class="counters-container">
      <div class="line">
        <p>Hóspedes para pernoite</p>
          <CounterComponent :min="1" v-model="formStore.formData.max_hospedes" />
      </div>
      <div class="line">
        <p>Quartos</p>
          <CounterComponent v-model="formStore.formData.qtd_quartos" />
      </div>
      <div class="line">
        <p>Camas</p>
        <CounterComponent v-model="formStore.formData.qtd_camas" :min="1" />
      </div>
      <div class="line">
        <p>Banheiros</p>
        <CounterComponent v-model="formStore.formData.qtd_banheiros" :min="1" />
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  text-align: left;
  max-width: 640px;
}

h1 {
  font-size: 30px;
  font-weight: 600;
  color: #222222;
  max-width: 640px;
  margin: 35px 0 15px 0;
}

.sub-title {
  color: #424242e1;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 50px;
  width: 100%;
}

.counters-container {
  display: grid;
  gap: 16px;
  width: 100%;

  & .line {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    color: #222222;
    border-bottom: 1px solid #dfdfdfe0;
    padding: 20px 0;
  }

  & .line:last-child {
    border: none;
  }
}
</style>
