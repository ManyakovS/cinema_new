import { defineStore } from "pinia";
import { adminCreateFilm, filmGetRequest, filmGetRequestByUser, filmsGetRequest, } from "@/@types/schema";
export const useFilmStore = defineStore("filmsStore", () => {
    const films = ref();
    const film = ref();
    const adminFilm = ref();
    const getFilms = async (filter) => {
        const { data } = await filmsGetRequest(filter);
        films.value = data;
    };
    const getFilm = async (filmId) => {
        const { data } = await filmGetRequest(filmId);
        film.value = data;
        return data;
    };
    const getFilmsByUser = async (filter) => {
        const { data } = await filmGetRequestByUser(filter);
        return data;
    };
    const adminCreate = async (body) => {
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
//# sourceMappingURL=films.js.map