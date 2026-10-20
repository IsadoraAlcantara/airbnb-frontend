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
    <div class="images">
      <div class="img-box">
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1398720997591862961/original/f1db5b7b-efb8-465e-8cdd-726b928cca69.jpeg?im_w=1200" alt="" />
      </div>
      <div class="img-box">
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1398720997591862961/original/f1db5b7b-efb8-465e-8cdd-726b928cca69.jpeg?im_w=1200" alt="" />
      </div>
      <div class="img-box">
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1398720997591862961/original/f1db5b7b-efb8-465e-8cdd-726b928cca69.jpeg?im_w=1200" alt="" />
      </div>
      <div class="img-box">
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1398720997591862961/original/f1db5b7b-efb8-465e-8cdd-726b928cca69.jpeg?im_w=1200" alt="" />
      </div>
      <div class="img-box">
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1398720997591862961/original/f1db5b7b-efb8-465e-8cdd-726b928cca69.jpeg?im_w=1200" alt="" />
      </div>
      <button>
        <span>
            <i class="mdi mdo-dots-grid"></i>
            <p>Mostrar todas as fotos</p>
        </span>
      </button>
    </div>
  </main>
</template>
<style scoped>
main {
    max-width: 1280px;
}

.title {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    & h2 {
        font-size: 28px;
    }

    & div, span {
        display: flex;
        gap: 10px;
    }
}

.images {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    max-width: fit-content;

    & img {
        width: 100%;
    }
}
</style>
