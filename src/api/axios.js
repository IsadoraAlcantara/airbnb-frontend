import axios from 'axios';
import { useAuthStore } from '../stores/auth';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

// Anexa o access_token a cada requisição
api.interceptors.request.use((config) => {
  const authStore = useAuthStore();
  if (authStore.token) {
    config.headers.Authorization = `Bearer ${authStore.token}`;
  }
  return config;
});

// Trata erros 401 e renova o token automaticamente
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const authStore = useAuthStore();

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (authStore.refreshToken) {
        try {
          const { data } = await axios.post('http://127.0.0.1:8000/api/token/refresh/', {
            refresh: authStore.refreshToken,
          });

          // Atualiza a store com o novo access token
          authStore.setTokens(data.access);
          originalRequest.headers.Authorization = `Bearer ${data.access}`;

          return api(originalRequest);
        } catch (refreshError) {
          // Se o refresh falhar, desconecta o usuário
          authStore.logout();
          window.location.href = '/login';
        }
      } else {
        authStore.logout();
      }
    }

    return Promise.reject(error);
  }
);

export default api;