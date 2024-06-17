import { SessionShortResource } from '@/@types/schema';
interface Props {
    sessions: SessionShortResource[];
    session: SessionShortResource;
}
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<Props>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:session": (value: SessionShortResource) => void;
}, string, import("vue").PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_TypePropsToOption<Props>>> & {
    "onUpdate:session"?: (value: SessionShortResource) => any;
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
//# sourceMappingURL=DatingFilmTimePicker.vue.d.ts.map