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
    path: "/",
    redirect: { name: "home" },
    beforeEnter: authGuard,
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

router.beforeEach((to, from, next) => {
  if (
    to.name &&
    !Object.keys(to.params).length &&
    !!Object.keys(from.params).length
  ) {
    next({ name: to.name, params: { ...from.params }, query: to.query });
  } else {
    next();
  }
});

export default router;
