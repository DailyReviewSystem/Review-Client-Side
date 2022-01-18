export default {
    encrypt( key ) {
        return btoa( key );
    },

    get( key ) {
        return localStorage.getItem( this.encrypt(key) ) || null;
    },

    set( key, value ) {
        localStorage.setItem( this.encrypt(key), value );
    },

    remove( key ) {
        localStorage.removeItem( this.encrypt(key) );
    }
}