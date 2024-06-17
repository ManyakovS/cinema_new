import type { AxiosResponse } from "axios";
type QueryParams = Record<string, any>;
export interface RequestArgs extends RequestInit {
    loading?: boolean;
    params?: QueryParams | null;
}
export declare function request<T>(url: string, rest: RequestArgs): Promise<AxiosResponse<T>>;
export {};
//# sourceMappingURL=client.d.ts.map