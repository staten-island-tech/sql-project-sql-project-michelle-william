import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PositionsView from '../Views/PositionsView.vue'
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
      path: '/Positions',
      name: 'Positions',
      component: PositionsView
    },
    {
      path: '/Signin',
      name: 'Signin',
      component: SigninView
    }
  ]
})

export default router
