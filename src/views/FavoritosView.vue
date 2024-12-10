<script setup>
  import Pokemon from '@/components/Pokemon.vue';
  import { useFavoritoStore } from '@/store/favoritos';
  import { storeToRefs } from 'pinia';

  const useFavoritos= useFavoritoStore();
  const { favoritos }= storeToRefs(useFavoritos)

</script>
<template>
  <div v-if="favoritos.length===0" class=" alert alert-danger"> Sin Favoritos </div>
  <div v-else class="d-flex  flex-wrap justify-content-center">
    <Pokemon
    v-for="i in favoritos"
    :key="i.id"
    :title="i.name"
    :id="i.id"
    class="m-2"
    />
  </div>
</template>