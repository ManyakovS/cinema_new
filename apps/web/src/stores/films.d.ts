import { FullCreateFilm } from "@/../../apps/api/src/modules/film/dto/film.dto";
import type { FilmResource, FilmShortResource, GetFilmsByUserParamsDTO, GetFilmsParamsDTO } from "@/@types/schema";
export declare const useFilmStore: import("pinia").StoreDefinition<"filmsStore", import("pinia")._UnwrapAll<Pick<{
    films: globalThis.Ref<FilmShortResource[]>;
    film: globalThis.Ref<FilmResource>;
    adminFilm: globalThis.Ref<FilmResource>;
    getFilms: (filter?: GetFilmsParamsDTO) => Promise<void>;
    getFilm: (filmId: number) => Promise<FilmResource>;
    getFilmsByUser: (filter?: GetFilmsByUserParamsDTO) => Promise<import("@/@types/schema").UserFilmResource[]>;
    adminCreate: (body: FullCreateFilm) => Promise<FilmResource>;
}, "film" | "films" | "adminFilm">>, Pick<{
    films: globalThis.Ref<FilmShortResource[]>;
    film: globalThis.Ref<FilmResource>;
    adminFilm: globalThis.Ref<FilmResource>;
    getFilms: (filter?: GetFilmsParamsDTO) => Promise<void>;
    getFilm: (filmId: number) => Promise<FilmResource>;
    getFilmsByUser: (filter?: GetFilmsByUserParamsDTO) => Promise<import("@/@types/schema").UserFilmResource[]>;
    adminCreate: (body: FullCreateFilm) => Promise<FilmResource>;
}, never>, Pick<{
    films: globalThis.Ref<FilmShortResource[]>;
    film: globalThis.Ref<FilmResource>;
    adminFilm: globalThis.Ref<FilmResource>;
    getFilms: (filter?: GetFilmsParamsDTO) => Promise<void>;
    getFilm: (filmId: number) => Promise<FilmResource>;
    getFilmsByUser: (filter?: GetFilmsByUserParamsDTO) => Promise<import("@/@types/schema").UserFilmResource[]>;
    adminCreate: (body: FullCreateFilm) => Promise<FilmResource>;
}, "getFilms" | "getFilm" | "getFilmsByUser" | "adminCreate">>;
//# sourceMappingURL=films.d.ts.map