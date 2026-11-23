<script setup>
import { useFormStore } from '@/stores/formStore'
import { CardPrivacyTypeComponent } from '@/components'

const formStore = useFormStore()
</script>

<template>
  <section class="privacy-section">
    <h1 class="section-title">Que tipo de espaço você oferece aos hóspedes?</h1>

    <div class="cards-container">
      <CardPrivacyTypeComponent
        url="Casa"
        :selected="formStore.formData.categoria_acomodacao === 'Espaço inteiro'"
        @click="formStore.formData.categoria_acomodacao = 'Espaço inteiro'"
      >
        <template #title>Um espaço inteiro</template>
        <template #text>Os hóspedes têm o lugar todo só para eles.</template>
      </CardPrivacyTypeComponent>

      <CardPrivacyTypeComponent
        url="Porta"
        :selected="formStore.formData.categoria_acomodacao === 'Quarto privativo'"
        @click="formStore.formData.categoria_acomodacao = 'Quarto privativo'"
      >
        <template #title>Um quarto</template>
        <template #text>
          Os hóspedes têm um quarto só para eles em uma acomodação, além de acesso a espaços
          compartilhados.
        </template>
      </CardPrivacyTypeComponent>

      <CardPrivacyTypeComponent
        url="Cama"
        :selected="formStore.formData.categoria_acomodacao === 'Quarto compartilhado'"
        @click="formStore.formData.categoria_acomodacao = 'Quarto compartilhado'"
      >
        <template #title>Quarto compartilhado em um albergue</template>
        <template #text>
          Os hóspedes dormem em um quarto compartilhado em um albergue gerenciado profissionalmente
          com funcionários no local 24 horas.
        </template>
      </CardPrivacyTypeComponent>
    </div>
  </section>
</template>

<style scoped>
.privacy-section {
  max-width: 630px;
  margin: 0 auto;
}

.section-title {
  font-size: 32px;
  font-weight: 600;
  color: #222222;
  margin-bottom: 32px;
  line-height: 1.2;
  margin: 35px 0;
}

.cards-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
