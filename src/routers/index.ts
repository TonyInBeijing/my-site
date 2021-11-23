/**
 * @description vue-router
 * @author 越浩玮 2021-11-23
 */
import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/home.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home
}];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;