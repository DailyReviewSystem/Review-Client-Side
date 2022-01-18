import { createRouter, createWebHistory } from "vue-router";
import { useStore } from "vuex";

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

/**
 * Centralized State
 */
import store from "./store/index.js";

store.dispatch("init");

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: "/login",
            component: login
        },
        {
            path: "/",
            component: index,
            meta: {
                auth: true,
            }
        },
        {
            path: "/form/:id",
            component: form,
            meta: {
                auth: true,
            }
        }
    ]
});

router.beforeEach( (to, from, next) => {
    /**
     * This Page Or Parent Page Needs Authentication
     */
    if( to.matched.some( route => route.meta.auth ) ) {

    }
});

export default router;