<script setup>
import { ref } from 'vue'

const showPassword = ref(false)
</script>
<template>
  <main>
    <div class="form-container">
      <form action="#">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png" alt="logo do airbnb" />
        <h1>Seja bem-vindo</h1>
        <p>
          <input type="text" placeholder="Digite seu email" />
        </p>
        <p class="password-input">
          <input :type="showPassword ? 'text' : 'password'" placeholder="Digite sua senha" />
          <i
            @click="showPassword = !showPassword"
            :class="showPassword ? 'mdi mdi-eye-outline' : 'mdi mdi-eye-off-outline'"
          ></i>
        </p>
        <p>
          <input type="text" placeholder="Digite seu username" />
        </p>
        <p>
          <input type="text" placeholder="Digite seu primeiro nome" />
        </p>
        <button>Criar conta</button>
        <p>Já possui uma conta? <router-link to="/login">Entre</router-link></p>
      </form>
    </div>
    <div class="img-section"></div>
  </main>
</template>
<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  color: white;
}

.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

form p:last-child {
  font-size: 14px;
  color: #575757;
  display: inline;

  & a {
    text-decoration: none;
    color: var(--pink);
  }
}

.img-section {
  background-image: url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D);
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

form {
  padding: 25px;
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 20px;
  color: var(--black);
  width: 100%;
  max-width: 400px;

  & img {
    width: 50px;
  }

  & h1 {
    margin: 30px;
    font-weight: 600;
  }

  & p {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
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

  & .password-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    border: 1px solid #9c9c9c;

    & input {
      border: none;
      width: 100%;
    }

    & i {
      margin-right: 12px;
    }
  }

  & button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border-radius: 24px;
    border: none;
    color: white;
    background-color: var(--pink);
  }
}
</style>
