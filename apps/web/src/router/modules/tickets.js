import { authGuard } from "../route-guards/auth.guard";
export const routes = [
    {
        name: "tickets",
        path: "/tickets",
        component: () => import("@/pages/tickets/Tickets.vue"),
        beforeEnter: authGuard,
        redirect: { name: "tickets.list" },
        children: [
            {
                name: "tickets.list",
                path: "",
                component: () => import("@/pages/tickets/children/ticket-list/TicketsList.vue"),
                beforeEnter: authGuard,
            },
            {
                name: "tickets.user",
                path: "/tickets/user/:userId/film/:filmId",
                component: () => import("@/pages/tickets/children/ticket-item/TicketsItem.vue"),
                beforeEnter: authGuard,
            },
        ],
    },
];
export default routes;
//# sourceMappingURL=tickets.js.map