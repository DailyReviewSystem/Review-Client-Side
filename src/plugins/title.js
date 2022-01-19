export default {
    title( title ) {
        document.title = title + " - Daily Review System";
    },

    install(app) {
        app.provide( "title", this.title );
    }
}