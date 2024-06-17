import { formatTimeDuration } from '@/utils/functions/get-formated-time';
import { getImagePath } from '@/utils/functions/get-image-path';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("about-film__info-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("text-h5") }, });
    (__VLS_ctx.film.title);
    [film,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-between mt-5 gap-2") }, });
    const __VLS_0 = {}
        .BaseIconWithText;
    ({}.BaseIconWithText);
    __VLS_components.BaseIconWithText;
    [BaseIconWithText,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ label: ((`Длительность: ${__VLS_ctx.formatTimeDuration(__VLS_ctx.film.duration)}`)), icon: ("mdi-clock-time-four-outline"), }));
    const __VLS_2 = __VLS_1({ label: ((`Длительность: ${__VLS_ctx.formatTimeDuration(__VLS_ctx.film.duration)}`)), icon: ("mdi-clock-time-four-outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ label: ((`Длительность: ${__VLS_ctx.formatTimeDuration(__VLS_ctx.film.duration)}`)), icon: ("mdi-clock-time-four-outline"), }));
    [film, formatTimeDuration,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_6 = {}
        .BaseIconWithText;
    ({}.BaseIconWithText);
    __VLS_components.BaseIconWithText;
    [BaseIconWithText,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ label: ((`Режиссер: ${__VLS_ctx.film.actors.find((a) => a.position === 'Режиссер')?.actor?.name}`)), icon: ("mdi-account-outline"), }));
    const __VLS_8 = __VLS_7({ label: ((`Режиссер: ${__VLS_ctx.film.actors.find((a) => a.position === 'Режиссер')?.actor?.name}`)), icon: ("mdi-account-outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ label: ((`Режиссер: ${__VLS_ctx.film.actors.find((a) => a.position === 'Режиссер')?.actor?.name}`)), icon: ("mdi-account-outline"), }));
    [film,];
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex mt-5") }, });
    const __VLS_12 = {}
        .BaseIconWithText;
    ({}.BaseIconWithText);
    __VLS_components.BaseIconWithText;
    [BaseIconWithText,];
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ label: ((`Жанры: ${__VLS_ctx.film.genres.map((g) => g.name)}`)), icon: ("mdi-filmstrip-box"), }));
    const __VLS_14 = __VLS_13({ label: ((`Жанры: ${__VLS_ctx.film.genres.map((g) => g.name)}`)), icon: ("mdi-filmstrip-box"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ label: ((`Жанры: ${__VLS_ctx.film.genres.map((g) => g.name)}`)), icon: ("mdi-filmstrip-box"), }));
    [film,];
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex mt-5 justify-between items-center") }, });
    const __VLS_18 = {}
        .VAvatar;
    ({}.VAvatar);
    ({}.VAvatar);
    __VLS_components.VAvatar;
    __VLS_components.vAvatar;
    __VLS_components.VAvatar;
    __VLS_components.vAvatar;
    [VAvatar, VAvatar,];
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ size: ("50"), color: ("surface-variant"), }));
    const __VLS_20 = __VLS_19({ size: ("50"), color: ("surface-variant"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ size: ("50"), color: ("surface-variant"), }));
    const __VLS_24 = {}
        .VImg;
    ({}.VImg);
    __VLS_components.VImg;
    __VLS_components.vImg;
    [VImg,];
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ alt: ("John"), src: ((__VLS_ctx.getImagePath(__VLS_ctx.film.actors[0].actor.image.path))), }));
    const __VLS_26 = __VLS_25({ alt: ("John"), src: ((__VLS_ctx.getImagePath(__VLS_ctx.film.actors[0].actor.image.path))), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ alt: ("John"), src: ((__VLS_ctx.getImagePath(__VLS_ctx.film.actors[0].actor.image.path))), }));
    [film, getImagePath,];
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    (__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-column align-start justify-end") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-h6 break-word text-center") }, });
    (__VLS_ctx.film.actors[0].actor.name);
    [film,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-caption text-center") }, });
    (__VLS_ctx.film.actors[0].position);
    [film,];
    const __VLS_30 = {}
        .BaseButton;
    ({}.BaseButton);
    __VLS_components.BaseButton;
    [BaseButton,];
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onClick': {} }, label: ("Трейлер"), }));
    const __VLS_32 = __VLS_31({ ...{ 'onClick': {} }, label: ("Трейлер"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ ...{ 'onClick': {} }, label: ("Трейлер"), }));
    let __VLS_36;
    const __VLS_37 = {
        onClick: (...[$event]) => {
            __VLS_ctx.$router.push({ name: 'home' });
            [$router,];
        }
    };
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    let __VLS_33;
    let __VLS_34;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['about-film__info-card'];
        __VLS_styleScopedClasses['text-h5'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['mt-5'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['mt-5'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['mt-5'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['align-start'];
        __VLS_styleScopedClasses['justify-end'];
        __VLS_styleScopedClasses['text-h6'];
        __VLS_styleScopedClasses['break-word'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-caption'];
        __VLS_styleScopedClasses['text-center'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                formatTimeDuration: formatTimeDuration,
                getImagePath: getImagePath,
            };
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
//# sourceMappingURL=AboutFilmInfoCard.vue.js.map