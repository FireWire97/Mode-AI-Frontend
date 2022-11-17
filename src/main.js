import Vue from 'vue'
import App from './App.vue'
// import createRouter from 'vue-router'
// import routes from './routes'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

// const router = createRouter({
//   routes,
//   linkActiveClass: 'active'
// });

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

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