import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import LoginPage from '@/views/LoginPage.vue'
import ShopPage from '@/views/ShopPage.vue'
import SignupPage from '@/views/SignupPage.vue'
import UserProfile from '@/views/UserProfile.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/home', component: HomeView },
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignupPage },
  { path: '/shop', component: ShopPage },
  { path: '/profile', component: UserProfile },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
