import { storeToRefs } from 'pinia';
import { sum } from 'lodash';
import { getCookie, deleteCookie } from '@/utils/functions/get-cookie';
import { useNotify } from '@/utils/hooks/use-notify';
import { useUserStore } from '@/stores/user';
import { useTicketStore } from '@/stores/tickets';
import { useFilmStore } from '@/stores/films';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { getTickets, buyTicket } = useTicketStore();
const { tickets } = storeToRefs(useTicketStore());
const { film } = storeToRefs(useFilmStore());
const { user } = storeToRefs(useUserStore());
const { notifyError } = useNotify();
const $router = useRouter();
fetchData();
function fetchData() {
    const ticketIds = getCookie(`Tickets:user_${user.value.id}`);
    if (ticketIds)
        getTickets(ticketIds.split(',').map((t) => Number.parseInt(t))).catch(notifyError);
    else {
        notifyError('Нет выбранных билетов, или вышло время оплаты');
        $router.push({ name: 'film-tickets' });
    }
}
async function handleClick(to) {
    try {
        await buyTicket({
            userId: user.value.id,
            ticketsIds: tickets.value.map((t) => t.id),
        });
        deleteCookie(`Tickets:user_${user.value.id}`);
        $router.push(to);
    }
    catch (error) {
        notifyError(error);
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
    if (__VLS_ctx.tickets.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-column h-full gap-8") }, });
        const __VLS_0 = {}
            .ButtonBack;
        ({}.ButtonBack);
        __VLS_components.ButtonBack;
        [ButtonBack,];
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: (({ name: 'film-tickets' })), color: ("black"), }));
        const __VLS_2 = __VLS_1({ to: (({ name: 'film-tickets' })), color: ("black"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ to: (({ name: 'film-tickets' })), color: ("black"), }));
        [tickets,];
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-column h-full gap-1 mt-[80px]") }, });
        const __VLS_6 = {}
            .DetailsFilmAboutFilm;
        ({}.DetailsFilmAboutFilm);
        __VLS_components.DetailsFilmAboutFilm;
        [DetailsFilmAboutFilm,];
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ film: ((__VLS_ctx.film)), tickets: ((__VLS_ctx.tickets)), }));
        const __VLS_8 = __VLS_7({ film: ((__VLS_ctx.film)), tickets: ((__VLS_ctx.tickets)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ film: ((__VLS_ctx.film)), tickets: ((__VLS_ctx.tickets)), }));
        [tickets, film,];
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("details-film__price") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("text-h6 font-semibold mt-2") }, });
        const __VLS_12 = {}
            .VDivider;
        ({}.VDivider);
        __VLS_components.VDivider;
        [VDivider,];
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("my-4") }, color: ("primary"), }));
        const __VLS_14 = __VLS_13({ ...{ class: ("my-4") }, color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ ...{ class: ("my-4") }, color: ("primary"), }));
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        const __VLS_18 = {}
            .PriceWithTitle;
        ({}.PriceWithTitle);
        __VLS_components.PriceWithTitle;
        [PriceWithTitle,];
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("my-4") }, label: ("Билеты"), cost: ((`${__VLS_ctx.sum(__VLS_ctx.tickets.map((t) => t.cost)) ?? 0} ₽`)), }));
        const __VLS_20 = __VLS_19({ ...{ class: ("my-4") }, label: ("Билеты"), cost: ((`${__VLS_ctx.sum(__VLS_ctx.tickets.map((t) => t.cost)) ?? 0} ₽`)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ ...{ class: ("my-4") }, label: ("Билеты"), cost: ((`${__VLS_ctx.sum(__VLS_ctx.tickets.map((t) => t.cost)) ?? 0} ₽`)), }));
        [tickets, sum,];
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
        const __VLS_24 = {}
            .PriceWithTitle;
        ({}.PriceWithTitle);
        __VLS_components.PriceWithTitle;
        [PriceWithTitle,];
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("my-4") }, label: ("Сервис"), cost: ("0 ₽"), }));
        const __VLS_26 = __VLS_25({ ...{ class: ("my-4") }, label: ("Сервис"), cost: ("0 ₽"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        ({}({ ...{ class: ("my-4") }, label: ("Сервис"), cost: ("0 ₽"), }));
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
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
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ class: ("my-4") }, label: ("Всего"), cost: ((`${__VLS_ctx.sum(__VLS_ctx.tickets.map((t) => t.cost)) ?? 0} ₽`)), }));
        const __VLS_38 = __VLS_37({ ...{ class: ("my-4") }, label: ("Всего"), cost: ((`${__VLS_ctx.sum(__VLS_ctx.tickets.map((t) => t.cost)) ?? 0} ₽`)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        ({}({ ...{ class: ("my-4") }, label: ("Всего"), cost: ((`${__VLS_ctx.sum(__VLS_ctx.tickets.map((t) => t.cost)) ?? 0} ₽`)), }));
        [tickets, sum,];
        const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
        const __VLS_42 = {}
            .BaseFixedButton;
        ({}.BaseFixedButton);
        __VLS_components.BaseFixedButton;
        [BaseFixedButton,];
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...{ 'onClick': {} }, label: ("Оплатить"), }));
        const __VLS_44 = __VLS_43({ ...{ 'onClick': {} }, label: ("Оплатить"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        ({}({ ...{ 'onClick': {} }, label: ("Оплатить"), }));
        let __VLS_48;
        const __VLS_49 = {
            onClick: (...[$event]) => {
                if (!((__VLS_ctx.tickets.length)))
                    return;
                __VLS_ctx.handleClick({ name: 'hardcode-back-payment' });
                [handleClick,];
            }
        };
        const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
        let __VLS_45;
        let __VLS_46;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['gap-8'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['gap-1'];
        __VLS_styleScopedClasses['mt-[80px]'];
        __VLS_styleScopedClasses['details-film__price'];
        __VLS_styleScopedClasses['text-h6'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['my-4'];
        __VLS_styleScopedClasses['my-4'];
        __VLS_styleScopedClasses['my-4'];
        __VLS_styleScopedClasses['my-4'];
        __VLS_styleScopedClasses['my-4'];
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
                tickets: tickets,
                film: film,
                handleClick: handleClick,
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
//# sourceMappingURL=DetailsFilm.vue.js.map