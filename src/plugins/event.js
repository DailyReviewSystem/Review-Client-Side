import mitt from "mitt";

export const event = mitt();

export default {
    install( app ) {
        app.provide("event", event);
    }
}