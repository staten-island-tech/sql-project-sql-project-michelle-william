import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayersView from '../views/PlayersView.vue'
import SigninView from '../Views/SigninView.vue'

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
      component: PlayersView
    },
    {
      path: '/Signin',
      name: 'Signin',
      component: SigninView
    }
  ]
})

export default router
