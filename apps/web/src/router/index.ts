import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: App,
    redirect: { name: "home" },
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("@/pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
