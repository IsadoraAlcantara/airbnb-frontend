<script setup>
import { computed } from 'vue'
import { useSearchStore } from '@/stores/searchStore'

const searchStore = useSearchStore()

const props = defineProps({
  id: {
    type: [Number, String],
    required: true,
  },
  price: {
    type: [Number, String],
    required: true,
  },
  hostingType: {
    type: String,
    required: true,
  },
  localization: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})

const hasSelectedDates = computed(() => searchStore.totalNights > 0)

const displayPrice = computed(() => {
  const diaria = Number(props.price) || 0
  const valorFinal = hasSelectedDates.value ? diaria * searchStore.totalNights : diaria
  return valorFinal
})
</script>
<template>
  <div class="card-container">
    <router-link :to="{ name: 'hosting', params: { id: id } }">
      <img :src="image" class="img-container">
        <!-- <i class="mdi mdi-heart-outline"></i> -->
      </img>
      <span>{{ hostingType }} - {{ localization }}</span>
      <p v-if="hasSelectedDates">
        {{ searchStore.formattedDateRange }} {{ searchStore.totalNights }}
      </p>

      <!-- Alterna entre o Total da estadia e o valor da diária -->
      <p v-if="hasSelectedDates">
        <strong>Total: R$ {{ displayPrice }}</strong>
      </p>
      <p v-else>
        <strong>R$ {{ displayPrice }}</strong>
      </p>
    </router-link>
  </div>
</template>
<style scoped>
.card-container {
  width: 100%;
  font-size: 14px;
  max-width: 300px;

  & a {
    text-decoration: none;
    color: black;
  }

  & .img-container {
    /* background-image: url(https://a0.muscache.com/im/pictures/miso/Hosting-1170350495363782342/original/a11b13e5-26f2-4916-80bd-de4641d07ce2.jpeg?im_w=1200); */
    max-width: 100%;
    margin-bottom: 5px;
    aspect-ratio: 11/10;
    border-radius: 1.6rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    /* & i {
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
    } */
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
