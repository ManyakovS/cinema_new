import { authGuard } from "../route-guards/auth.guard";
export const routes = [
    {
        name: "hardcode-back-payment",
        path: "/hardcode/back-payment",
        beforeEnter: authGuard,
        component: () => import("@/pages/hardcode/BackPayment.vue"),
    },
];
export default routes;
//# sourceMappingURL=hardcode.js.map