import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    { path: '/registration', component: () => import('../views/Registration.vue') },
    { path: '/services', component: () => import('../views/Services.vue') },
    { path: '/user-profile', component: () => import('../views/UserProfile.vue') }
  ]
})

export default router
