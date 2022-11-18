import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
import router from './routes.js'
import {routes} from './routes'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

// const Home = { template: '<div>Home</div>' }
// const Location = { template: '<div>Location</div>' }



// const routes = [
//   { path: '/', component: Home },
//   { path: '/location', component: Location },
// ]

// const router = VueRouter.createRouter({
//   history: VueRouter.createWebHashHistory(),
//   routes,
// })


Vue.use(Buefy)
Vue.config.productionTip = false

// Vue.use(router)
// // App.mount('#App')


let app = new Vue({
  render: h => h(App),
  router
}).$mount('#app')

global.vm = app;

// new Vue({
//   el: "#app",
//   data() {
//     return {
//       myStyle: {
//         backgroundColor: "#05d"
//       }
//     };
//   },
//   components: { App },
//   template: "<App/>"
// });