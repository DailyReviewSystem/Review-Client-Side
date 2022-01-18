import { createApp } from 'vue'

/**
 * Starter Template
 */
import App from './App.vue'

/**
 * Router File
 */
import router from "./router.js";

/**
 * Store Management
 */
import index from "./store/index.js";

/**
 * Import Style
 */
import "./assets/app.scss";

createApp(App)
    .use( router )
    .use( index )
    .mount('#app')
