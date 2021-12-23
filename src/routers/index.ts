/**
 * @description vue-router
 * @author 越浩玮 2021-11-23
 */
import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/home.vue";
import Main from "../components/home/main.vue";


const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    children: [
        {
            path: "/",
            name: "Main",
            component: Main
        }
    ]
}];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;