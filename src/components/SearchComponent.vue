div
<script setup>
import { reactive, watch, computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import api from '@/api/axios'

const router = useRouter()
const route = useRoute()

const showDropdown = ref(false)
const modal = ref(null)
const who = ref(Number(route.query.qtd_max_hospedes) || 0)
const whoText = computed(() => {
  if (who.value == 0) return 'Hóspedes?'
  return who.value == 1 ? '1 hóspede' : `${who.value} hóspedes`
})

const aumentaContador = () => {
  who.value++
}

const diminuiContador = () => {
  if (who.value > 0) {
    who.value--
  }
}

const form = reactive({
  search: route.query.search || '',
  // qtd_max_hospedes: route.query.qtd_max_hospedes || '',
  // status: route.query.status || ''
})

const handleSearch = () => {
  // Monta a query apenas com os campos preenchidos
  const query = {}
  if (form.search.trim()) query.search = form.search.trim()
  if (who.value > 0) query.qtd_max_hospedes = who.value
  // if (form.status) query.status = form.status

  router.push({
    name: 'home',
    query
  })
}

watch(
  () => route.query,
  (newQuery) => {
    form.search = newQuery.search || ''
    who.value = Number(newQuery.qtd_max_hospedes) || 0
    // form.status = newQuery.status || ''
  }
)

const clickOutside = (event) => {
  if (!modal.value.contains(event.target)) {
    showDropdown.value = false
  }
}

watch(showDropdown, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      window.addEventListener('click', clickOutside)
    }, 0)
  } else {
    window.removeEventListener('click', clickOutside)
  }
})
</script>
<template>
  <form role="search" @submit.prevent="handleSearch">
    <span class="where">
      <label for="where">Onde</label>
      <input v-model="form.search" id="where" type="text" placeholder="Buscar destinos" />
    </span>
    <div class="line"></div>
    <span class="when">
      <label for="when">Quando</label>
      <input id="when" type="text" placeholder="Insira as datas" />
    </span>
    <div class="line"></div>
    <span class="who" ref="modal" @click="showDropdown = true">
      <label>Quem</label>
      <div class="input-who" :class="{ 'has-guests': who > 0 }">
        {{ whoText }}
      </div>
      <ul class="dropdown-container" v-if="showDropdown">
        <li>
          <span>
            <p>Adultos</p>
            <p>13 anos ou mais</p>
          </span>
          <div>
            <button type="button" @click="diminuiContador" class="counter-button">-</button>
            <p>{{ who }}</p>
            <button type="button" @click="aumentaContador" class="counter-button">+</button>
          </div>
        </li>
        <!-- <li>
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
        </li> -->
      </ul>
    </span>
    <button type="sumbit">
      <i class="mdi mdi-magnify"></i>
    </button>
  </form>
</template>
<style scoped>
form {
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
    margin-bottom: 4px;
  }

  & input {
    background-color: transparent;
    border: none;
    outline: none;
  }

  & .input-who {
    font-size: 13px;
    width: 160px;
    color: gray;
  }

  & .has-guests {
    color: var(--black);
    /* font-weight: 600; */
  }
}

button {
  background-color: var(--pink);
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;

  & i {
    font-size: 22px;
    color: white;
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
