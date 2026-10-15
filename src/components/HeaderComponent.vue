<script setup></script>
<template>
  <header>
    <router-link to="/">
      <h1>
        <img
          src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/3840px-Airbnb_Logo_B%C3%A9lo.svg.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
          alt="logo do airbnb" />
      </h1>
    </router-link>

    <nav>
      <span class="where">
        <label for="where">Onde</label>
        <input id="where" type="text" placeholder="Buscar destinos" />
      </span>
      <div class="line"></div>
      <span class="when">
        <label for="when">Quando</label>
        <input id="when" type="text" placeholder="Insira as datas" />
      </span>
      <div class="line"></div>
      <span class="who">
        <label for="who">Quem</label>
        <input id="who" type="text" placeholder="Hóspedes?" />
        <ul class="dropdown-container">
          <li>
            <span>
              <p>Adultos</p>
              <p>13 anos ou mais</p>
            </span>
            <div>
              <button class="counter-button">-</button>
              <p>0</p>
              <button class="counter-button">+</button>
            </div>
          </li>
          <li>
            <span>
              <p>Crianças</p>
              <p>De 2 a 12 anos</p>
            </span>
            <div>
              <button class="counter-button">-</button>
              <p>0</p>
              <button class="counter-button">+</button>
            </div>
          </li>
          <li>
            <span>
              <p>Bebês</p>
              <p>Menor de 2</p>
            </span>
            <div>
              <button class="counter-button">-</button>
              <p>0</p>
              <button class="counter-button">+</button>
            </div>
          </li>
        </ul>
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
  position: relative;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 0.6rem;
  border-radius: 40px;
  background-color: #fafafa;

  & .line {
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

.dropdown-container {
  position: absolute;
  z-index: 4;
  top: 70px;
  right: 0;
  background-color: #fafafa;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 2.3rem;
  border-radius: 20px;

  & span {
    margin: 0;
    /* tirar ao fazer a componentização */
  }

  & span p:nth-child(2) {
    color: #6c6c6c;
    font-size: 14px;
    margin-top: 5px;
  }

  & li {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 16px;
    border-bottom: 1px solid #ececec;
    padding-bottom: 16px;
    font-size: 16px;
  }

  & li:last-child {
    border: none;
    margin: 0;
    padding: 0;
  }

  & div {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    & button {
      background-color: #ececec;
      width: 30px;
      height: 30px;
      font-size: 20px;
      color: #393939;
    }
  }

}
</style>
