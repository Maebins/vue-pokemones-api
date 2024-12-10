<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <RouterLink class="navbar-brand" to="/">
          <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
          Poke Api
        </RouterLink>
        <div>
          <RouterLink  to="/" class="btn btn-outline-primary me-2">Home</RouterLink>
          <RouterLink to="/pokemon" class="btn btn-outline-primary me-2">Pokemon</RouterLink> 
          <RouterLink to="/favoritos" class="btn btn-outline-primary">Favoritos</RouterLink> 
        </div>
      </div>
    </nav>
  </header>
  <div class="container pt-4 pb-4">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
