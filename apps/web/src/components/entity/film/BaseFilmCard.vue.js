const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const __VLS_props = withDefaults(defineProps(), {
    titleSize: 'text-sm',
    genresSize: 'text-2xs',
    buttonLabel: 'Купить',
});
const __VLS_withDefaultsArg = (function (t) { return t; })({
    titleSize: 'text-sm',
    genresSize: 'text-2xs',
    buttonLabel: 'Купить',
});
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
    const __VLS_0 = {}
        .BaseRouterLink;
    ({}.BaseRouterLink);
    ({}.BaseRouterLink);
    __VLS_components.BaseRouterLink;
    __VLS_components.BaseRouterLink;
    [BaseRouterLink, BaseRouterLink,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ((__VLS_ctx.to)), }));
    const __VLS_2 = __VLS_1({ to: ((__VLS_ctx.to)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ((__VLS_ctx.to)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("baseFilmCard"), ...{ class: ("base-film-card flex flex-column h-full") }, });
    (__VLS_ctx.baseFilmCard);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("base-film-card__img") }, });
    const __VLS_6 = {}
        .BaseFilmImage;
    ({}.BaseFilmImage);
    __VLS_components.BaseFilmImage;
    [BaseFilmImage,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ img: ((__VLS_ctx.film.images[0]?.path)), }));
    const __VLS_8 = __VLS_7({ img: ((__VLS_ctx.film.images[0]?.path)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ img: ((__VLS_ctx.film.images[0]?.path)), }));
    [to, baseFilmCard, film,];
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("base-film-card__title font-semibold mt-1") }, ...{ class: ((__VLS_ctx.titleSize)) }, });
    __VLS_styleScopedClasses = (titleSize);
    (__VLS_ctx.film.title);
    [film, titleSize,];
    if (__VLS_ctx.film.genres) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.genresSize)) }, ...{ class: ("mb-2") }, });
        __VLS_styleScopedClasses = (genresSize);
        (__VLS_ctx.film.genres?.map((genre) => genre.name).join(', '));
        [film, film, genresSize,];
    }
    if (__VLS_ctx.to) {
        const __VLS_12 = {}
            .BaseButton;
        ({}.BaseButton);
        __VLS_components.BaseButton;
        [BaseButton,];
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ variant: ("outlined"), ...{ class: ("mt-auto w-full") }, label: ((__VLS_ctx.buttonLabel)), to: ((__VLS_ctx.to)), }));
        const __VLS_14 = __VLS_13({ variant: ("outlined"), ...{ class: ("mt-auto w-full") }, label: ((__VLS_ctx.buttonLabel)), to: ((__VLS_ctx.to)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ variant: ("outlined"), ...{ class: ("mt-auto w-full") }, label: ((__VLS_ctx.buttonLabel)), to: ((__VLS_ctx.to)), }));
        [to, to, buttonLabel,];
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    }
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['base-film-card'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['base-film-card__img'];
        __VLS_styleScopedClasses['base-film-card__title'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['mt-1'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['mt-auto'];
        __VLS_styleScopedClasses['w-full'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {};
        },
        props: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
});
;
//# sourceMappingURL=BaseFilmCard.vue.js.map