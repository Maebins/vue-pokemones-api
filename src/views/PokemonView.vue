<script setup>
  import { useGetData } from '../composables/getData.js'
  //componentes
  import Loading from '../components/Loading.vue';
  import Pokemon from '../components/Pokemon.vue';
  //Recuperando valores del composable
  const { data, getData, loading, errorData } = useGetData();
  //Utilizando composables para reultilzar metodo que llama a la Api
  getData("https://pokeapi.co/api/v2/pokemon")

</script>

<template>
  <Loading v-if="loading"/>
  <div v-if="errorData" class=" alert alert-danger"> {{ errorData }}</div>
  <div v-if="data" class="pokemon">

    <div class="d-flex flex-wrap justify-content-center">
      <Pokemon
      v-for="pokemon in data.results"
      :key="pokemon.id"
      :id="pokemon.id"
      :title="pokemon.name"
      class="m-2"
      />
    </div>
    <div class="text-center mt-4">
      <button :disabled="!data.previous" class="btn  btn-warning me-2" @click="getData(data.previous)"> Prev</button>
      <button :disabled="!data.next" class="btn  btn-primary" @click="getData(data.next)"> Next</button>
    </div>
  </div>
</template>
<style>
@media (min-width: 1024px) {
  .pokemon {
    min-height: 100vh;
    align-items: center;
  }
}
</style>