<script setup>
import { useFormStore } from '@/stores/formStore'

const formStore = useFormStore()
</script>
<template>
  <main>
    <h1>Confirme seu endereço</h1>
    <p class="sub-title">
      Seu endereço só é compartilhado com os hóspedes depois que a reserva é confirmada.
    </p>
    <div class="inputs-container">
      <p>
        <label for="endereco">Endereço</label>
        <input
          id="endereco"
          type="text"
          v-model.number="formStore.formData.logradouro"
          placeholder="Digite o endereço"
        />
        <span v-if="formStore.fieldErrors.logradouro" class="error-msg">
          {{ formStore.fieldErrors.logradouro[0] }}
        </span>
      </p>
      <p>
        <label for="numero">Número</label>
        <input
          id="numero"
          type="text"
          v-model.number="formStore.formData.numero_hospedagem"
          placeholder="Digite o número da residência"
        />
        <span v-if="formStore.fieldErrors.numero_hospedagem" class="error-msg">
          {{ formStore.fieldErrors.numero_hospedagem[0] }}
        </span>
      </p>
      <p>
        <label for="bairro">Bairro</label>
        <input
          id="bairro"
          type="text"
          v-model.number="formStore.formData.bairro"
          placeholder="Digite o bairro"
        />
        <span v-if="formStore.fieldErrors.bairro" class="error-msg">
          {{ formStore.fieldErrors.bairro[0] }}
        </span>
      </p>
      <p>
        <label for="cidade">Cidade</label>
        <input
          id="cidade"
          type="text"
          v-model.number="formStore.formData.cidade"
          placeholder="Digite a cidade"
        />
        <span v-if="formStore.fieldErrors.cidade" class="error-msg">
          {{ formStore.fieldErrors.cidade[0] }}
        </span>
      </p>
      <p>
        <label for="estado">Estado</label>
        <input
          id="estado"
          type="text"
          v-model.number="formStore.formData.estado"
          placeholder="Digite o estado"
        />
        <span v-if="formStore.fieldErrors.estado" class="error-msg">
          {{ formStore.fieldErrors.estado[0] }}
        </span>
      </p>
      <p>
        <label for="cep">CEP</label>
        <input
          id="cep"
          type="text"
          v-model.number="formStore.formData.cep"
          placeholder="Digite o CEP"
        />
        <span v-if="formStore.fieldErrors.cep" class="error-msg">
          {{ formStore.fieldErrors.cep[0] }}
        </span>
      </p>
    </div>
  </main>
</template>
<style scoped>
.error-msg {
  color: #c13515;
  font-size: 12px;
  margin-top: 4px;
  display: block;
}

main {
  width: 500px;
  text-align: left;
}

h1 {
  font-size: 30px;
  font-weight: 600;
  color: var(--black);
  margin: 35px 0 15px 0;
}

.sub-title {
  color: #424242e1;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 26px;
}

.inputs-container {
  display: grid;
  gap: 16px;
  width: 100%;
}

p {
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: var(--black);

  & label {
    font-size: 14px;
  }

  & input {
    border-radius: 10px;
    border: 1px solid #9c9c9c;
    outline: none;
    padding: 12px;
    background-color: transparent;
  }
}
</style>
