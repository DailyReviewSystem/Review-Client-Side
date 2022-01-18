import axios from "axios";
import store from "../store/index.js";

export default {
    install( app, options ) {
        store.dispatch("init");

        const api = axios.create({
            baseURL: "http://localhost:8000/api"
        });

        /**
         * Automatically Add Token To headers
         */
        api.interceptors.request.use( config => {
            if( store.state.token ) {
                config.headers.Authorization = "Bearer " + store.state.token;
            }

            return config;
        });

        app.provide("api", api);
    }
}