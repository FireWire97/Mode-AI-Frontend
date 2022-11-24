import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from "@/pages/home.vue"
import location from "@/components/SelectLocation.vue"
import list from "@/pages/list.vue"


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
    },
    {
        path: "/list",
        name: "List",
        meta: {title: 'List of Results'},
        component: list
    }

];

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

export default router