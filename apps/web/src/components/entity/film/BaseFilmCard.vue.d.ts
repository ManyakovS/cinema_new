import { type RouteLocationRaw } from 'vue-router';
import type { FilmShortResource } from '@/@types/schema';
interface Props {
    film: FilmShortResource;
    titleSize: 'text-base' | 'text-sm';
    genresSize: 'text-xs' | 'text-2xs';
    to: RouteLocationRaw;
    buttonLabel: string;
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    titleSize: string;
    genresSize: string;
    buttonLabel: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    titleSize: string;
    genresSize: string;
    buttonLabel: string;
}>>>, {
    titleSize: "text-sm" | "text-base";
    genresSize: "text-2xs" | "text-xs";
    buttonLabel: string;
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
//# sourceMappingURL=BaseFilmCard.vue.d.ts.map