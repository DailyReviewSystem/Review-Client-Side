<style>
main.content {
  margin-top: 2rem;
}

.list-title {
  font-weight: 400;
}

.form-list a {
  margin: .5rem 0;
}
</style>

<template>
  <main class="content">
    <div class="content-width">

      <h3 class="list-title">未填表单 ({{ list.length }})</h3>

      <div class="flex col form-list">
        <router-link
            v-for="item in list"
            :to="'/form/' + item.id"
            class="ui-button"
            style="display: block"
        >{{ item.name }} ({{ item.date }})</router-link>
      </div>

    </div>
  </main>
</template>

<script setup>

import {inject, ref} from "vue";

let list = ref([]);

const api = inject("api");
const title = inject("title");

api.get("/user/forms").then( ({data}) => {
  list.value = data.data;
  title(`(${ list.value.length }) 未填表单`);
});

</script>