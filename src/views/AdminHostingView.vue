<script setup>
    import { onMounted, ref } from 'vue'
    import api from '@/api/axios'

    const hostingsList = ref([])

    onMounted(async () => {
    const { data } = await api.get('/acomodacoes/meus-anuncios/')
    hostingsList.value = data
    })

    const deletarAcomodacao = async (id) => {
    await api.delete(`/acomodacoes/${id}/`)
    
    hostingsList.value = hostingsList.value.filter((hosting) => hosting.id !== id)
    }
</script>
<template>
  <main class="listings-container">
    <div class="listings-header">
      <h1 class="listings-title">Seus anúncios</h1>

      <div class="header-actions">
        <router-link
          to="/new-hosting-form"
          type="button"
          class="circle-btn"
          aria-label="Criar novo anúncio"
        >
          <i class="mdi mdi-plus"></i>
        </router-link>
      </div>
    </div>
    
    <div class="listings-grid">
      <p v-if="hostingsList.length == 0">Você ainda não possui anúncios</p>
      <div v-for="hosting in hostingsList" :key="hosting.id" class="listing-card">
        <router-link :to="{ name: 'new-hosting-form', params: { id: hosting.id } }">
          <div class="card-image-box">
            <img
              v-if="hosting.imagens?.length > 0"
              :src="hosting.imagens[0].imagem"
              alt="Foto da acomodação"
              class="card-img"
            />
          </div>

          <div class="card-info">
            <h2 class="card-title">
              {{ hosting.titulo_acomodacao }}
            </h2>
            <p class="card-subtitle">
              Local da acomodação: {{ hosting.cidade }}, {{ hosting.estado }}
            </p>
          </div>
          <span class="status-badge" v-if="hosting.status_hospedagem == 'DRAFT'">Em andamento</span>
        </router-link>
        <button @click="deletarAcomodacao(hosting.id)">
          <i class="mdi mdi-trash-can-outline"></i>
        </button>
      </div>
    </div>
  </main>
</template>
<style scoped>
.listings-container {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 36px 40px 64px;
  font-family:
    'Circular',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Helvetica,
    Arial,
    sans-serif;
  color: #222222;
}

/* Cabeçalho ("Seu anúncio" + botões circulares) */
.listings-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.listings-title {
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin: 0;
  color: #222222;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.circle-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: #f7f7f7;
  color: #222222;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.1s ease;

  & i {
    font-size: 20px;
  }
}

.circle-btn:hover {
  background-color: #ebebeb;
}

.circle-btn:active {
  transform: scale(0.96);
}

/* Grade de cards (preparada para receber vários anúncios) */
.listings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 340px));
  gap: 32px 24px;
}

/* Card individual */
.listing-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;

  & a {
    text-decoration: none;
  }

  & button {
    border: none;
    font-size: 18px;
    width: 32px;
    aspect-ratio: 1;
    border-radius: 50%;
    opacity: 0.8;
    position: absolute;
    right: 10px;
    top: 10px;
  }

  & button:hover {
    opacity: 1;
    scale: 1.1;
    transition: 0.1s ease;
  }
}

.card-image-box {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1.02;
  background-color: #d8d8d8; /* Placeholder cinza quando ainda não há foto */
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 12px;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Badge "Em andamento" */
.status-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #ffffff;
  color: #222222;
  font-size: 13px;
  font-weight: 600;
  padding: 7px 14px;
  border-radius: 999px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #e07912; /* Bolinha laranja de rascunho */
  flex-shrink: 0;
}

/* Textos abaixo do card */
.card-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card-title {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.35;
  color: #222222;
  margin: 0;
}

.card-subtitle {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: #6a6a6a;
  margin: 0;
}

/* Responsividade para telas menores */
@media (max-width: 768px) {
  .listings-container {
    padding: 24px 20px 48px;
  }

  .listings-title {
    font-size: 26px;
  }

  .listings-grid {
    grid-template-columns: 1fr;
  }
}
</style>
