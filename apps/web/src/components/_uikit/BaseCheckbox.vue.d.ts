import type { VCheckbox } from 'vuetify/components/VCheckbox';
type QBtnType = InstanceType<typeof VCheckbox>['$props'];
interface Props extends QBtnType {
    modelValue: boolean;
}
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<Props>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
    input: (value: boolean) => void;
}, string, import("vue").PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_TypePropsToOption<Props>>> & {
    onInput?: (value: boolean) => any;
    "onUpdate:modelValue"?: (value: boolean) => any;
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
//# sourceMappingURL=BaseCheckbox.vue.d.ts.map