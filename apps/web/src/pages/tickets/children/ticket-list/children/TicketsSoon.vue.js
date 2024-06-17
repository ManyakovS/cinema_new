import { storeToRefs } from 'pinia';
import { TicketStatus, } from '@/@types/schema';
import { useFilmStore } from '@/stores/films';
import { useUserStore } from '@/stores/user';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const __VLS_props = defineProps();
const { getFilmsByUser } = useFilmStore();
const { user } = storeToRefs(useUserStore());
const filter = ref({
    userId: user.value?.id,
    ticketStatus: TicketStatus.BOOKED,
});
const films = ref([]);
fetchData();
async function fetchData() {
    try {
        films.value = await getFilmsByUser(filter.value);
    }
    catch { }
}
function handleUpdateNotification(value, film) {
    console.log(value);
    console.log(film);
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
    const __VLS_0 = {}
        .VWindowItem;
    ({}.VWindowItem);
    ({}.VWindowItem);
    __VLS_components.VWindowItem;
    __VLS_components.vWindowItem;
    __VLS_components.VWindowItem;
    __VLS_components.vWindowItem;
    [VWindowItem, VWindowItem,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ value: ((__VLS_ctx.itemPage)), }));
    const __VLS_2 = __VLS_1({ value: ((__VLS_ctx.itemPage)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ value: ((__VLS_ctx.itemPage)), }));
    const __VLS_6 = {}
        .VContainer;
    ({}.VContainer);
    ({}.VContainer);
    __VLS_components.VContainer;
    __VLS_components.vContainer;
    __VLS_components.VContainer;
    __VLS_components.vContainer;
    [VContainer, VContainer,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ fluid: (true), }));
    const __VLS_8 = __VLS_7({ fluid: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ fluid: (true), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-4") }, });
    for (const [film] of __VLS_getVForSourceType((__VLS_ctx.films))) {
        const __VLS_12 = {}
            .RouterLink;
        ({}.RouterLink);
        ({}.RouterLink);
        __VLS_components.RouterLink;
        __VLS_components.routerLink;
        __VLS_components.RouterLink;
        __VLS_components.routerLink;
        [RouterLink, RouterLink,];
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: (({
                name: 'tickets.user',
                params: { userId: __VLS_ctx.user.id, filmId: film.id },
            })), }));
        const __VLS_14 = __VLS_13({ to: (({
                name: 'tickets.user',
                params: { userId: __VLS_ctx.user.id, filmId: film.id },
            })), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ to: (({
                name: 'tickets.user',
                params: { userId: __VLS_ctx.user.id, filmId: film.id },
            })), }));
        if (film) {
            const __VLS_18 = {}
                .TicketsFilmCard;
            ({}.TicketsFilmCard);
            ({}.TicketsFilmCard);
            __VLS_components.TicketsFilmCard;
            __VLS_components.TicketsFilmCard;
            [TicketsFilmCard, TicketsFilmCard,];
            const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ film: ((film)), }));
            const __VLS_20 = __VLS_19({ film: ((film)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
            ({}({ film: ((film)), }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                (__VLS_23.slots).action;
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-between") }, });
                const __VLS_24 = {}
                    .BaseSwitch;
                ({}.BaseSwitch);
                __VLS_components.BaseSwitch;
                [BaseSwitch,];
                const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onClick': {} }, ...{ class: ("flex-row-reverse gap-6") }, modelValue: ((film.users[0].notification)), label: ("Уведомления"), }));
                const __VLS_26 = __VLS_25({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onClick': {} }, ...{ class: ("flex-row-reverse gap-6") }, modelValue: ((film.users[0].notification)), label: ("Уведомления"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
                ({}({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onClick': {} }, ...{ class: ("flex-row-reverse gap-6") }, modelValue: ((film.users[0].notification)), label: ("Уведомления"), }));
                let __VLS_30;
                const __VLS_31 = {
                    'onUpdate:modelValue': ((value) => __VLS_ctx.handleUpdateNotification(value, film))
                };
                const __VLS_32 = {
                    onClick: (...[$event]) => {
                        if (!((film)))
                            return;
                        ;
                        [itemPage, films, user, handleUpdateNotification,];
                    }
                };
                const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
                let __VLS_27;
                let __VLS_28;
            }
            const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
        }
        (__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    }
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['flex-row-reverse'];
        __VLS_styleScopedClasses['gap-6'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                user: user,
                films: films,
                handleUpdateNotification: handleUpdateNotification,
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
//# sourceMappingURL=TicketsSoon.vue.js.map