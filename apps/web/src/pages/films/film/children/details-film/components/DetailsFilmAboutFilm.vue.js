import { getFormatedTime, formatTimeDuration, } from '@/utils/functions/get-formated-time';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const __VLS_props = defineProps();
const formattedDate = (date) => getFormatedTime(date, 'd MMMM, yyyy');
const formattedTime = (date) => getFormatedTime(date, 'HH.mm');
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("details-film__details") }, });
    const __VLS_0 = {}
        .BaseImage;
    ({}.BaseImage);
    __VLS_components.BaseImage;
    [BaseImage,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("details-film__details__img") }, src: ((__VLS_ctx.film.images?.[0].path)), aspectRatio: ((1)), cover: (true), }));
    const __VLS_2 = __VLS_1({ ...{ class: ("details-film__details__img") }, src: ((__VLS_ctx.film.images?.[0].path)), aspectRatio: ((1)), cover: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("details-film__details__img") }, src: ((__VLS_ctx.film.images?.[0].path)), aspectRatio: ((1)), cover: (true), }));
    [film,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("text-h5 text-center font-semibold mt-2") }, });
    (__VLS_ctx.film.title);
    [film,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-between mt-5 gap-2") }, });
    const __VLS_6 = {}
        .BaseIconWithText;
    ({}.BaseIconWithText);
    __VLS_components.BaseIconWithText;
    [BaseIconWithText,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ label: ((`Длительность: ${__VLS_ctx.formatTimeDuration(__VLS_ctx.film.duration)}`)), icon: ("mdi-clock-time-four-outline"), }));
    const __VLS_8 = __VLS_7({ label: ((`Длительность: ${__VLS_ctx.formatTimeDuration(__VLS_ctx.film.duration)}`)), icon: ("mdi-clock-time-four-outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ label: ((`Длительность: ${__VLS_ctx.formatTimeDuration(__VLS_ctx.film.duration)}`)), icon: ("mdi-clock-time-four-outline"), }));
    [film, formatTimeDuration,];
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_12 = {}
        .BaseIconWithText;
    ({}.BaseIconWithText);
    __VLS_components.BaseIconWithText;
    [BaseIconWithText,];
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ label: ((`Режиссер: ${__VLS_ctx.film.actors.find((a) => a.position === 'Режиссер')?.actor?.name}`)), icon: ("mdi-account-outline"), }));
    const __VLS_14 = __VLS_13({ label: ((`Режиссер: ${__VLS_ctx.film.actors.find((a) => a.position === 'Режиссер')?.actor?.name}`)), icon: ("mdi-account-outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ label: ((`Режиссер: ${__VLS_ctx.film.actors.find((a) => a.position === 'Режиссер')?.actor?.name}`)), icon: ("mdi-account-outline"), }));
    [film,];
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex mt-5") }, });
    const __VLS_18 = {}
        .BaseIconWithText;
    ({}.BaseIconWithText);
    __VLS_components.BaseIconWithText;
    [BaseIconWithText,];
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ label: ((`Жанры: ${__VLS_ctx.film.genres.map((g) => g.name).join(', ')}`)), icon: ("mdi-filmstrip-box"), }));
    const __VLS_20 = __VLS_19({ label: ((`Жанры: ${__VLS_ctx.film.genres.map((g) => g.name).join(', ')}`)), icon: ("mdi-filmstrip-box"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ label: ((`Жанры: ${__VLS_ctx.film.genres.map((g) => g.name).join(', ')}`)), icon: ("mdi-filmstrip-box"), }));
    [film,];
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-between mt-4") }, });
    const __VLS_24 = {}
        .TextWithTitle;
    ({}.TextWithTitle);
    __VLS_components.TextWithTitle;
    [TextWithTitle,];
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ text: ((__VLS_ctx.formattedDate(__VLS_ctx.tickets[0].session.sessionTimeStart))), label: ("Дата"), }));
    const __VLS_26 = __VLS_25({ text: ((__VLS_ctx.formattedDate(__VLS_ctx.tickets[0].session.sessionTimeStart))), label: ("Дата"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ text: ((__VLS_ctx.formattedDate(__VLS_ctx.tickets[0].session.sessionTimeStart))), label: ("Дата"), }));
    [formattedDate, tickets,];
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    const __VLS_30 = {}
        .TextWithTitle;
    ({}.TextWithTitle);
    __VLS_components.TextWithTitle;
    [TextWithTitle,];
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ text: ((`${__VLS_ctx.formattedTime(__VLS_ctx.tickets[0].session.sessionTimeStart)} - ${__VLS_ctx.formattedTime(__VLS_ctx.tickets[0].session.sessionTimeEnd)}`)), label: ("Время"), }));
    const __VLS_32 = __VLS_31({ text: ((`${__VLS_ctx.formattedTime(__VLS_ctx.tickets[0].session.sessionTimeStart)} - ${__VLS_ctx.formattedTime(__VLS_ctx.tickets[0].session.sessionTimeEnd)}`)), label: ("Время"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ text: ((`${__VLS_ctx.formattedTime(__VLS_ctx.tickets[0].session.sessionTimeStart)} - ${__VLS_ctx.formattedTime(__VLS_ctx.tickets[0].session.sessionTimeEnd)}`)), label: ("Время"), }));
    [tickets, tickets, formattedTime, formattedTime,];
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-between mt-4") }, });
    const __VLS_36 = {}
        .TextWithTitle;
    ({}.TextWithTitle);
    __VLS_components.TextWithTitle;
    [TextWithTitle,];
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ text: ((__VLS_ctx.tickets[0].code[0])), label: ("Ряд"), }));
    const __VLS_38 = __VLS_37({ text: ((__VLS_ctx.tickets[0].code[0])), label: ("Ряд"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ text: ((__VLS_ctx.tickets[0].code[0])), label: ("Ряд"), }));
    [tickets,];
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    const __VLS_42 = {}
        .TextWithTitle;
    ({}.TextWithTitle);
    __VLS_components.TextWithTitle;
    [TextWithTitle,];
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ text: ((__VLS_ctx.tickets.map((t) => t.code).join(', '))), label: ("Места"), }));
    const __VLS_44 = __VLS_43({ text: ((__VLS_ctx.tickets.map((t) => t.code).join(', '))), label: ("Места"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({ text: ((__VLS_ctx.tickets.map((t) => t.code).join(', '))), label: ("Места"), }));
    [tickets,];
    const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['details-film__details'];
        __VLS_styleScopedClasses['details-film__details__img'];
        __VLS_styleScopedClasses['text-h5'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['mt-5'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['mt-5'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['mt-4'];
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
                formattedDate: formattedDate,
                formattedTime: formattedTime,
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
//# sourceMappingURL=DetailsFilmAboutFilm.vue.js.map