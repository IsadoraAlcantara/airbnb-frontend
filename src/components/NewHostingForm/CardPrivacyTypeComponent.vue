<script setup>
defineProps({
  url: {
    type: String,
    required: true,
  }
})

const getIconUrl = (url) => {
  return new URL(`../../assets/icons/${url}.svg`, import.meta.url).href;
};

</script>
<template>
  <button>
    <div>
      <h2>
        <slot name="title"></slot>
      </h2>
      <p>
        <slot name="text"></slot>
      </p>
    </div>
    <img :src="getIconUrl(url)" alt="" />
  </button>
</template>
<style scoped>
button {
  background-color: transparent;
  text-align: left;
  border: 1px solid #cacaca;
  border-radius: 16px;
  width: 100%;
  padding: 26px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  & img {
    width: 40px;
  }

  & h2 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  & p {
    font-size: 16px;
    font-size: 14px;
    font-weight: 400;
    color: #424242e1;
    max-width: 75%;
  }
}


button:hover {
  box-shadow: 0 0 0 2px #424242;
}

.focus {
  box-shadow: 0 0 0 2px #424242;
}
</style>
