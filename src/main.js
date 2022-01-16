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
 * Import Style
 */
import "./assets/app.scss";

createApp(App)
    .use( router )
    .mount('#app')
