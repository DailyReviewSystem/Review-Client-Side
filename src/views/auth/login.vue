<style>
.form {
  width: 400px;
}

.form label {
  width: 120px;
}

.form .flex + .flex {
  margin-top: 1rem;
}

.form input {
  flex: 1;
}

.login-form {
  margin-top: 8rem;
}
</style>

<template>
  <div class="content-width center">
    <form @submit.prevent="submit" class="form login-form" ref="form">
      <div class="flex align-center">
        <label for="username">Username</label>
        <input type="text" id="username" class="ui-input" size="20" name="username" required autocomplete="off" value="user">
      </div>

      <div class="flex align-center">
        <label for="password">Password</label>
        <input type="password" id="password" class="ui-input" size="10" name="password" required autocomplete="off" value="password">
      </div>

      <div class="flex">
        <label></label>
        <button type="submit" class="ui-button" data-type="primary">Login</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
import store from "@/store/index.js";
import { useRouter } from "vue-router";

const api = inject("api");
const form = ref(null);
const router = useRouter();

/**
 * Submit Login From
 */
function submit() {
  const data = new FormData( form.value );

  api.post("/auth/login", data ).then( ({ data }) => {
    let token = data?.token;

    if( token ) {
      store.dispatch("storeToken", token );
      // alert
      router.push("/");
    }
  }).catch( e => {
    console.log( e );
  });
}
</script>