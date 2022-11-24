
<template>
  <div id="app" class="has-background-light">
    <div id="logo" class="container is-fluid">
      <img alt="Mode AI Logo" src="./assets/logo.png">
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

#logo{
  /* width: 600px; */
  padding-left: 350px;
}
</style>
