import { Image } from '@/@types/schema';
import { FileItemActions } from '../model/types';
export interface IProps {
    file: Image;
    readonly?: boolean;
    actions?: FileItemActions[];
    fileFullWidth?: boolean;
    highlightedText?: string[];
    hideDate?: boolean;
    hideSize?: boolean;
    files: Image[];
    fileIds: number[];
    imageAsRow?: boolean;
    isNeedFileDeleteConfirmation: boolean;
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<IProps>, {
    files: () => any[];
    readonly: boolean;
    fileFullWidth: boolean;
    highlightedText: () => any[];
    isNeedFileDeleteConfirmation: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:files": (value: Image[]) => void;
    "update:fileIds": (value: number[]) => void;
    "change-file-access": (value: Image) => void;
}, string, import("vue").PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<IProps>, {
    files: () => any[];
    readonly: boolean;
    fileFullWidth: boolean;
    highlightedText: () => any[];
    isNeedFileDeleteConfirmation: boolean;
}>>> & {
    "onUpdate:files"?: (value: Image[]) => any;
    "onUpdate:fileIds"?: (value: number[]) => any;
    "onChange-file-access"?: (value: Image) => any;
}, {
    readonly: boolean;
    files: Image[];
    fileFullWidth: boolean;
    highlightedText: string[];
    isNeedFileDeleteConfirmation: boolean;
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
//# sourceMappingURL=FileList.vue.d.ts.map