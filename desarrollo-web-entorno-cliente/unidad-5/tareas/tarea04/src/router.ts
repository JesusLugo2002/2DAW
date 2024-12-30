import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue"
import Exercise1 from "./components/Exercise1.vue";
import Exercise2 from "./components/Exercise2.vue";
import Exercise3 from "./components/Exercise3.vue";
import Error404 from "./components/Error404.vue";

const routes = [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/exercise-1", component: Exercise1 },
    { path: "/exercise-2", component: Exercise2 },
    { path: "/exercise-3", component: Exercise3 },
    { path: "/:pathMatch(.*)*", component: Error404 },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;