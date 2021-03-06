import { createStore } from "vuex";
import StoreManager from "./StoreManager.js";

const store = createStore({
    state() {
        return {
            init: false,
            token: null,
        }
    },

    mutations: {
        loadToken( state, token ) {
            state.token = token;
        },

        finishInit( state ) {
            state.init = true;
        }
    },

    actions: {
        init( context ) {
            // Only init once
            if( context.state.init ) return;

            /**
             * Load Token From Persist Storage
             */
            if( StoreManager.get("token") ) {
                context.commit("loadToken", StoreManager.get("token") );
            }

            /**
             * Initialization done
             */
            context.commit("finishInit");
        },

        storeToken( context, token ) {
            /**
             * Persistent Store
             */
            StoreManager.set("token", token );

            context.commit("loadToken", token );
        },

        /**
         * Remove Token From both persist and memory store
         * @param context
         */
        removeToken( context ) {
            StoreManager.remove("token");
            context.commit("loadToken", null );
        }
    }
});

export default store;