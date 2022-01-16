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
 * Import LuLu UI
 */
import "./assets/ui.css"

createApp(App)
    .use( router )
    .mount('#app')
