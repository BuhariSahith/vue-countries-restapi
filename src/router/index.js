import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "HomePageView",
    component: HomePage,
  },

  // route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import("../views/AboutView.vue"),
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
