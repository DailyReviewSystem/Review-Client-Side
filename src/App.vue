<template>
  <site-header></site-header>
  <router-view></router-view>
</template>

<script setup>
import { inject } from "vue";
import { useRouter } from "vue-router";
import SiteHeader from "./components/SiteHeader.vue";

const store = inject("store");
const event = inject("event");
const router = useRouter();

event.on("unauth", function() {
    // Remove Token
    store.dispatch("removeToken");

    // Jump To Login Page
    router.push("/login");
});

/**
 * Init Storage
 */
store.dispatch("init");
</script>