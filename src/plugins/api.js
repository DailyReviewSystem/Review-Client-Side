import axios from "axios";
import store from "../store/index.js";
import { event } from "./event.js";

export default {
    install( app, options ) {
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

        /**
         * Deal with problems Globally
         */
        api.interceptors.response.use( res => {
            return res;
        }, error => {

            // 401 Indicates User Is Visiting a page that requires auth
            // user is not login or token expires
            if( error.response.status === 401 ) {
                event.emit("unauth");
            }

            return Promise.reject( error );
        });

        app.provide("api", api);
    }
}