<script setup>
import { onMounted, ref } from 'vue'
import api from "@/plugins/axios"

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})
const hostingInfo = ref(null)

onMounted(async () => {
  const { data } = await api.get(`/acomodacoes/${props.id}/`)
  hostingInfo.value = data
})
</script>

<template>
  <main v-if="hostingInfo">
    <div class="title">
      <h2>{{ hostingInfo.titulo_acomodacao }}</h2>
      <div>
        <span>
          <i class="mdi mdi-tray-arrow-up"></i>
          <p>Compartilhar</p>
        </span>
        <span>
          <i class="mdi mdi-heart-outline"></i>
          <p>Salvar</p>
        </span>
      </div>
    </div>
    <div class="gallery">
      <div class="img-box large-img">
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-1398720997591862961/original/f1db5b7b-efb8-465e-8cdd-726b928cca69.jpeg?im_w=1200"
          alt=""
        />
      </div>
      <div class="img-box">
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-1398720997591862961/original/f1db5b7b-efb8-465e-8cdd-726b928cca69.jpeg?im_w=1200"
          alt=""
        />
      </div>
      <div class="img-box">
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-1398720997591862961/original/f1db5b7b-efb8-465e-8cdd-726b928cca69.jpeg?im_w=1200"
          alt=""
        />
      </div>
      <div class="img-box">
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-1398720997591862961/original/f1db5b7b-efb8-465e-8cdd-726b928cca69.jpeg?im_w=1200"
          alt=""
        />
      </div>
      <div class="img-box">
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-1398720997591862961/original/f1db5b7b-efb8-465e-8cdd-726b928cca69.jpeg?im_w=1200"
          alt=""
        />
      </div>
      <button>
        <i class="mdi mdi-dots-grid"></i>
        <p>Mostrar todas as fotos</p>
      </button>
    </div>

    <section>
      <div class="hosting-info-container">
        <div class="sub-title">
          <h3>{{ hostingInfo.categoria_acomodacao}}: {{ hostingInfo.tipo_acomodacao}} em {{ hostingInfo.cidade }}, Brasil</h3>
          <p>4 hóspedes - 2 quartos - 2 camas - 2 banheiros</p>
        </div>
        <div class="guest-favorite-container">
          <div>
            <p class="guest-favorite-container-1p">Preferido dos hóspedes</p>
          </div>
          <p class="guest-favorite-container-2p">
            Uma das acomodações no Airbnb que fazem mais sucesso entre os hóspedes
          </p>
          <div>
            <p style="font-size: 22px">5,0</p>
            <div style="font-size: 12px">
              <i class="mdi mdi-star" v-for="n in 5" :key="n"></i>
            </div>
          </div>
          <div class="line"></div>
          <div>
            <p style="font-size: 22px">7</p>
            <p style="font-size: 12px">avaliações</p>
          </div>
        </div>
        <div class="owner-info-container">
          <img
            src="https://img.magnific.com/fotos-gratis/mulher-de-tiro-medio-passando-bons-momentos-ao-ar-livre_23-2150757174.jpg?semt=ais_hybrid&w=740&q=80"
            alt=""
          />
          <div>
            <h4>Anfitriã(o): {{ hostingInfo.proprietario.first_name}}</h4>
            <p>Superhost - 2 anos hospedando</p>
          </div>
        </div>
        <div class="hosting-summary">
          <p>
            Venha viver momentos inesquecíveis em Bombinhas! Com piscinas naturais, ideal para
            mergulho de cilindro e snorkel, ótimas ondas para o surf, trilhas incríveis e uma
            gastronomia de dar água na boca, esse paraíso é o destino perfeito. Hospede-se no
            Bromélia 106 e aproveite todo o conforto e charme em um lugar especial. Descubra
            Bombinhas e torne suas férias ainda mais memoráveis no Bromélia 106!
          </p>
          <button>Mostrar mais</button>
        </div>

        <div class="bedroom-pictures-container">
          <h3>Onde você vai dormir</h3>
          <div class="bedroom-pictures">
            <div>
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-1398720997591862961/original/efba475d-8418-44a1-8281-a66a4e97b6c3.jpeg?im_w=480"
                alt=""
              />
              <h4>Quarto 1</h4>
              <p>1 cama queen</p>
            </div>
            <div>
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-1398720997591862961/original/efba475d-8418-44a1-8281-a66a4e97b6c3.jpeg?im_w=480"
                alt=""
              />
              <h4>Quarto 2</h4>
              <p>1 cama queen</p>
            </div>
          </div>
        </div>

        <div class="calendar">
          <h3>Seleciona a data de check-in</h3>
          <p>Estadia mínima: 2 noites</p>

          <div>
            <div>
              <i class="mdi mdi-chevron-left"></i>
              <p>outubro de 2026</p>
              <i class="mdi mdi-chevron-right"></i>
            </div>
            <table>
              <thead>
                <tr>
                  <th>D</th>
                  <th>S</th>
                  <th>T</th>
                  <th>Q</th>
                  <th>Q</th>
                  <th>S</th>
                  <th>S</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in 6" :key="i">
                  <th v-for="n in 7" :key="n">
                    {{ i }}
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="booking-box">
        <h3>Adicione datas para ver os preços</h3>
        <div class="inputs">
          <div class="field checkin">
            <label for="checkin">CHECKIN</label>
            <input type="text" id="checkin" placeholder="Adicionar data" />
          </div>
          <div class="field checkout">
            <label for="checkout">CHECKOUT</label>
            <input type="text" id="checkout" placeholder="Adicionar data" />
          </div>
          <div class="field guests">
            <label for="guests">HÓSPEDES</label>
            <input type="text" id="guests" />
          </div>
        </div>
        <div class="button-container">
          <button>Conferir disponibilidade</button>
          <p>Você ainda não será cobrado</p>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
