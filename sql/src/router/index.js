;``

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
    }
  ]
})

export default router
