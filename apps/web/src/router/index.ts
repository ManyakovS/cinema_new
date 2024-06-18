import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "./route-guards/auth.guard";

import authRoutes from "./modules/auth";
import adminRoutes from "./modules/admins";
import mainRoutes from "./modules/main";
import profileRoutes from "./modules/profile";
import filmRoutes from "./modules/film";
import hardcodeRoutes from "./modules/hardcode";
import ticketsRoutes from "./modules/tickets";

export const routes: RouteRecordRaw[] = [
  ...authRoutes,
  ...mainRoutes,
  ...profileRoutes,
  ...filmRoutes,
  ...hardcodeRoutes,
  ...ticketsRoutes,
  ...adminRoutes,
  {
    name: 'main',
    path: "/",
    redirect: { name: "home" },
    beforeEnter: authGuard,
  },
  {
    name: 'not-found',
    path: "/404",
    beforeEnter: authGuard,
    component: () => import('@/pages/NotFound.vue')
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
