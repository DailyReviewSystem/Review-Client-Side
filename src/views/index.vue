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

      <section>
        <h3 class="list-title">未填表单 ({{ activeList.length }})</h3>

        <div class="flex col form-list">
          <template v-if="activeList.length === 0">
            <span>You complete all forms, good for you!</span>
          </template>

          <template v-else>
            <router-link
                v-for="item in activeList"
                :to="'/form/' + item.id"
                class="ui-button"
                style="display: block"
            >{{ item.name }} ({{ item.date }})</router-link>
          </template>
        </div>
      </section>

      <section style="margin-top: 4rem;">
        <h3 class="list-title">已完成表单 ({{ doneList.length }})</h3>

        <div class="flex col form-list">
          <template v-if="doneList.length === 0">
            <span>No completed form being found.</span>
          </template>

          <template v-else>
            <router-link
                v-for="item in doneList"
                :to="'/form/' + item.id"
                class="ui-button"
                style="display: block"
            >{{ item.name }} ({{ item.date }})</router-link>
          </template>
        </div>
      </section>

    </div>
  </main>
</template>

<script setup>

import {inject, ref, computed} from "vue";

const api = inject("api");
const title = inject("title");

const list = ref([]);
const doneList = computed(() => list.value.filter(item => item.done) );
const activeList = computed(() => list.value.filter(item => ! item.done) );

api.get("/user/forms").then( ({data}) => {
  list.value = data.data;
  title(`(${ list.value.length }) 未填表单`);
});

</script>