import type { RouteRecordRaw } from "vue-router";
import { authGuard } from "../route-guards/auth.guard";

export const routes: RouteRecordRaw[] = [
  {
    name: "hardcode-back-payment",
    path: "/hardcode/back-payment",
    beforeEnter: authGuard,
    component: () => import("@/pages/hardcode/BackPayment.vue"),
  },
];

export default routes;
