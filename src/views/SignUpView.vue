<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import api from "@/api/axios"

const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()

const username = ref('')
const usernameDisponivel = ref(null)
const verificandoUsername = ref(false)

const email = ref('')
const password = ref('')
const first_name = ref('')
const errorMessage = ref('')

const checarUsername = async () => {
  const valor = username.value.trim()

  if (!valor) {
    usernameDisponivel.value = null
    return
  }

  verificandoUsername.value = true
  try {
    const { data } = await api.get('usuarios/verificar-username/', {
      params: { username: valor },
    })
    usernameDisponivel.value = data.disponivel
  } catch (error) {
    usernameDisponivel.value = null
  } finally {
    verificandoUsername.value = false
  }
}

const handelSignUp = async () => {
  try {
    await authStore.signUp(username.value, password.value, email.value, first_name.value)
    const redirectPath = route.query.redirect || '/'

    if (redirectPath === '/new-hosting-form') {
      if (authStore.user?.possui_anuncios) {
        router.push({ name: 'admin-hosting' })
      } else {
        router.push({ name: 'structure' })
      }
      return
    }

    router.push(redirectPath)
  } catch (error) {
    errorMessage.value = 'Usuário ou senha inválidos.'
  }
}

const showPassword = ref(false)
</script>
<template>
  <main>
    <div class="form-container">
      <form @submit.prevent="handelSignUp">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png" alt="logo do airbnb" />
        <h1>Seja bem-vindo</h1>
        <p>
          <input v-model="email" type="email" placeholder="Digite seu email" required />
        </p>
        <p class="password-input">
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Digite sua senha"
            required
          />
          <i
            @click="showPassword = !showPassword"
            :class="showPassword ? 'mdi mdi-eye-outline' : 'mdi mdi-eye-off-outline'"
            required
          ></i>
        </p>
        <p>
          <input
            v-model="username"
            type="text"
            placeholder="Digite seu username"
            @blur="checarUsername"
            @input="usernameDisponivel = null"
            required
          />
        </p>
        <p v-if="usernameDisponivel === false" class="error-message">
          Este nome de usuário já está em uso.
        </p>
        <p>
          <input v-model="first_name" type="text" placeholder="Digite seu primeiro nome" required />
        </p>
        <button @click="handelSignUp">Criar conta</button>
        <p class="bottom-bt-text">Já possui uma conta? <router-link to="/login">Entre</router-link></p>
      </form>
    </div>
    <div class="img-section"></div>
  </main>
</template>
<style scoped>
.bottom-bt-text {
  text-align: center;
}

.error-message {
  color: red;  
  font-size: 12px;
  position: relative;
}

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
  justify-content: center;
  
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
