import { FullCreateFilm } from "@/../../apps/api/src/modules/film/dto/film.dto";

import { defineStore } from "pinia";
import {
  adminCreateFilm,
  filmGetRequest,
  filmGetRequestByUser,
  filmsGetRequest,
} from "@/@types/schema";

// Types
import type {
  FilmResource,
  FilmShortResource,
  GetFilmsByUserParamsDTO,
  GetFilmsParamsDTO,
} from "@/@types/schema";

export const useFilmStore = defineStore("filmsStore", () => {
  const films = ref<FilmShortResource[] | null>();

  const film = ref<FilmResource | null>();
  const adminFilm = ref<FilmResource | null>();

  const getFilms = async (filter?: GetFilmsParamsDTO) => {
    const { data } = await filmsGetRequest(filter);

    films.value = data;
  };

  const getFilm = async (filmId: number) => {
    const { data } = await filmGetRequest(filmId);

    film.value = data;
    return data;
  };

  const getFilmsByUser = async (filter?: GetFilmsByUserParamsDTO) => {
    const { data } = await filmGetRequestByUser(filter);

    return data;
  };

  const adminCreate = async (body: FullCreateFilm) => {
    const { data } = await adminCreateFilm(body);
    adminFilm.value = data;
    return data;
  };

  return {
    films,
    film,
    adminFilm,
    getFilms,
    getFilm,
    getFilmsByUser,
    adminCreate,
  };
});
