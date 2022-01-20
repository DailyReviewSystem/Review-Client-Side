import { createRouter, createWebHistory } from "vue-router";
import TitleManger from "./plugins/title.js";

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

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: "/login",
            component: login,
            meta: {
                title: "Login Page",
            }
        },
        {
            path: "/",
            component: index,
            meta: {
                auth: true,
                title: "Index Page",
            }
        },
        {
            path: "/form/:id",
            component: form,
            meta: {
                auth: true,
                title: "Form Page",
            }
        }
    ]
});

router.beforeEach( (to, from, next) => {
    /**
     * This Page Or Parent Page Needs Authentication
     */
    if( to.matched.some( route => route.meta.auth ) ) {
        /**
         * Might Logged In ( Has Token )
         */
        if( store.state.token ) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
});

router.afterEach((to, from) => {
    if( to?.meta?.title ) {
        TitleManger.title( to?.meta?.title );
    }
});

export default router;