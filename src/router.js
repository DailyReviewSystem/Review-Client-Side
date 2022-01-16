import { createRouter, createWebHistory } from "vue-router";

/**
 * Index Page
 */
import index from "./views/index.vue";

/**
 * Form Page
 */
import form from "./views/form.vue";

/**
 * Login Page
 */
import login from "./views/auth/login.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        /**
         * Auth Router
         */
        {
            path: "/login",
            component: login
        },
        {
            path: "/",
            component: index
        },
        {
            path: "/form/:id",
            component: form
        }
    ]
});

export default router;