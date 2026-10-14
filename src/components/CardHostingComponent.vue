<script setup></script>
<template>
  <div class="card-container">
    <div class="img-container">
      <i class="mdi mdi-heart-outline"></i>
    </div>
    <span>Apartamento - Bombinhas</span>
    <p>16 - 18 out.</p>
    <p>Total: R$562</p>
  </div>
</template>
<style scoped>
.card-container {
  width: 100%;
  font-size: 14px;

  & .img-container {
    background-image: url(https://a0.muscache.com/im/pictures/miso/Hosting-1170350495363782342/original/a11b13e5-26f2-4916-80bd-de4641d07ce2.jpeg?im_w=1200);
    margin-bottom: 5px;
    aspect-ratio: 11/10;
    border-radius: 1.6rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    & i {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      position: absolute;
      top: 5%;
      right: 5%;
      font-size: 22px;
      background-color: #00000060;
      border-radius: 50%;
      width: 30px;
      height: 30px;
    }
  }

  & p,
  span {
    margin: 2px 0;
  }

  & p {
    color: #6c6c6c;
  }
}
</style>
