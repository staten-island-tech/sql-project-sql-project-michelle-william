import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PositionsView from '../Views/PositionsView.vue'
import SigninView from '../Views/SigninView.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Positions',
      name: 'Positions',
      component: PositionsView,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/Signin',
      name: 'Signin',
      component: SigninView
    }
  ]
})

export default router
