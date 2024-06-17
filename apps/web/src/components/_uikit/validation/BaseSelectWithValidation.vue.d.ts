import type { VSelect } from 'vuetify/components/VSelect';
type QType = InstanceType<typeof VSelect>['$props'];
interface IProps extends QType {
    name: string;
    validateOnBlur: boolean;
    errorMessages: string;
    items: {
        name: string;
        id: string | number;
    }[];
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<IProps>, {
    validateOnBlur: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<IProps>, {
    validateOnBlur: boolean;
}>>>, {
    validateOnBlur: boolean;
}, {}>, Partial<Record<NonNullable<string | number>, (_: any) => any>>>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
//# sourceMappingURL=BaseSelectWithValidation.vue.d.ts.map