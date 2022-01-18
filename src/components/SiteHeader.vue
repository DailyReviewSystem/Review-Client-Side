<style>
.site-header {
  height: 35px;
  box-shadow: 0 1px 0 #EEE;

  display: flex;
  align-items: center;
}

.logo {
  border: none!important;
  padding: .5em!important;
  margin-left: -.5em;
}
</style>

<template>
  <header class="site-header">
    <div class="content-width">
      <router-link to="/" class="ui-button logo">Daily Review System</router-link>
    </div>
  </header>
</template>