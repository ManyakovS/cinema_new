import { storeToRefs } from 'pinia';
import { useFilmStore } from '@/stores/films';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { getFilms } = useFilmStore();
const { films } = storeToRefs(useFilmStore());
fetch();
async function fetch() {
    getFilms();
}
const __VLS_fnComponent = (await import('vue')).defineComponent({});
let __VLS_functionalComponentProps;
const __VLS_modelEmitsType = {};
function __VLS_template() {
    let __VLS_ctx;
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-column home") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-between") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home__banner mt-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home__recomentadions mt-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    if (__VLS_ctx.films) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-2 gap-4") }, });
        for (const [film] of __VLS_getVForSourceType((__VLS_ctx.films))) {
            const __VLS_0 = {}
                .BaseFilmCard;
            ({}.BaseFilmCard);
            __VLS_components.BaseFilmCard;
            [BaseFilmCard,];
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ key: ((film.id)), film: ((film)), to: (({ name: 'film-about', params: { filmIdentifier: film.id } })), }));
            const __VLS_2 = __VLS_1({ key: ((film.id)), film: ((film)), to: (({ name: 'film-about', params: { filmIdentifier: film.id } })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            ({}({ key: ((film.id)), film: ((film)), to: (({ name: 'film-about', params: { filmIdentifier: film.id } })), }));
            [films, films,];
            const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home__upcoming mt-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['home'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['home__banner'];
        __VLS_styleScopedClasses['mt-10'];
        __VLS_styleScopedClasses['home__recomentadions'];
        __VLS_styleScopedClasses['mt-10'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-2'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['home__upcoming'];
        __VLS_styleScopedClasses['mt-10'];
        __VLS_styleScopedClasses['mt-10'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                films: films,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=Home.vue.js.map