<style>
main.content {
  margin-top: 2rem;
}

.list-title {
  font-weight: 400;
}

.form-list li {
  margin: .5rem 0;
}
</style>

<template>
  <main class="content">
    <div class="content-width">

      <h3 class="list-title">未填表单 (2)</h3>

      <ul class="form-list">
        <li>
          <router-link to="/form/1">School Daily Form</router-link>
        </li>

        <li>
          <router-link to="/form/1">My Daily Form</router-link>
        </li>
      </ul>
    </div>
  </main>
</template>