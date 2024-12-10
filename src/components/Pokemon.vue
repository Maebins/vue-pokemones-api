<script setup>
import { RouterLink } from 'vue-router';
import { useFavoritoStore } from '@/store/favoritos';
import { useRoute } from 'vue-router';

const route = useRoute()
const useFavorito= useFavoritoStore()
const { remove }= useFavorito
defineProps(['title','id'])

</script>

<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <RouterLink :to="`/pokemon/${title}`" class="btn btn-outline-primary me-2"> Ver pokemon</RouterLink>
      <button v-show="route.path==='/favoritos'"
       class="btn btn-danger"
       @click="remove(id)"
       >Eliminar</button>
    </div>
  </div>
</template>