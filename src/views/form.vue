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

    <form class="flex col" @submit.prevent="submitForm" ref="form">
      <template v-for="spec in formSpec">
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
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const formSpec = [
  {
    id: "date",
    label: "日期",
    type: "hidden",
    value: "2021-01-16"
  },

  {
    id: "week",
    label: "星期",
    type: "hidden",
    value: "日"
  },

  {
    id: "place",
    label: "训练地点",
    type: "text",
    value: "123123",
  },

  {
    id: "train-content",
    label: "训练内容",
    textarea: true,
  },

  {
    id: "train-note",
    label: "训练笔记",
    textarea: true,
  },

  {
    id: "train-thought",
    label: "训练感悟",
    textarea: true,
  },

  {
    id: "train-conclusion",
    label: "训练小结",
    textarea: true,
  },
];

console.log("ID: ", route.params.id);
console.log( formSpec );

const form = ref(null);

function submitForm() {
  const data = new FormData( form.value );
  // this.api.post("/");
}
</script>