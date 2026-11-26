<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { DatePicker as VDatePicker } from 'v-calendar'
import 'v-calendar/style.css'
import { useAuthStore } from '@/stores/auth'
import api from '@/api/axios'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const props = defineProps({
  maxGuests: {
    type: Number,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
})

const dateRange = ref({
  start: null,
  end: null,
})

const guests = ref(1)

const nights = computed(() => {
  if (!dateRange.value.start || !dateRange.value.end) return 0
  const diffTime = Math.abs(dateRange.value.end - dateRange.value.start)
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
})

const total = computed(() => {
  return nights.value * props.price
})

const formatDate = (date) => {
  if (!date) return 'Adicionar data'
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date))
}

const formatToISO = (date) => {
  if (!date) return null
  const d = new Date(date)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const handleBooking = async () => {
  if (!authStore.isAuthenticated) {
    router.push({
      name: 'login',
      query: { redirect: route.fullPath },
    })
    return
  }

  if (!dateRange.value.start || !dateRange.value.end) {
    alert('Por favor, selecione as datas de check-in e checkout.')
    return
  }

  try {
    await api.post('reservas/', {
      acomodacao: props.id,
      data_inicio: formatToISO(dateRange.value.start),
      data_fim: formatToISO(dateRange.value.end),
    })
    alert('Reserva confirmada com sucesso!')
  } catch (error) {
    alert('Erro ao realizar reserva. Verifique as datas.')
  }
}
</script>

<template>
  <form class="booking-box" @submit.prevent="handleBooking">
    <h3 v-if="total == 0">Adicione datas para ver os preços</h3>
    <h3 v-if="total != 0">Total: {{ total.toFixed(2) }}</h3>

    <div class="inputs-grid">
      <VDatePicker
        v-model.range="dateRange"
        :min-date="new Date()"
        :columns="2"
        color="pink"
        locale="pt-BR"
      >
        <template #default="{ togglePopover }">
          <div class="dates-row" @click="togglePopover">
            <div class="field checkin">
              <label>CHECK-IN</label>
              <span :class="{ placeholder: !dateRange.start }">
                {{ formatDate(dateRange.start) }}
              </span>
            </div>

            <div class="field checkout">
              <label>CHECKOUT</label>
              <span :class="{ placeholder: !dateRange.end }">
                {{ formatDate(dateRange.end) }}
              </span>
            </div>
          </div>
        </template>
      </VDatePicker>

      <div class="field guests">
        <label for="guests">HÓSPEDES</label>
        <select id="guests" v-model="guests" required>
          <option v-for="n in maxGuests" :key="n" :value="n">
            {{ n }} {{ n === 1 ? 'hóspede' : 'hóspedes' }}
          </option>
        </select>
      </div>
    </div>

    <div class="button-container">
      <button type="submit" class="btn-submit">
        {{ total === 0 ? 'Conferir disponibilidade' : 'Reservar' }}
      </button>
      <p v-if="total > 0" class="disclaimer">Você ainda não será cobrado</p>
    </div>
  </form>
</template>

<style scoped>
.booking-box {
  max-width: 380px;
  padding: 24px;
  border: 1px solid #dddddd;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  background: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

h3 {
  margin: 0 0 20px 0;
  font-size: 22px;
  font-weight: 600;
  color: #222222;
  line-height: 1.3;
}

.night-label {
  font-size: 16px;
  font-weight: 400;
  color: #717171;
}

.inputs-grid {
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 16px;
}

.dates-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid #b0b0b0;
  cursor: pointer;
}

.field {
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
}

.checkin {
  border-right: 1px solid #b0b0b0;
}

.field label {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: #222222;
  margin-bottom: 4px;
}

.field span {
  font-size: 14px;
  color: #222222;
}

.field span.placeholder {
  color: #717171;
}

.guests select {
  border: none;
  background: transparent;
  font-size: 14px;
  color: #222222;
  outline: none;
  cursor: pointer;
  width: 100%;
  padding: 2px 0;
}

.btn-submit {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 24px;
  background: linear-gradient(90deg, #e61e4d 0%, #d70466 100%);
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 0.1s ease,
    opacity 0.2s ease;
}

.btn-submit:hover {
  opacity: 0.95;
}

.btn-submit:active {
  transform: scale(0.98);
}

.disclaimer {
  text-align: center;
  font-size: 12px;
  color: #717171;
  margin: 12px 0 0 0;
}

.price-breakdown {
  margin-top: 20px;
  font-size: 15px;
  color: #222222;
}

.price-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.price-breakdown hr {
  border: none;
  border-top: 1px solid #dddddd;
  margin: 16px 0;
}

.total-row {
  margin-bottom: 0;
  font-size: 16px;
}
</style>
