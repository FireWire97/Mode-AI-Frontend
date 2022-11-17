<template>
  <div id="app"><HelloJens /></div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HelloJens from "./components/HelloJens.vue"

export default {
  name: 'App',
  components: {
    // HelloWorld
    HelloJens
  }
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
