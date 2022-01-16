import { createRouter, createWebHistory } from "vue-router";

/**
 * Index Page
 */
import index from "./views/index.vue";

/**
 * Login Page
 */
import login from "./views/auth/login.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: index
        },

        {
            path: "/login",
            component: login
        }
    ]
});

export default router;