export default {
    install(app) {

        // Set Title With Suffix
        const title = (title) => {
            document.title = title + " - Daily Review System";
        };

        app.provide( "title", title );
    }
}