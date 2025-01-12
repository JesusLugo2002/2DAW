import { createRouter, createWebHistory } from 'vue-router'

import { isAuthenticated } from '@/components/AuthProvider.vue'
import HomeView from '@/views/HomeView.vue'
import LoginPage from '@/views/LoginPage.vue'
import ShopPage from '@/views/ShopPage.vue'
import SignupPage from '@/views/SignupPage.vue'
import UserProfile from '@/views/UserProfile.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomeView, name: 'home' },
  { path: '/login', component: LoginPage, name: 'login' },
  { path: '/signup', component: SignupPage, name: 'signup' },
  { path: '/shop', component: ShopPage, name: 'shop' },
  { path: '/profile', component: UserProfile, name: 'profile' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  if (!isAuthenticated.value) {
    if (to.name != 'login' && to.name != 'signup') {
      alert('Primero necesitas iniciar sesión.')
      return { name: 'login' }
    }
  }
  return true
})

export default router
