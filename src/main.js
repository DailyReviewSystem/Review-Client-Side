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
import store from "./store/index.js";

/**
 * Plugins
 */
import api from "./plugins/api.js";
import title from "./plugins/title.js";

/**
 * Import Style
 */
import "./assets/app.scss";

createApp(App)
    .use( api )
    .use( title )
    .use( store )
    .use( router )
    .mount('#app')
