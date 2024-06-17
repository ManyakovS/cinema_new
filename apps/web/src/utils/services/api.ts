import snakeCaseKeys from "snakecase-keys";
import camelCaseKeys from "camelcase-keys";
import axios from "axios";
import qs from "qs";
import { useUserStore } from "@/stores/user";

export const baseURL =
  `${import.meta.env.VITE_API_URL}/api` ?? "http://localhost:7000/api";

const requestSearchFieldBuffer: Record<string, string> = {};

const createApi = () => {
  const api = axios.create({
    paramsSerializer(params) {
      return qs.stringify(params, {
        arrayFormat: "indices",
        encode: true,
      });
    },
  });

  api.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${localStorage.getItem(
        "access_token",
      )}`;

      const { url, params } = config;
      const search = (params && params.search) || "";

      if (url) requestSearchFieldBuffer[url] = search;

      if (params && params.signal) config.signal = params.signal;

      if (params && params.onUploadProgress)
        config.onUploadProgress = params.onUploadProgress;

      config.withCredentials = true;

      config.baseURL = config.baseURL || baseURL;

      return config;
    },
    (reason) => {
      return Promise.reject(reason);
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    },
  );

  api.interceptors.response.use(
    (response) => {
      const { url } = response.config;
      const { params } = response.config;

      const search = (params && params.search) || "";

      if (response.data)
        response.data = camelCaseKeys(response.data, { deep: true });

      if (!params || (params && params.loading !== false)) {
        if (url && requestSearchFieldBuffer[url] !== search) {
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject("late request");
        }

        return response;
      }
    },
    async (error) => {
      const originalRequest = error.config;
      if (
        error.response.status === 401 &&
        !originalRequest._retry &&
        !(error.config.url === "/auth/refresh")
      ) {
        originalRequest._retry = true; // Пометить запрос как попытку повтора
        const newAccessToken = await useUserStore().auth(); // Получить новый токен
        if (newAccessToken) {
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`; // Обновить заголовок с токеном
          return api(originalRequest); // Повторить запрос с новым токеном
        }
      }
      // Для других ошибок не связанных с авторизацией
      return Promise.reject(error);
    },
  );

  return api;
};

export { createApi };
