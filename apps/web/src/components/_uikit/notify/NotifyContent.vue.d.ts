interface Props {
    timeout: number;
    snackbar: boolean;
}
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<Props>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:snackbar": (value: boolean) => void;
}, string, import("vue").PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_TypePropsToOption<Props>>> & {
    "onUpdate:snackbar"?: (value: boolean) => any;
}, {}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
//# sourceMappingURL=NotifyContent.vue.d.ts.map