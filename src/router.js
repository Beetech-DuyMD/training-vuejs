import { createRouter, createWebHistory } from "vue-router";
import Transitions from "./pages/Transitions.vue";
import Profile from "./pages/Profile.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../src/pages/Home.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () => import("../src/pages/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () => import("../src/pages/Login.vue"),
  },
  {
    path: "/transitions",
    meta: {
      layout: "auth",
    },
    component: Transitions,
  },
  {
    path: "/profile",
    component: Profile,
  },
  // {
  //   path: "/transitions/:id",
  //   component: TransitionDetail,
  // },
  // {
  //   path: "/:pathMatch(.*)*",
  //   component: PageNotFound,
  // },
];

const router = new createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
