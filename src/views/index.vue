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

      <h3 class="list-title">未填表单 (2)</h3>

      <div class="flex col form-list">
        <router-link
            to="/form/1"
            class="ui-button"
            style="display: block"
        >School Daily Form</router-link>

        <router-link
            to="/form/1"
            class="ui-button"
            style="display: block"
        >School Daily Form</router-link>
      </div>

    </div>
  </main>
</template>