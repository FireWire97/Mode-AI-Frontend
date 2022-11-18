import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from "@/pages/home.vue"
import location from "@/components/SelectLocation.vue"


const routes = [
    {
        path: "/",
        name: "home",
        meta: {title: 'home page!'},
        component: home
    },
    {
        path: "/location",
        name: "Location",
        meta: {title: 'Mood for today'},
        component: location
    }

];

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

export default router