import { storeToRefs } from 'pinia';
import { useFilmStore } from '@/stores/films';
import { getImagePath } from '@/utils/functions/get-image-path';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { film } = storeToRefs(useFilmStore());
const backgroundImage = computed(() => {
    if (film.value) {
        return `background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(var(--v-theme-background), 1) 100% ), url(${getImagePath(film.value.images[0].path)})`;
    }
    else
        return '';
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
    if (__VLS_ctx.film) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("about-film d-flex flex-column h-full") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("about-film__img") }, ...{ style: ((__VLS_ctx.backgroundImage)) }, });
        [film, backgroundImage,];
        const __VLS_0 = {}
            .AboutFilmInfoCard;
        ({}.AboutFilmInfoCard);
        __VLS_components.AboutFilmInfoCard;
        [AboutFilmInfoCard,];
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ name: ("Test"), film: ((__VLS_ctx.film)), }));
        const __VLS_2 = __VLS_1({ name: ("Test"), film: ((__VLS_ctx.film)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ name: ("Test"), film: ((__VLS_ctx.film)), }));
        [film,];
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        const __VLS_6 = {}
            .ButtonBack;
        ({}.ButtonBack);
        __VLS_components.ButtonBack;
        [ButtonBack,];
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: (({ name: 'films-list' })), }));
        const __VLS_8 = __VLS_7({ to: (({ name: 'films-list' })), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ to: (({ name: 'films-list' })), }));
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        const __VLS_12 = {}
            .BaseShareButton;
        ({}.BaseShareButton);
        __VLS_components.BaseShareButton;
        [BaseShareButton,];
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
        const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({}));
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-column about-film__content mt-auto justify-between") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-5") }, });
        (__VLS_ctx.film.description);
        [film,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-5") }, });
        const __VLS_18 = {}
            .AboutFilmCardList;
        ({}.AboutFilmCardList);
        __VLS_components.AboutFilmCardList;
        [AboutFilmCardList,];
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ actors: ((__VLS_ctx.film.actors)), }));
        const __VLS_20 = __VLS_19({ actors: ((__VLS_ctx.film.actors)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ actors: ((__VLS_ctx.film.actors)), }));
        [film,];
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-5") }, });
        const __VLS_24 = {}
            .BaseFixedButton;
        ({}.BaseFixedButton);
        __VLS_components.BaseFixedButton;
        [BaseFixedButton,];
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ label: ("Купить"), to: (({ name: 'film-tickets' })), }));
        const __VLS_26 = __VLS_25({ label: ("Купить"), to: (({ name: 'film-tickets' })), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        ({}({ label: ("Купить"), to: (({ name: 'film-tickets' })), }));
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['about-film'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['about-film__img'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['about-film__content'];
        __VLS_styleScopedClasses['mt-auto'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['mt-5'];
        __VLS_styleScopedClasses['mt-5'];
        __VLS_styleScopedClasses['mt-5'];
        __VLS_styleScopedClasses['mt-5'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                film: film,
                backgroundImage: backgroundImage,
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
//# sourceMappingURL=AboutFilm.vue.js.map