import { createMemoryHistory, createRouter } from 'vue-router'

import Exercise1 from './components/Exercise1.vue'
import Exercise2 from './components/Exercise2.vue'
import Exercise3 from './components/Exercise3.vue'

const routes = [
  { path: '/exercise/1', component: Exercise1 },
  { path: '/exercise/2', component: Exercise2 },
  { path: '/exercise/3', component: Exercise3 }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router