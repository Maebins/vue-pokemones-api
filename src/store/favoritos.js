import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritoStore = defineStore('favorito',() =>{
    const favoritos = ref([]);
    //local storag es para añadir persistencia como si fuerna un BD de forma local
    if(localStorage.getItem('favoritoLocal')){
      favoritos.value= JSON.parse(localStorage.getItem('favoritoLocal'))
    }

    const add = (poke) => {
      favoritos.value.push(poke);
      localStorage.setItem('favoritoLocal', JSON.stringify(favoritos.value))
    }
    const remove = (id) => {
      favoritos.value = favoritos.value.filter(item => item.id !== id);
      localStorage.setItem('favoritoLocal', JSON.stringify(favoritos.value))
    }
    const  existePokemon=name => favoritos.value.find(item => item.name===name)
    
    return {
      favoritos,
      add,
      remove,
      existePokemon

    }
  }
)