<template>
  <button>
    <img src="@/assets/icons/Casa.svg" alt="" />
    <p>Casa</p>
  </button>
</template>
<style scoped>
button {
  background-color: transparent;
  text-align: left;
  border: 1px solid #cacaca;
  border-radius: 8px;
  padding: 16px;
  transition: 0.3ms ease-in;
  cursor: pointer;
  transition: transform 0.15s ease;

  & img {
    width: 35px;
  }

  & p {
    font-size: 16px;
  }
}

button:hover {
  box-shadow: 0 0 0 2px #424242;
  transition: 0.1s ease;
}

button:active {
  transform: scale(0.97 );
}

.focus {
  box-shadow: 0 0 0 2px #424242;
}
</style>
