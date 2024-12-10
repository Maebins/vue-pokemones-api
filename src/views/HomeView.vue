<script setup>
import { useCounterStore } from '@/store/counter';
import { storeToRefs } from 'pinia';
const useCounter = useCounterStore()
//para destruturar para dejar codigo mas limpio 
// si no es con eso se hace userCounter.increment 
//y storeToRef es para poder utilizar valores reactivos
const { increment }= useCounter
const { count, double } = storeToRefs(useCounter)
</script>
<template>
  <main>
    <img src="" alt="">
  </main>
</template>
