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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-end mb-8") }, });
    const __VLS_0 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    [RouterLink, RouterLink,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: (({ name: 'admin.film.new' })), }));
    const __VLS_2 = __VLS_1({ to: (({ name: 'admin.film.new' })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: (({ name: 'admin.film.new' })), }));
    const __VLS_6 = {}
        .BaseButton;
    ({}.BaseButton);
    __VLS_components.BaseButton;
    [BaseButton,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ label: ("Добавить"), }));
    const __VLS_8 = __VLS_7({ label: ("Добавить"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ label: ("Добавить"), }));
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (__VLS_ctx.films) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-2 gap-4") }, });
        for (const [film] of __VLS_getVForSourceType((__VLS_ctx.films))) {
            const __VLS_12 = {}
                .BaseFilmCard;
            ({}.BaseFilmCard);
            __VLS_components.BaseFilmCard;
            [BaseFilmCard,];
            const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ key: ((film.id)), film: ((film)), to: (({ name: 'admin.film.edit', params: { id: film.id } })), buttonLabel: ("Редактировать"), }));
            const __VLS_14 = __VLS_13({ key: ((film.id)), film: ((film)), to: (({ name: 'admin.film.edit', params: { id: film.id } })), buttonLabel: ("Редактировать"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
            ({}({ key: ((film.id)), film: ((film)), to: (({ name: 'admin.film.edit', params: { id: film.id } })), buttonLabel: ("Редактировать"), }));
            [films, films,];
            const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['home'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-end'];
        __VLS_styleScopedClasses['mb-8'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-2'];
        __VLS_styleScopedClasses['gap-4'];
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
//# sourceMappingURL=AdminFilms.vue.js.map