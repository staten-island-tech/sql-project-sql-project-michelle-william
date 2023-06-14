import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import players from '../Views/playersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Players',
      name: 'Players',
      component: players
    }
  ]
})

export default router
