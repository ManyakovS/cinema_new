type notifyErrorParamsType = {
    withoutNotFoundRedirect?: boolean;
};
export declare function useNotify(): {
    notifySuccess: (message: string) => void;
    notifyInfo: (message: string) => void;
    notifyError: (error: any, params?: notifyErrorParamsType) => void;
};
export {};
//# sourceMappingURL=use-notify.d.ts.map