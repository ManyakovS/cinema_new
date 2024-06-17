type Props = {
    headerSkin?: 'default' | 'border-bottom';
    visible: boolean;
    width?: number | string;
    height: string;
    title: string;
    buttonCancelVisible?: boolean;
    buttonCancelText?: string;
    buttonConfirmText?: string;
    buttonConfirmVisible?: boolean;
    buttonConfirmDisabled?: boolean;
    buttonCancelColor: 'primary' | 'secondary' | 'positive' | 'accent';
    skin?: 'primary' | 'secondary' | 'positive' | 'accent';
    hideDefaultFooter?: boolean;
    withScroll?: boolean;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    buttonCancelText: string;
    buttonConfirmText: string;
    buttonCancelVisible: boolean;
    buttonConfirmDisabled: boolean;
    buttonConfirmVisible: boolean;
    hideDefaultFooter: boolean;
    headerSkin: string;
    skin: string;
    width: number;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    buttonCancelText: string;
    buttonConfirmText: string;
    buttonCancelVisible: boolean;
    buttonConfirmDisabled: boolean;
    buttonConfirmVisible: boolean;
    hideDefaultFooter: boolean;
    headerSkin: string;
    skin: string;
    width: number;
}>>>, {
    width: string | number;
    buttonCancelText: string;
    buttonConfirmText: string;
    buttonCancelVisible: boolean;
    buttonConfirmDisabled: boolean;
    buttonConfirmVisible: boolean;
    hideDefaultFooter: boolean;
    headerSkin: "default" | "border-bottom";
    skin: "primary" | "secondary" | "positive" | "accent";
}, {}>, {
    "header-actions"?(_: {}): any;
    close?(_: {}): any;
    "additional-bar"?(_: {}): any;
    default?(_: {}): any;
    footer?(_: {}): any;
}>;
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
//# sourceMappingURL=DialogWrapper.vue.d.ts.map