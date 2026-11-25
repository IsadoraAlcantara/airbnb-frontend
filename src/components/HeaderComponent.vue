<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { SearchComponent } from '@/components'

const authStore = useAuthStore()
const router = useRouter()

const showDropdownAuth = ref(false)
const modalAuth = ref(null)

const clickOutsideAuth = (event) => {
  if (!modalAuth.value.contains(event.target)) {
    showDropdownAuth.value = false
  }
}

watch(showDropdownAuth, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      window.addEventListener('click', clickOutsideAuth)
    }, 0)
  } else {
    window.removeEventListener('click', clickOutsideAuth)
  }
})

const changeService = () => {
  if (!authStore.isAuthenticated) {
    router.push({
      name: 'login',
      query: { redirect: '/new-hosting-form' },
    })
    return
  }

  if (authStore.user?.possui_anuncios) {
    router.push({
      name: 'admin-hosting',
    })
  } else {
    router.push({
      name: 'structure',
    })
  }
}
</script>
<template>
  <header>
    <router-link to="/" class="nav-left">
      <h1>
        <img
          src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/3840px-Airbnb_Logo_B%C3%A9lo.svg.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
          alt="logo do airbnb"
        />
      </h1>
    </router-link>
    <SearchComponent class="search-bar" />
    <div class="dropdown-auth-container">
      <button class="type-service" @click="changeService">Vou hospedar</button>
      <button @click="showDropdownAuth = !showDropdownAuth" ref="modalAuth">
        <i class="mdi mdi-account-outline"></i>
      </button>
      <div v-if="showDropdownAuth && authStore.isAuthenticated" @click="authStore.logout">Sair</div>
      <router-link v-if="showDropdownAuth && !authStore.isAuthenticated" to="/login"
        >Entrar</router-link
      >
    </div>
  </header>
</template>
<style scoped>
header {
  width: 100%;
  background-color: #f5f5f5;
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  display: grid;
  align-items: center;
  padding: 1rem;
  grid-template-columns: 1fr auto 1fr;
  padding: 1rem 3rem;
  box-sizing: border-box;
  margin-bottom: 20px;
}

.nav-left {
  justify-self: start;
}

img {
  width: 100px;
}

button {
  background-color: #e9e7e7;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  & i {
    font-size: 26px;
    color: #393939;
  }
}

.search-bar {
  justify-self: center;
}

.dropdown-auth-container {
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;

  & .type-service {
    font-size: 14px;
    font-weight: 500;
    width: fit-content;
    border-radius: 10px;
    padding: 10px 16px;
  }

  & div,
  a {
    text-decoration: none;
    color: var(--black);
    position: absolute;
    top: 50px;
    right: -4px;
    padding: 10px 16px;
    background-color: white;
    border-radius: 10px;
    box-shadow:
      rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
}
</style>
