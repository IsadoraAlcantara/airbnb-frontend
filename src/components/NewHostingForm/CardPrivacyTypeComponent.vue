<script setup>
defineProps({
  url: {
    type: String,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
})

const getIconUrl = (url) => {
  return new URL(`../../assets/icons/${url}.svg`, import.meta.url).href
}
</script>

<template>
  <button 
    type="button" 
    class="privacy-card" 
    :class="{ selected }"
  >
    <div class="card-content">
      <h2 class="card-title">
        <slot name="title"></slot>
      </h2>
      <p class="card-text">
        <slot name="text"></slot>
      </p>
    </div>
    <img :src="getIconUrl(url)" alt="" class="card-icon" />
  </button>
</template>

<style scoped>
.privacy-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  padding: 24px;
  text-align: left;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 12px;
  cursor: pointer;
  transition: border-color 0.15s ease, background-color 0.15s ease;
}

.privacy-card:hover {
  border-color: #222222;
}

.privacy-card.selected {
  outline: 2px solid #222222;
  outline-offset: -1px;
  background-color: #f7f7f7;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 440px;
}

.card-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #222222;
  line-height: 1.3;
}

.card-text {
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  color: #717171;
  line-height: 1.4;
}

.card-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}
</style>