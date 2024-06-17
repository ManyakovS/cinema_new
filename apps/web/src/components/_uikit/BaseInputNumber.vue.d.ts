import { VNumberInput } from 'vuetify/labs/VNumberInput';
type QBtnType = InstanceType<typeof VNumberInput>['$props'];
interface IProps extends QBtnType {
    modelValue: string;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToOption<IProps>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:model-value": (value: string) => void;
}, string, import("vue").PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_TypePropsToOption<IProps>>> & {
    "onUpdate:model-value"?: (value: string) => any;
}, {}, {}>, Partial<Record<NonNullable<string | number>, (_: any) => any>>>;
export default _default;
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
//# sourceMappingURL=BaseInputNumber.vue.d.ts.map