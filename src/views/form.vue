<style>
.form-item {
  display: flex;
  flex-direction: column;
}

.form-item textarea,
.form-item input:not([type='hidden']) {
  margin-bottom: 2rem;
}

.form-item label {
  margin-bottom: .5rem;
}
</style>

<template>
  <div class="content-width">
    <h1>School Daily Form</h1>

    <form class="flex col" @submit.prevent="submitForm" ref="formEl">
      <template v-for="spec in formInfo.fields">
        <div class="form-item">
          <label
              v-if="spec.type !== 'hidden' "
              :for="spec.id"
          >{{ spec.label }}</label>

          <textarea
              v-if="spec.textarea"
              :id="spec.id"
              :name="spec.id"

              class="ui-textarea"
              cols="30"
              rows="3"
          >{{ spec.value ?? '' }}</textarea>

          <input
              v-else
              :id="spec.id"
              :name="spec.id"
              :type="spec.type"
              :value="spec.value ?? ''"

              class="ui-input"
          >
        </div>
      </template>

      <button class="ui-button ml-auto" type="primary">提交</button>
    </form>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const api = inject("api");
const title = inject("title");
const formEl = ref(null);
const formInfo = ref({ spec: [] });

api.get("/real/" + route.params.id).then( ({data}) => {
  formInfo.value = data.data;
  if( data?.data?.name ) title( data.data.name );
});

function submitForm() {
  const data = new FormData( formEl.value );
  api.post("/real/fill/" + route.params.id, data ).then( ({ data }) => {
    // Alert
  });
}
</script>