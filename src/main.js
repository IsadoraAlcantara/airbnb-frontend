import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router'
import { setupCalendar, DatePicker } from 'v-calendar'
import 'v-calendar/style.css'
import '@mdi/font/css/materialdesignicons.css';
import { useAuthStore } from './stores/auth';

const app = createApp(App)
const pinia = createPinia();
app.use(pinia)

const authStore = useAuthStore()
if (authStore.token) {
  await authStore.fetchUser()
}

app.use(router)
app.use(setupCalendar, {})
app.component('VDatePicker', DatePicker)

app.mount('#app')
