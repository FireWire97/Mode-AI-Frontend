
<template>
  <div>
    <b-navbar type="is-warning">
      <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <img
                  src="@/assets/logo.png"
                  alt="Lightweight UI components for Vue.js based on Bulma"
              >
          </b-navbar-item>
      </template>
      <template #start>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
              Home
          </b-navbar-item>
          <b-navbar-item href="#">
              Dashboard
          </b-navbar-item>
          <b-navbar-dropdown label="Info">
              <b-navbar-item href="#">
                  About
              </b-navbar-item>
              <b-navbar-item href="#">
                  Contact
              </b-navbar-item>
          </b-navbar-dropdown>
      </template>

      <template #end>
          <b-navbar-item tag="div">
              <div class="buttons">
                  <a class="button is-warning">
                      <strong>Jens S.</strong>
                  </a>
                  <a class="button is-warning">
                      Log out
                  </a>
              </div>
          </b-navbar-item>
      </template>
    </b-navbar>
    <div id="app" class="has-background-light">
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
