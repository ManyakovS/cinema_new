import { storeToRefs } from 'pinia';
import { useNotify } from '@/utils/hooks/use-notify';
import { groupBy } from 'lodash';
import { getFormatedTime } from '@/utils/functions/get-formated-time';
import { TicketStatus } from '@/@types/schema';
import { useUserStore } from '@/stores/user';
import { useTicketStore } from '@/stores/tickets';
import { useFilmStore } from '@/stores/films';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { getUserTickets } = useTicketStore();
const { ticketsUser } = storeToRefs(useTicketStore());
const { film } = storeToRefs(useFilmStore());
const { getFilm } = useFilmStore();
const { user } = storeToRefs(useUserStore());
const { notifyError } = useNotify();
const $route = useRoute();
const ticketGroups = computed(() => {
    return groupBy(ticketsUser.value, (ticket) => getFormatedTime(ticket.session.sessionTimeStart, 'dd.MM.yyyy HH:mm'));
});
fetchData();
async function fetchData() {
    await getUserTickets({
        userId: +$route.params?.userId,
        filmId: +$route.params?.filmId,
    }).catch(notifyError);
    await getFilm(+$route.params?.filmId);
}
function getTicketLabelAndColor(ticket) {
    return {
        color: ticket.status === TicketStatus.BOOKED
            ? 'color: rgb(var(--v-theme-primary))'
            : ticket.status === TicketStatus.CANCELED
                ? 'color: #AFAFAF'
                : 'color: rgb(var(--v-theme-primary-lighten-3))',
        label: ticket.status === TicketStatus.BOOKED
            ? 'Оплачено'
            : ticket.status === TicketStatus.CANCELED
                ? 'Отменено'
                : 'Завершено',
    };
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("text-h5 text-center font-semibold mb-2") }, });
    for (const [tickets, index] of __VLS_getVForSourceType((__VLS_ctx.ticketGroups))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-h6 mt-4 mb-1 font-semibold") }, });
        (index);
        [ticketGroups,];
        const __VLS_0 = {}
            .VExpansionPanels;
        ({}.VExpansionPanels);
        ({}.VExpansionPanels);
        __VLS_components.VExpansionPanels;
        __VLS_components.vExpansionPanels;
        __VLS_components.VExpansionPanels;
        __VLS_components.vExpansionPanels;
        [VExpansionPanels, VExpansionPanels,];
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ variant: ("accordion"), }));
        const __VLS_2 = __VLS_1({ variant: ("accordion"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ variant: ("accordion"), }));
        for (const [ticket] of __VLS_getVForSourceType((tickets))) {
            const __VLS_6 = {}
                .VExpansionPanel;
            ({}.VExpansionPanel);
            ({}.VExpansionPanel);
            __VLS_components.VExpansionPanel;
            __VLS_components.vExpansionPanel;
            __VLS_components.VExpansionPanel;
            __VLS_components.vExpansionPanel;
            [VExpansionPanel, VExpansionPanel,];
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ key: ((ticket.id)), }));
            const __VLS_8 = __VLS_7({ key: ((ticket.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            ({}({ key: ((ticket.id)), }));
            const __VLS_12 = {}
                .VExpansionPanelTitle;
            ({}.VExpansionPanelTitle);
            ({}.VExpansionPanelTitle);
            __VLS_components.VExpansionPanelTitle;
            __VLS_components.vExpansionPanelTitle;
            __VLS_components.VExpansionPanelTitle;
            __VLS_components.vExpansionPanelTitle;
            [VExpansionPanelTitle, VExpansionPanelTitle,];
            const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
            const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
            ({}({}));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex w-full justify-between") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-subtitle-1 font-semibold") }, });
            (ticket.code[0]);
            (ticket.code.slice(1));
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-subtitle-1 font-semibold") }, ...{ style: ((__VLS_ctx.getTicketLabelAndColor(ticket).color)) }, });
            (__VLS_ctx.getTicketLabelAndColor(ticket).label);
            [getTicketLabelAndColor, getTicketLabelAndColor,];
            (__VLS_17.slots).default;
            const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
            const __VLS_18 = {}
                .VExpansionPanelText;
            ({}.VExpansionPanelText);
            ({}.VExpansionPanelText);
            __VLS_components.VExpansionPanelText;
            __VLS_components.vExpansionPanelText;
            __VLS_components.VExpansionPanelText;
            __VLS_components.vExpansionPanelText;
            [VExpansionPanelText, VExpansionPanelText,];
            const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
            const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
            ({}({}));
            const __VLS_24 = {}
                .DetailsFilmAboutFilm;
            ({}.DetailsFilmAboutFilm);
            __VLS_components.DetailsFilmAboutFilm;
            [DetailsFilmAboutFilm,];
            const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("mt-[40px]") }, film: ((__VLS_ctx.film)), tickets: (([ticket])), }));
            const __VLS_26 = __VLS_25({ ...{ class: ("mt-[40px]") }, film: ((__VLS_ctx.film)), tickets: (([ticket])), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
            ({}({ ...{ class: ("mt-[40px]") }, film: ((__VLS_ctx.film)), tickets: (([ticket])), }));
            [film,];
            const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("details-film__price mt-[4px]") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("text-h6 font-semibold mt-2") }, });
            const __VLS_30 = {}
                .VDivider;
            ({}.VDivider);
            __VLS_components.VDivider;
            [VDivider,];
            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ class: ("my-4") }, color: ("primary"), }));
            const __VLS_32 = __VLS_31({ ...{ class: ("my-4") }, color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
            ({}({ ...{ class: ("my-4") }, color: ("primary"), }));
            const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
            const __VLS_36 = {}
                .PriceWithTitle;
            ({}.PriceWithTitle);
            __VLS_components.PriceWithTitle;
            [PriceWithTitle,];
            const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ class: ("my-4") }, label: ("Стоимость"), cost: ((`${ticket.cost} ₽`)), }));
            const __VLS_38 = __VLS_37({ ...{ class: ("my-4") }, label: ("Стоимость"), cost: ((`${ticket.cost} ₽`)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
            ({}({ ...{ class: ("my-4") }, label: ("Стоимость"), cost: ((`${ticket.cost} ₽`)), }));
            const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
            const __VLS_42 = {}
                .VDivider;
            ({}.VDivider);
            __VLS_components.VDivider;
            [VDivider,];
            const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...{ class: ("my-4") }, color: ("primary"), }));
            const __VLS_44 = __VLS_43({ ...{ class: ("my-4") }, color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
            ({}({ ...{ class: ("my-4") }, color: ("primary"), }));
            const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
            const __VLS_48 = {}
                .PriceWithTitle;
            ({}.PriceWithTitle);
            ({}.PriceWithTitle);
            __VLS_components.PriceWithTitle;
            __VLS_components.PriceWithTitle;
            [PriceWithTitle, PriceWithTitle,];
            const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ class: ("my-4") }, label: ("Статус"), }));
            const __VLS_50 = __VLS_49({ ...{ class: ("my-4") }, label: ("Статус"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
            ({}({ ...{ class: ("my-4") }, label: ("Статус"), }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                (__VLS_53.slots).item;
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-subtitle-1 font-semibold") }, ...{ style: ((__VLS_ctx.getTicketLabelAndColor(ticket).color)) }, });
                (__VLS_ctx.getTicketLabelAndColor(ticket).label);
                [getTicketLabelAndColor, getTicketLabelAndColor,];
            }
            const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
            (__VLS_23.slots).default;
            const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
            (__VLS_11.slots).default;
            const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        }
        (__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['text-h5'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-h6'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['mb-1'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['text-subtitle-1'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['text-subtitle-1'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['mt-[40px]'];
        __VLS_styleScopedClasses['details-film__price'];
        __VLS_styleScopedClasses['mt-[4px]'];
        __VLS_styleScopedClasses['text-h6'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['my-4'];
        __VLS_styleScopedClasses['my-4'];
        __VLS_styleScopedClasses['my-4'];
        __VLS_styleScopedClasses['my-4'];
        __VLS_styleScopedClasses['text-subtitle-1'];
        __VLS_styleScopedClasses['font-semibold'];
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
                ticketGroups: ticketGroups,
                getTicketLabelAndColor: getTicketLabelAndColor,
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
//# sourceMappingURL=TicketsItem.vue.js.map