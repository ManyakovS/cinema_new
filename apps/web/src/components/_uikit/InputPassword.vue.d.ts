import type { VTextField } from 'vuetify/components/VTextField';
type QBtnType = InstanceType<typeof VTextField>['$props'];
interface IProps extends QBtnType {
    name?: string;
    label?: string;
    placeholder?: string;
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<IProps>, {
    name: string;
    label: string;
    placeholder: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:model-value": (value: string) => void;
    enter: (value: string) => void;
}, string, import("vue").PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<IProps>, {
    name: string;
    label: string;
    placeholder: string;
}>>> & {
    "onUpdate:model-value"?: (value: string) => any;
    onEnter?: (value: string) => any;
}, {
    name: string;
    label: string;
    placeholder: string;
}, {}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
//# sourceMappingURL=InputPassword.vue.d.ts.map