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
        <label for="tel">Username</label>
        <input type="tel" id="tel" class="ui-input" size="20" name="tel" required>
      </div>

      <div class="flex align-center">
        <label for="password">Password</label>
        <input type="password" id="password" class="ui-input" size="10" name="code" required>
      </div>

      <div class="flex">
        <label></label>
        <button type="submit" class="ui-button" data-type="primary">Login</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

/**
 *  Form Element
*/
const form = ref(null);

/**
 * Submit Login From
 */
function submit() {
  const data = new FormData( form.value );

  this.api.post("/use")
  console.log( form.value );
}
</script>