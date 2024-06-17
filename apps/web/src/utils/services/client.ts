import type { AxiosHeaders, AxiosResponse, Method } from "axios";
import { createApi } from "./api";

const api = createApi();

type QueryParams = Record<string, any>;

export interface RequestArgs extends RequestInit {
  loading?: boolean;
  params?: QueryParams | null;
}

export async function request<T>(
  url: string,
  rest: RequestArgs,
): Promise<AxiosResponse<T>> {
  return api(url, {
    data: rest.body,
    headers: rest.headers as AxiosHeaders,
    method: rest.method as Method,
    params: {
      ...rest.params,
      loading: rest.loading,
    },
  });
}
