import type { Duration } from 'date-fns';
type FormatType = keyof Duration;
interface Props {
    name: string;
    time: number;
    format: FormatType[];
}
declare function restart(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    format: () => string[];
}>, {
    stopInterval: () => void;
    continueInterval: () => void;
    resetInterval: () => void;
    restart: typeof restart;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:isTimeOver": (value: boolean) => void;
    "update:timeFormated": (value: boolean) => void;
}, string, import("vue").PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    format: () => string[];
}>>> & {
    "onUpdate:isTimeOver"?: (value: boolean) => any;
    "onUpdate:timeFormated"?: (value: boolean) => any;
}, {
    format: (keyof Duration)[];
}, {}>, {
    default?(_: {
        time: any;
    }): any;
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
//# sourceMappingURL=RealTimeCounter.vue.d.ts.map