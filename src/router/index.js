import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/Home.vue"
import Airport from "@/views/Airport.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/airport",
        name: "Airport",
        component: Airport,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router