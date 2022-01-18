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
        }
    }
});

export default store;