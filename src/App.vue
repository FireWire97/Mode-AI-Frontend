
<template>
  <div id="app" class="has-background-light">
    <p>DUPA</p>
    <div class="container is-fluid">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
body {
  height: 100vh;
  margin: 0;
  padding: 0px;

  width: 100%;
}
#app {
  display: flex;
  height: 100%;
}
</style>
