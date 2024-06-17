import { createApi } from "./api";
const api = createApi();
export async function request(url, rest) {
    return api(url, {
        data: rest.body,
        headers: rest.headers,
        method: rest.method,
        params: {
            ...rest.params,
            loading: rest.loading,
        },
    });
}
//# sourceMappingURL=client.js.map