<script setup>
  import { useRoute, useRouter } from 'vue-router';
  import { useGetData} from '@/composables/getData';
  import Loading from '@/components/Loading.vue';
  //importamos datos del store favoritos
  import { useFavoritoStore } from '@/store/favoritos';
  //configuracion de rutas
  const route =useRoute();
  const router= useRouter();
   //Accediendo a los valores de STORE FAVORITOS 
   const useFavoritos= useFavoritoStore()
   //desctructurando
  const { add, remove, existePokemon } = useFavoritos

  //Accediendo a los valores del composable
  const { data, getData, loading, errorData } = useGetData()

  //metodo para retornar a la pgina principal con router
  const back=() => {
    router.push("/")
  }


  //Recuperanfo datos de la Api
  getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

</script>
<template>
  <Loading v-if="loading"/>
  <div v-if="errorData" class=" alert alert-danger"> {{ errorData }}</div>
  <div v-if="data" class="text-center">
    <div>
      <img :src="data.sprites?.front_default" alt="" class="img">
    </div>
    <div class="mb-4">
      <h3>{{ $route.params.name }}</h3> 
    </div>
    <button @click="back()" class="btn btn-outline-primary me-2"> Regresar</button>
    <button :disabled="existePokemon(data.name)" @click="add(data)" class="btn btn-warning me-2"> Añadir a favoritos</button>
    <button v-show="existePokemon(data.name)" @click="remove(data.id)" class="btn btn-danger">Eliminar</button>

  </div>
  <div v-else class="text-center mt-4">
    <button @click="back()" class="btn btn-outline-primary"> Regresar</button>
  </div>
  
</template>
<style>
.img{
  width: 400px;
}
</style>