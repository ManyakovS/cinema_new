import { getFormatedTime } from '@/utils/functions/get-formated-time';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const __VLS_props = defineProps();
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tickets__film_card pa-4") }, });
    const __VLS_0 = {}
        .BaseFilmImage;
    ({}.BaseFilmImage);
    __VLS_components.BaseFilmImage;
    [BaseFilmImage,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("tickets__film_card__img") }, img: ((__VLS_ctx.film.images[0].path)), }));
    const __VLS_2 = __VLS_1({ ...{ class: ("tickets__film_card__img") }, img: ((__VLS_ctx.film.images[0].path)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("tickets__film_card__img") }, img: ((__VLS_ctx.film.images[0].path)), }));
    [film,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tickets__film_card__content w-full d-flex flex-column justify-between pl-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tickets__film_card__content-name text-h5") }, });
    (__VLS_ctx.film.title);
    [film,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tickets__film_card__content-date mt-2") }, });
    const __VLS_6 = {}
        .BaseIconWithText;
    ({}.BaseIconWithText);
    __VLS_components.BaseIconWithText;
    [BaseIconWithText,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ label: ((__VLS_ctx.getFormatedTime(__VLS_ctx.film.dateStart))), icon: ("mdi-calendar-month"), }));
    const __VLS_8 = __VLS_7({ label: ((__VLS_ctx.getFormatedTime(__VLS_ctx.film.dateStart))), icon: ("mdi-calendar-month"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ label: ((__VLS_ctx.getFormatedTime(__VLS_ctx.film.dateStart))), icon: ("mdi-calendar-month"), }));
    [film, getFormatedTime,];
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tickets__film_card__action") }, });
    var __VLS_12 = {};
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['tickets__film_card'];
        __VLS_styleScopedClasses['pa-4'];
        __VLS_styleScopedClasses['tickets__film_card__img'];
        __VLS_styleScopedClasses['tickets__film_card__content'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['pl-4'];
        __VLS_styleScopedClasses['tickets__film_card__content-name'];
        __VLS_styleScopedClasses['text-h5'];
        __VLS_styleScopedClasses['tickets__film_card__content-date'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['tickets__film_card__action'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                getFormatedTime: getFormatedTime,
            };
        },
        props: {},
    });
}
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
});
export default {};
;
//# sourceMappingURL=TicketsFilmCard.vue.js.map