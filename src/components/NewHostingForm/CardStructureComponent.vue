<script setup>
defineProps({
  text: {
    type: String,
    requires: true,
  },
})

const getIconUrl = (text) => {
  return new URL(`../../assets/icons/${text}.svg`, import.meta.url).href
}
</script>
<template>
  <label class="card-option">
    <input type="radio" name="tipo_espaco" :value="text" />
    <div class="conteudo">
      <img :src="getIconUrl(text)" alt="" />
      <span>{{ text }}</span>
    </div>
  </label>
</template>
<style scoped>
.card-option img {
  width: 35px;
}

.card-option input[type='radio'] {
  display: none;
}

.card-option .conteudo {
  border: 1px solid #dddddd;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: all 0.15s ease;
}

.card-option .conteudo:hover {
  border-color: #222222;
}

.card-option input[type='radio']:checked + .conteudo {
  border: 2px solid #222222;
  background-color: #f8f8f8;
  padding: 19px;
}
</style>
