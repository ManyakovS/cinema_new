import type { RouteRecordRaw } from "vue-router";
import { authGuard } from "../route-guards/auth.guard";

export const routes: RouteRecordRaw[] = [
  {
    name: "films",
    path: "/films",
    beforeEnter: authGuard,
    component: () => import("@/pages/films/Films.vue"),
    redirect: { name: "films-list" },
    children: [
      {
        name: "films-list",
        path: "list",
        component: () => import("@/pages/films/lists-films/AllFims.vue"),
        beforeEnter: authGuard,
      },
      {
        name: "film",
        path: "film/:filmIdentifier(\\d+|[a-zA-Z-]+)?",
        beforeEnter: authGuard,
        component: () => import("@/pages/films/film/Film.vue"),
        redirect: { name: "film-about" },
        children: [
          {
            name: "film-about",
            path: "about",
            beforeEnter: authGuard,
            component: () =>
              import("@/pages/films/film/children/about-film/AboutFilm.vue"),
          },
          {
            name: "film-dating",
            path: "dating",
            beforeEnter: authGuard,
            component: () =>
              import("@/pages/films/film/children/dating-film/DatingFilm.vue"),
          },
          {
            name: "film-tickets",
            path: "tickets",
            beforeEnter: authGuard,
            component: () =>
              import(
                "@/pages/films/film/children/tickets-film/TicketsFilm.vue"
              ),
          },
          {
            name: "film-details",
            path: "details",
            beforeEnter: authGuard,
            component: () =>
              import(
                "@/pages/films/film/children/details-film/DetailsFilm.vue"
              ),
          },
        ],
      },
    ],
  },
];

export default routes;
