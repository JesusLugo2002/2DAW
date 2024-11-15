import { createRouter, createWebHistory } from 'vue-router'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Skills from './components/Skills.vue'
import Experiencie from './components/Experiencie.vue'
import Contact from './components/Contact.vue'
import Error404 from './components/Error404.vue'


const routes = [
    { path: "/", redirect: "/about" },
    { path: "/about", component: About },
    { path: "/projects", component: Projects },
    { path: "/about", component: About },
    { path: "/about", component: About },
    { path: "/about", component: About },
    { path: "/about", component: About },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router