main {
  max-width: 1120px;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;

  & h3 {
    font-size: 22px;
  }
}

section {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 5vw;
}

.title {
  display: flex;
  justify-content: space-between;

  & h2 {
    font-size: 28px;
  }

  & div,
  span {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  & span {
    gap: 4px;
    text-decoration: underline;
    font-size: 14px;
    color: #353535;

    & i {
      font-size: 18px;
    }
  }
}

.gallery {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: 60vh;
  min-height: 350px;
  gap: 8px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  margin: 20px 0;

  & .img-box,
  img {
    min-height: 0;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
  }

  & .large-img {
    grid-column: 1/2;
    grid-row: 1/3;
  }
}

.gallery button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  border-radius: 8px;
  padding: 6px 10px;
  border: none;
  font-size: 12px;
  display: flex;
  gap: 5px;
  align-items: center;

  & i {
    font-size: 16px;
  }
}

.sub-title {
  margin: 32px 0;

  & h3 {
    margin-bottom: 6px;
  }

  & p {
    font-weight: 400;
  }
}

.guest-favorite-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 22px 26px;
  border: 1px solid #e2e0e0;
  border-radius: 12px;
  gap: 24px;
  margin: 32px 0;

  & div {
    text-align: center;
  }

  & .line {
    height: 40px;
    width: 1px;
    background-color: #e2e0e0;
  }

  & .guest-favorite-container-1p {
    width: 120px;
    font-size: 18px;
  }

  & .guest-favorite-container-2p {
    width: 210px;
    font-weight: 500;
  }
}

.owner-info-container {
  display: flex;
  gap: 20px;
  align-items: center;

  & img {
    width: 45px;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
  }

  & h4 {
    font-weight: 600;
  }

  & p {
    color: #393939;
    font-weight: 400;
    font-size: 14px;
  }
}

.hosting-summary {
  margin: 24px 0;
  padding: 32px 0;
  border-top: 1px solid #e2e0e0;
  border-bottom: 1px solid #e2e0e0;

  & p {
    font-weight: 400;
  }

  & button {
    border: none;
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 16px;
    margin-top: 16px;
  }
}

.bedroom-pictures-container {
  padding: 24px 0 48px 0;
  border-bottom: 1px solid #e2e0e0;

  & h3 {
    margin-bottom: 24px;
  }

  & .bedroom-pictures {
    display: flex;
    gap: 15px;

    & h4 {
      font-size: 16px;
      margin: 10px 0 4px 0;
    }

    & p {
      font-weight: 400;
      color: #393939;
      font-size: 14px;
    }

    & img {
      border-radius: 10px;
      width: 16vw;
      aspect-ratio: 3/2;
      object-fit: cover;
    }
  }
}

.booking-box {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid #e2e0e0;
  border-radius: 12px;
  padding: 20px;
  height: fit-content;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  position: sticky;
  top: 20px;

  & .inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid #b3b3b3;
    border-radius: 12px;

    & .field {
      display: grid;
      font-size: 10px;
      padding: 10px;
      width: fit-content;

      & input {
        border: none;
        outline: none;
        width: 100%;
        box-sizing: border-box;
      }
    }

    & .checkin {
      border-bottom: 1px solid #8d8d8d;
      border-right: 1px solid #8d8d8d;
    }

    & .checkout {
      border-bottom: 1px solid #8d8d8d;
    }

    & .guests {
      grid-column: span 2;
    }
  }

  & .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;

    & button {
      background-color: var(--rosa);
      border: none;
      color: white;
      padding: 12px;
      border-radius: 30px;
      font-size: 16px;
      width: 100%;
    }

    & p {
      font-size: 14px;
      color: #393939;
    }
  }
}

.calendar {
  margin: 48px 0;
}
</style>
