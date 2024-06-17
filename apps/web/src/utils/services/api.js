import camelCaseKeys from "camelcase-keys";
import axios from "axios";
import qs from "qs";
import { useUserStore } from "@/stores/user";
export const baseURL = `${import.meta.env.VITE_API_URL}/api` ?? "http://localhost:7000/api";
const requestSearchFieldBuffer = {};
const createApi = () => {
    const api = axios.create({
        paramsSerializer(params) {
            return qs.stringify(params, {
                arrayFormat: "indices",
                encode: true,
            });
        },
    });
    api.interceptors.request.use((config) => {
        config.headers.authorization = `Bearer ${localStorage.getItem("access_token")}`;
        const { url, params } = config;
        const search = (params && params.search) || "";
        if (url)
            requestSearchFieldBuffer[url] = search;
        if (params && params.signal)
            config.signal = params.signal;
        if (params && params.onUploadProgress)
            config.onUploadProgress = params.onUploadProgress;
        config.withCredentials = true;
        config.baseURL = config.baseURL || baseURL;
        return config;
    }, (reason) => {
        return Promise.reject(reason);
    });
    api.interceptors.response.use((response) => {
        const { url } = response.config;
        const { params } = response.config;
        const search = (params && params.search) || "";
        if (response.data)
            response.data = camelCaseKeys(response.data, { deep: true });
        if (!params || (params && params.loading !== false)) {
            if (url && requestSearchFieldBuffer[url] !== search) {
                return Promise.reject("late request");
            }
            return response;
        }
    }, async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 &&
            !originalRequest._retry &&
            !(error.config.url === "/auth/refresh")) {
            originalRequest._retry = true;
            const newAccessToken = await useUserStore().auth();
            if (newAccessToken) {
                originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                return api(originalRequest);
            }
        }
        return Promise.reject(error);
    });
    return api;
};
export { createApi };
//# sourceMappingURL=api.js.map