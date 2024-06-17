import { Image } from '@/@types/schema';
export interface Props {
    fileIds: number[];
    files: Image[];
    maxFileSize?: number;
    acceptedFileTypes?: string[];
    maxFiles?: number;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    files: () => any[];
    fileIds: () => any[];
    acceptedFileTypes: () => string[];
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:files": (value: Image[]) => void;
    "update:fileIds": (value: number[]) => void;
    "update:filesCount": (value: number) => void;
}, string, import("vue").PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    files: () => any[];
    fileIds: () => any[];
    acceptedFileTypes: () => string[];
}>>> & {
    "onUpdate:files"?: (value: Image[]) => any;
    "onUpdate:fileIds"?: (value: number[]) => any;
    "onUpdate:filesCount"?: (value: number) => any;
}, {
    files: Image[];
    fileIds: number[];
    acceptedFileTypes: string[];
}, {}>, {
    default?(_: {}): any;
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
//# sourceMappingURL=BaseDropZone.vue.d.ts.map