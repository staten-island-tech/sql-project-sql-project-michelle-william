import { createRouter, createWebHistory } from 'vue-router'
import VolleyballTeamBuilder from '../Views/VolleyballTeamBuilder.vue'
import loginPage from '../Views/loginPage.vue'
import SigninView from '../Views/SigninView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'VolleyballTeamBuilder',
      component: VolleyballTeamBuilderView
    },
    {
      path: '/loginPage',
      name: 'loginPage',
      component: loginPageView
    },
    {
      path: '/Signin',
      name: 'Signin',
      component: SigninView
    }
  ]
})

export default router
