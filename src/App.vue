<!-- <template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template> -->

<template>
  <div id="app">
    <HelloJens msg="Hi Jens!"/>
  </div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
