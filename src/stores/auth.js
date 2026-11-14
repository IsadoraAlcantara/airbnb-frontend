import { defineStore } from 'pinia';
import api from '../api/axios';
import { computed } from 'vue';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('access_token') || null,
    refreshToken: localStorage.getItem('refresh_token') || null,
    user: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    async login(username, password) {
      try {
        const response = await api.post('token/', { username, password });

        this.token = response.data.access;
        this.refreshToken = response.data.refresh;

        localStorage.setItem('access_token', this.token);
        localStorage.setItem('refresh_token', this.refreshToken);

        // Opcional: Buscar dados do usuário logado imediatamente
        await this.fetchUser();
      } catch (error) {
        throw error;
      }
    },

    async fetchUser() {
      if (!this.token) return;
      try {
        // Supondo uma rota de perfil protegida no Django
        const response = await api.get('usuarios/me/');
        this.user = response.data;
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    },

    logout() {
      this.token = null;
      this.refreshToken = null;
      this.user = null;

      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    },

    setTokens(accessToken, refreshToken = null) {
      this.token = accessToken;
      localStorage.setItem('access_token', accessToken);
      if (refreshToken) {
        this.refreshToken = refreshToken;
        localStorage.setItem('refresh_token', refreshToken);
      }
    },
  },
});