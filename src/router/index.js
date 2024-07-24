import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/Home.vue"
import Vue from "@/views/Vue.vue"
import Airport from "@/views/Airport.vue"
import About from '@/views/About.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/vue",
        name: "Vue",
        component: Vue,
    },
    {
        path: '/about',
        name: "About",
        component: About,
    },
    {
        path: "/airport",
        name: "Airport",
        component: Airport,
    },
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router