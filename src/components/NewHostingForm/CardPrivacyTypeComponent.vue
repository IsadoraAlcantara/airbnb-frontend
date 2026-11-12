<template>
  <button>
    <div>
      <h2>Um espaço inteiro</h2>
      <p>Os hóspedes têm o lugar todo só para eles.</p>
    </div>
      <img src="@/assets/icons/Casa.svg" alt="" />
  </button>
</template>
<style scoped>
button {
  background-color: transparent;
  text-align: left;
  border: 1px solid #cacaca;
  border-radius: 16px;
  width: 100%;
  padding: 16px;
  cursor: pointer;

  & img {
    width: 35px;
  }

  & p {
    font-size: 16px;
  }
}

button:hover {
  box-shadow: 0 0 0 2px #424242;
}

.focus {
  box-shadow: 0 0 0 2px #424242;
}
</style>
