<script setup>
import { ref } from 'vue'

const files = ref(null)
const fileList = ref([])

const uploadImage = (e) => {
  fileList.value.forEach((url) => URL.revokeObjectURL(url))
  files.value = Array.from(e.target.files)

  for (const file of files.value) {
    fileList.value.push(URL.createObjectURL(file))
  }
}

const remover = (e) => {
  fileList.value.pop(e.target)
}
</script>
<template>
  <main>
    <div v-if="fileList.length == 0">
      <h1>Adicione algumas fotos da sua acomodação</h1>
      <p class="sub-title">
        Você precisa de cinco fotos para começar. Você pode adicionar outra imagens ou fazer
        alterações mais tarde.
      </p>
      <div class="photo-input">
        <img src="../../assets/icons/camera-imagem.avif" alt="a" />
        <label for="file">Adicionar</label>
        <input id="file" type="file" accept="image/*" multiple @change="uploadImage" />
      </div>
    </div>

    <div v-if="fileList.length > 0" class="preview-container">
      <div class="title">
        <h2>Escolha pelo menos 5 fotos</h2>
        <label for="file">
          <i class="mdi mdi-plus"></i>
        </label>
        <input id="file" type="file" accept="image/*" multiple @change="uploadImage" />
      </div>
      <div class="images-container">
        <div v-for="a in fileList" :key="a">
          <img :src="a" alt="preview" />
          <button @click="remover">
            <i class="mdi mdi-trash-can-outline"></i>
          </button>
        </div>
        <label for="file">
          <i class="mdi mdi-plus"></i>
          <p>Adicionar mais</p>
        </label>
        <input id="file" type="file" accept="image/*" multiple @change="uploadImage" />
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  width: 700px;
  margin-bottom: 100px;
}

input {
  display: none;
}

.preview-container {
  text-align: left;
  width: 100%;

  & .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    & h2 {
      font-weight: 600;
      color: var(--black);
    }

    & label {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f7f7f7;
      border: 0;
      border-radius: 50%;
      width: 40px;
      aspect-ratio: 1;
      font-size: 20px;
    }
  }

  & .images-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;

    & div {
      position: relative;
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

    & img {
      width: 100%;
      border-radius: 14px;
      aspect-ratio: 3/2;
      object-fit: cover;
    }

    & div:first-child {
      grid-column: 1/3;
    }

    label {
      aspect-ratio: 3/2;
      background-color: #f7f7f7;
      border-radius: 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #6c6c6c;

      & i {
        font-size: 35px;
      }

      & p {
        font-size: 14px;
      }
    }
  }

  /* & & img:nth-child(1) {
        width: 100%;
    }

    & img {
        width: 50%;
    } */
}

h1 {
  font-size: 30px;
  font-weight: 600;
  color: var(--black);
  max-width: 640px;
  width: 100%;
  margin: 35px 0 10px 0;
}

.sub-title {
  color: #424242e1;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 26px;
}

.photo-input {
  border: 1px dashed #424242e1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 7/6;
  border-radius: 14px;

  & label {
    background-color: var(--black);
    color: #f2f2f2;
    margin: 30px;
    padding: 12px 28px;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    font-size: 14px;
  }
}

img {
  width: 100px;
}
</style>
