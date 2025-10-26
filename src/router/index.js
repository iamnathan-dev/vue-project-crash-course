import RegisterView from "@/views/Register.vue";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/Login.vue";
import DashboardView from "@/views/Dashboard.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "Register",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: DashboardView,
    },
  ],
});

export default router;
