import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useTicketStore } from '@/stores/tickets';
import { sum, sortBy } from 'lodash';
import { setCookie } from '@/utils/functions/get-cookie';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const $router = useRouter();
const { user } = storeToRefs(useUserStore());
const { bookTicket } = useTicketStore();
async function handleClick(to) {
    try {
        await bookTicket({
            userId: user.value.id,
            ticketsIds: props.tickets.map((t) => t.id),
        });
        setCookie(`Tickets:user_${user.value.id}`, props.tickets.map((t) => t.id.toString()).join(','), 60);
        $router.push(to);
    }
    catch (error) {
        console.log(error);
    }
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
        .BaseFixedButton;
    ({}.BaseFixedButton);
    ({}.BaseFixedButton);
    __VLS_components.BaseFixedButton;
    __VLS_components.BaseFixedButton;
    [BaseFixedButton, BaseFixedButton,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ label: ("Далее"), to: (({ name: 'film-details' })), }));
    const __VLS_2 = __VLS_1({ label: ("Далее"), to: (({ name: 'film-details' })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ label: ("Далее"), to: (({ name: 'film-details' })), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ label, to }] = __VLS_getSlotParams((__VLS_5.slots).default);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex gap-8 items-center w-full") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex w-50 gap-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-medium") }, });
        const __VLS_6 = {}
            .BaseTooltip;
        ({}.BaseTooltip);
        ({}.BaseTooltip);
        __VLS_components.BaseTooltip;
        __VLS_components.BaseTooltip;
        [BaseTooltip, BaseTooltip,];
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ location: ("top"), text: ((__VLS_ctx.sortBy(__VLS_ctx.tickets, 'code')
                .map((t) => t.code)
                .join(', '))), }));
        const __VLS_8 = __VLS_7({ location: ("top"), text: ((__VLS_ctx.sortBy(__VLS_ctx.tickets, 'code')
                .map((t) => t.code)
                .join(', '))), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ location: ("top"), text: ((__VLS_ctx.sortBy(__VLS_ctx.tickets, 'code')
                .map((t) => t.code)
                .join(', '))), }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { activator: { props }, click } = __VLS_getSlotParam((__VLS_11.slots).default);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (click) }, ...(props), ...{ class: ("font-bold text-primary") }, });
            (__VLS_ctx.sortBy(__VLS_ctx.tickets, 'code')
                .map((t) => t.code)
                .slice(0, 2)
                .join(', '));
            [sortBy, sortBy, tickets, tickets,];
        }
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-medium") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-bold text-primary") }, });
        (__VLS_ctx.sum(__VLS_ctx.tickets.map((t) => t.cost)) ?? 0);
        [tickets, sum,];
        const __VLS_12 = {}
            .BaseButton;
        ({}.BaseButton);
        __VLS_components.BaseButton;
        [BaseButton,];
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onClick': {} }, ...{ class: ("w-50") }, label: ((label)), }));
        const __VLS_14 = __VLS_13({ ...{ 'onClick': {} }, ...{ class: ("w-50") }, label: ((label)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ ...{ 'onClick': {} }, ...{ class: ("w-50") }, label: ((label)), }));
        let __VLS_18;
        const __VLS_19 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleClick(to);
                [handleClick,];
            }
        };
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        let __VLS_15;
        let __VLS_16;
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['gap-8'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['w-50'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-primary'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-primary'];
        __VLS_styleScopedClasses['w-50'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                sum: sum,
                sortBy: sortBy,
                handleClick: handleClick,
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
//# sourceMappingURL=TicketsFilmFooter.vue.js.map