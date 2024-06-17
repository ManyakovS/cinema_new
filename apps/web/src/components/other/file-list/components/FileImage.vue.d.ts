import { FileItemActions } from '../model/types';
import { Image } from '@/@types/schema';
export interface IProps {
    file: Image;
    readonly?: boolean;
    actions?: FileItemActions[];
    fileFullWidth?: boolean;
    convertTimeZone?: boolean;
    highlightedText?: string[];
    hideDate?: boolean;
    hideSize?: boolean;
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<IProps>, {
    readonly: boolean;
    fileFullWidth: boolean;
    actions: () => FileItemActions[];
    highlightedText: () => any[];
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    remove: (value: Image) => void;
    "change-access": (value: Image) => void;
    "access-denied": (value: Image) => void;
}, string, import("vue").PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<IProps>, {
    readonly: boolean;
    fileFullWidth: boolean;
    actions: () => FileItemActions[];
    highlightedText: () => any[];
}>>> & {
    onRemove?: (value: Image) => any;
    "onChange-access"?: (value: Image) => any;
    "onAccess-denied"?: (value: Image) => any;
}, {
    actions: FileItemActions[];
    readonly: boolean;
    fileFullWidth: boolean;
    highlightedText: string[];
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
//# sourceMappingURL=FileImage.vue.d.ts.map