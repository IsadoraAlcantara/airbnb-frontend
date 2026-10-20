<template>
  <main>
    <div class="title">
      <h2>Bromélia 106</h2>
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
    <div class="hosting-info-container">
      <h3>Espaço inteiro: condomínio em Bombinhas, Brasil</h3>
      <p>4 hóspedes - 2 quartos - 2 camas - 2 banheiros</p>
      <p>Cancelamento gratuito</p>
      <div class="guest-favorite-container">
        <div>
          <i class="mdi mdi-medal"></i>
          <p>Preferido dos hóspedes</p>
        </div>
        <p>Uma das acomodações no Airbnb que fazem mais sucesso entre os hóspedes</p>
        <div>
          <p>5,0</p>
          <div>
            <i class="mdi mdi-star" v-for="n in 5" :key="n"></i>
          </div>
        </div>
        <div>
          <p>7</p>
          <p>avaliações</p>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  max-width: 1280px;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
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

.hosting-info-container {
  & h3 {
    font-size: 1.4rem;
    margin-bottom: 6px;
  }

  & p {
    font-weight: 400;
    margin-bottom: 6px;
  }

  & p:nth-child(3) {
    background-color: #f1f1f1;
    width: fit-content;
    padding: 5px;
    font-size: 11px;
    border-radius: 10px;
    color: #4d4d4d;
  }
}

.guest-favorite-container {
  border: 1px solid #e2e0e0;
}
</style>
