import type { RouteRecordRaw } from "vue-router";
import { authGuard } from "../route-guards/auth.guard";

export const routes: RouteRecordRaw[] = [
  {
    name: "profile",
    path: "/profile",
    component: () => import("@/pages/profile/Profile.vue"),
    beforeEnter: authGuard,
  },
];

export default routes;
