import { TicketStatus } from '@/@types/schema';
import { cloneDeep, remove } from 'lodash';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const $emit = defineEmits();
const sessionScope = ref(cloneDeep(props.session));
const _selected = computed({
    get() {
        return props.selected;
    },
    set(selected) {
        $emit('update:selected', selected);
    },
});
function handleSelect(ticket) {
    const { tickets } = sessionScope.value;
    tickets.splice(tickets.findIndex((c) => c.id === ticket.id), 1, {
        ...ticket,
        status: ticketStatus[ticket.status],
    });
    if (ticket.status === TicketStatus.AVAILABLE)
        _selected.value.push(ticket);
    else if (ticket.status === TicketStatus.SELECTED &&
        _selected.value.map((s) => s.id).includes(ticket.id))
        _selected.value = _selected.value = remove(_selected.value, ticket);
}
const ticketStatus = {
    [TicketStatus.AVAILABLE]: TicketStatus.SELECTED,
    [TicketStatus.SELECTED]: TicketStatus.AVAILABLE,
    [TicketStatus.BOOKED]: TicketStatus.BOOKED,
    [TicketStatus.RESERVATED]: TicketStatus.RESERVATED,
};
watch(() => props.session.id, () => {
    sessionScope.value = cloneDeep(props.session);
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tickets-film-seats-container") }, });
    for (const [ticket, index] of __VLS_getVForSourceType((__VLS_ctx.sessionScope.tickets))) {
        (ticket);
        const __VLS_0 = {}
            .TicketsFilmSeatsItem;
        ({}.TicketsFilmSeatsItem);
        __VLS_components.TicketsFilmSeatsItem;
        [TicketsFilmSeatsItem,];
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, ticket: ((ticket)), }));
        const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, ticket: ((ticket)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{ 'onClick': {} }, ticket: ((ticket)), }));
        let __VLS_6;
        const __VLS_7 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleSelect(ticket);
                [sessionScope, handleSelect,];
            }
        };
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        let __VLS_3;
        let __VLS_4;
        if (index === 3 || index % 8 === 3) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("w-[20px]") }, });
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['tickets-film-seats-container'];
        __VLS_styleScopedClasses['w-[20px]'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                sessionScope: sessionScope,
                handleSelect: handleSelect,
            };
        },
        props: {},
        emits: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
    emits: {},
});
;
//# sourceMappingURL=TicketsFilmSeatsContainer.vue.js.map