import { TicketStatus } from '@/@types/schema';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const __VLS_props = defineProps();
const icon = {
    [TicketStatus.AVAILABLE]: {
        icon: 'mdi-sofa-single-outline',
        color: 'primary',
    },
    [TicketStatus.SELECTED]: {
        icon: 'mdi-sofa-single',
        color: 'primary',
    },
    [TicketStatus.BOOKED]: {
        icon: 'mdi-sofa-single',
        color: 'grey',
    },
    [TicketStatus.RESERVATED]: {
        icon: 'mdi-sofa-single',
        color: 'grey',
    },
};
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-column items-center w-[34px]") }, });
    const __VLS_0 = {}
        .VBtn;
    ({}.VBtn);
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    [VBtn,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ size: ("34px"), ...({ ...__VLS_ctx.icon[__VLS_ctx.ticket.status] }), variant: ("text"), ...{ class: ("text-xl") }, }));
    const __VLS_2 = __VLS_1({ size: ("34px"), ...({ ...__VLS_ctx.icon[__VLS_ctx.ticket.status] }), variant: ("text"), ...{ class: ("text-xl") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ size: ("34px"), ...({ ...__VLS_ctx.icon[__VLS_ctx.ticket.status] }), variant: ("text"), ...{ class: ("text-xl") }, }));
    [icon, ticket,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-semibold text-sm") }, });
    (__VLS_ctx.ticket.code);
    [ticket,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['w-[34px]'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['text-sm'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                icon: icon,
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
//# sourceMappingURL=TicketsFilmSeatsItem.vue.js.map