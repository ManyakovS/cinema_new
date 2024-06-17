import { authGuard } from "../route-guards/auth.guard";
export const routes = [
    {
        name: "profile",
        path: "/profile",
        component: () => import("@/pages/profile/Profile.vue"),
        beforeEnter: authGuard,
    },
];
export default routes;
//# sourceMappingURL=profile.js.map