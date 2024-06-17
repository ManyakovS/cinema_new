import type { RouteRecordRaw } from "vue-router";
import { adminGuard } from "../route-guards/admin.guard";
import { authGuard } from "../route-guards/auth.guard";

export const routes: RouteRecordRaw[] = [
  {
    name: "admin",
    path: "/admin",
    redirect: { name: "admin.films" },
    component: () => import("@/pages/admin/Admin.vue"),
    beforeEnter: [authGuard, adminGuard],
    children: [
      {
        name: "admin.films",
        path: "/admin/films",
        component: () =>
          import("@/pages/admin/children/admin-films/AdminFilms.vue"),
        beforeEnter: [authGuard, adminGuard],
      },
      {
        name: "admin.film.new",
        path: "/admin/film/new",
        component: () =>
          import(
            "@/pages/admin/children/admin-film/admin-film-new/FilmNew.vue"
          ),
        beforeEnter: [authGuard, adminGuard],
      },
      {
        name: "admin.film.edit",
        path: "/admin/film/:id/edit",
        component: () =>
          import(
            "@/pages/admin/children/admin-film/admin-film-edit/FilmEdit.vue"
          ),
        beforeEnter: [authGuard, adminGuard],
      },
    ],
  },
];

export default routes;
