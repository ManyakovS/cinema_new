import { authGuard } from "../route-guards/auth.guard";
export const routes = [
    {
        name: "home",
        path: "/home",
        component: () => import("@/pages/main/Home.vue"),
        meta: { transition: "slide-left" },
        beforeEnter: authGuard,
    },
    {
        name: "recomendation",
        path: "/recomendation",
        component: () => import("@/pages/main/lists-films/Recomendation.vue"),
        beforeEnter: authGuard,
    },
    {
        name: "upcoming",
        path: "/upcoming",
        component: () => import("@/pages/main/lists-films/Upcoming.vue"),
        beforeEnter: authGuard,
    },
    {
        name: "upcoming",
        path: "/upcoming",
        component: () => import("@/pages/main/lists-films/Upcoming.vue"),
        beforeEnter: authGuard,
    },
];
export default routes;
//# sourceMappingURL=main.js.map