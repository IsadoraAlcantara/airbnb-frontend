<script setup>
import { reactive, watch, computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { CounterComponent } from '@/components'
// import api from '@/api/axios'

const router = useRouter()
const route = useRoute()

const showGuestsDropdown = ref(false)
const showDateDropdown = ref(false)

const guestsDropdown = ref(null)
const dateDropdown = ref(null)

const who = ref(Number(route.query.qtd_max_hospedes) || 0)
const whoText = computed(() => {
  if (who.value == 0) return 'Hóspedes?'
  return who.value == 1 ? '1 hóspede' : `${who.value} hóspedes`
})

const dateRange = ref({
  start: route.query.check_in ? new Date(`${route.query.check_in}T00:00:00`) : null,
  end: route.query.check_out ? new Date(`${route.query.check_out}T00:00:00`) : null,
})

const form = reactive({
  search: route.query.search || '',
})

const formattedDates = computed(() => {
  if (!dateRange.value?.start) return ''
  const options = { day: 'numeric', month: 'short' }
  const startStr = dateRange.value.start.toLocaleDateString('pt-BR', options)
  if (!dateRange.value.end) return startStr
  const endStr = dateRange.value.end.toLocaleDateString('pt-BR', options)
  return `${startStr} - ${endStr}`
})

const formatDateISO = (date) => {
  if (!date) return null
  return date.toISOString().split('T')[0]
}

const clearDates = () => {
  dateRange.value = { start: null, end: null }
}

const handleSearch = () => {
  const query = {}
  if (form.search.trim()) query.search = form.search.trim()
  if (who.value > 0) query.qtd_max_hospedes = who.value
  if (dateRange.value?.start && dateRange.value?.end) {
    query.check_in = formatDateISO(dateRange.value.start)
    query.check_out = formatDateISO(dateRange.value.end)
  }

  showDateDropdown.value = false
  router.push({
    name: 'home',
    query,
  })
}

watch(
  () => route.query,
  (newQuery) => {
    form.search = newQuery.search || ''
    who.value = Number(newQuery.qtd_max_hospedes) || 0
    dateRange.value = {
      start: newQuery.check_in ? new Date(`${newQuery.check_in}T00:00:00`) : null,
      end: newQuery.check_out ? new Date(`${newQuery.check_out}T00:00:00`) : null,
    }
  },
)

const clickOutside = (event) => {
  if (!guestsDropdown.value.contains(event.target)) {
    showGuestsDropdown.value = false
  }
  if (!dateDropdown.value.contains(event.target)) {
    showDateDropdown.value = false
  }
}

watch([showDateDropdown, showGuestsDropdown], ([newValueDate, newValueGuests]) => {
  if (newValueDate || newValueGuests) {
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

    <div class="when-wrapper" ref="dateDropdown">
      <div @click="showDateDropdown = true" class="when-trigger">
        <span>
          <label>Quando</label>
          <p :class="{ 'filled-out': dateRange.start != null }">
            {{ formattedDates || 'Insira as datas' }}
          </p>
        </span>
        <button v-if="dateRange?.start && showDateDropdown" type="button" @click.stop="clearDates">
          <i class="mdi mdi-close"></i>
        </button>
      </div>

      <div v-if="showDateDropdown" class="calendar-dropdown">
        <VDatePicker
          v-model.range="dateRange"
          :columns="2"
          :min-date="new Date()"
          locale="pt-BR"
          color="gray"
          borderless
        />
      </div>
    </div>

    <div class="line"></div>

    <span class="who" ref="guestsDropdown" @click="showGuestsDropdown = true">
      <label>Quem</label>
      <p class="who-number" :class="{ 'filled-out': who > 0 }">
        {{ whoText }}
      </p>
      <ul class="who-dropdown-container" v-if="showGuestsDropdown">
        <li>
          <span>
            <p>Adultos</p>
            <p>13 anos ou mais</p>
          </span>
          <CounterComponent v-model="who" />
        </li>
      </ul>
    </span>
    <button class="sumbit" type="sumbit">
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
    margin: 0 20px 0 10px;
  }
}

.filled-out {
  color: var(--black) !important;
}

span,
.when-wrapper {
  width: 180px;
}

span {
  display: grid;

  & label {
    font-size: 12px;
    margin-bottom: 4px;
  }

  & input {
    background-color: transparent;
    border: none;
    outline: none;
  }

  & .who-number {
    font-size: 13px;
    width: 160px;
    color: gray;
  }
}

span.where {
  margin-left: 20px;
}

.when-wrapper {
  position: relative;
  font-size: 13px;

  & .when-trigger {
    display: flex;
    gap: 10px;

    & p {
      color: gray;
    }
  }

  & button {
    background-color: transparent;
    border: 0;

    & i {
      color: var(--black);
      font-size: 16px;
    }
  }
}

.calendar-dropdown {
  position: absolute;
  top: 115%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  z-index: 100;
}

.who-dropdown-container {
  position: absolute;
  z-index: 4;
  top: 70px;
  right: 0;
  background-color: #fafafa;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 2.3rem;
  border-radius: 20px;

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
      border-radius: 50%;
      border: none;
      width: 30px;
      height: 30px;
      font-size: 20px;
      color: #393939;
    }
  }
}

button.sumbit {
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
</style>
