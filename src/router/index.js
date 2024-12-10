import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //configurado de manera global y lo otro es hacerlo en cada enlace
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: () => import('../views/PokemonView.vue'),
    },
    {
      path: '/pokemon/:name',
      name: 'poke',
      component: () => import('../views/PokeView.vue'),
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: () => import('../views/FavoritosView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'),
    }
  ],
})

export default router
