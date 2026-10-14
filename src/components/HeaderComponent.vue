<script setup></script>
<template>
  <header>
    <router-link to="/">
      <h1>
        <img
          src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/3840px-Airbnb_Logo_B%C3%A9lo.svg.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
          alt="logo do airbnb"
        />
      </h1>
    </router-link>

    <nav>
      <span class="where">
        <label for="where">Onde</label>
        <input id="where" type="text" placeholder="Buscar destinos" />
      </span>
      <div></div>
      <span class="when">
        <label for="when">Quando</label>
        <input id="when" type="text" placeholder="Insira as datas" />
      </span>
      <div></div>
      <span class="who">
        <label for="who">Quem</label>
        <input id="who" type="text" placeholder="Hóspedes?" />
      </span>
      <button>
        <i class="mdi mdi-magnify"></i>
      </button>
    </nav>

    <button>
      <i class="mdi mdi-account-outline"></i>
    </button>
  </header>
</template>
<style scoped>
header {
  width: 100%;
  background-color: #f3f3f3;
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  box-sizing: border-box;
}

img {
  width: 100px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 0.6rem;
  border-radius: 40px;
  background-color: #fafafa;

  & div {
    background-color: #a5a5a5;
    height: 25px;
    width: 1px;
  }
}

span {
  display: grid;
  margin-left: 20px;

  & label {
    font-size: 12px;
  }

  & input {
    background-color: transparent;
    border: none;
    outline: none;
  }
}

nav button {
  background-color: #f5415f;
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;

  & i {
    font-size: 22px;
    color: white;
  }
}

button {
  background-color: #dbdbdb;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  & i {
    font-size: 26px;
    color: #393939;
  }
}
</style>
