export interface IDateInputProps {
    modelValue?: string;
    value?: string;
    range?: boolean;
    errorMessage: string;
    optionsDate: string;
    label: string;
}
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<IDateInputProps>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value: string) => void;
    "update:modelValue": (value: string) => void;
}, string, import("vue").PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_TypePropsToOption<IDateInputProps>>> & {
    onInput?: (value: string) => any;
    "onUpdate:modelValue"?: (value: string) => any;
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
//# sourceMappingURL=DateInput.vue.d.ts.map