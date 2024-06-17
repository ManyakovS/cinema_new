import { storeToRefs } from 'pinia';
import { SessionStatus } from '@/@types/schema';
import { useSessionStore } from '@/stores/sessions';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { getSessions, getSessionsByDate, getSession } = useSessionStore();
const { sessions, sessionsByDate, session } = storeToRefs(useSessionStore());
const $route = useRoute();
const selectedDateSession = ref();
const filter = ref({
    filmId: +$route.params.filmIdentifier,
    status: SessionStatus.AVAILABLE,
});
const tickets = ref([]);
fetchData();
async function fetchData() {
    await getSessions(filter.value);
}
async function handleSelectSessionDate(_session) {
    if (_session) {
        await getSessionsByDate({
            ...filter.value,
            sessionTimeStart: _session.sessionTimeStart,
        });
        getSession(sessionsByDate.value?.[0]?.id);
    }
    selectedDateSession.value = _session;
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
    if (__VLS_ctx.sessions) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-column h-full gap-8") }, });
        const __VLS_0 = {}
            .ButtonBack;
        ({}.ButtonBack);
        __VLS_components.ButtonBack;
        [ButtonBack,];
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: (({ name: 'film-about' })), }));
        const __VLS_2 = __VLS_1({ to: (({ name: 'film-about' })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ to: (({ name: 'film-about' })), }));
        [sessions,];
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("text-h5 text-center font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-column h-full justify-between") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-column h-full gap-4") }, });
        const __VLS_6 = {}
            .TicketsFilmHint;
        ({}.TicketsFilmHint);
        __VLS_components.TicketsFilmHint;
        [TicketsFilmHint,];
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
        const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({}));
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        const __VLS_12 = {}
            .DatingFilmDatePicker;
        ({}.DatingFilmDatePicker);
        __VLS_components.DatingFilmDatePicker;
        [DatingFilmDatePicker,];
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onUpdate:session': {} }, sessions: ((__VLS_ctx.sessions)), session: ((__VLS_ctx.selectedDateSession)), }));
        const __VLS_14 = __VLS_13({ ...{ 'onUpdate:session': {} }, sessions: ((__VLS_ctx.sessions)), session: ((__VLS_ctx.selectedDateSession)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ ...{ 'onUpdate:session': {} }, sessions: ((__VLS_ctx.sessions)), session: ((__VLS_ctx.selectedDateSession)), }));
        let __VLS_18;
        const __VLS_19 = {
            'onUpdate:session': (__VLS_ctx.handleSelectSessionDate)
        };
        [sessions, selectedDateSession, handleSelectSessionDate,];
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        let __VLS_15;
        let __VLS_16;
        const __VLS_20 = {}
            .DatingFilmTimePicker;
        ({}.DatingFilmTimePicker);
        __VLS_components.DatingFilmTimePicker;
        [DatingFilmTimePicker,];
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ sessions: ((__VLS_ctx.sessionsByDate)), session: ((__VLS_ctx.session)), }));
        const __VLS_22 = __VLS_21({ sessions: ((__VLS_ctx.sessionsByDate)), session: ((__VLS_ctx.session)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
        ({}({ sessions: ((__VLS_ctx.sessionsByDate)), session: ((__VLS_ctx.session)), }));
        [sessionsByDate, session,];
        const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
        if (__VLS_ctx.session) {
            const __VLS_26 = {}
                .TicketsFilmSeatsContainer;
            ({}.TicketsFilmSeatsContainer);
            __VLS_components.TicketsFilmSeatsContainer;
            [TicketsFilmSeatsContainer,];
            const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{ class: ("mb-[88px]") }, session: ((__VLS_ctx.session)), selected: ((__VLS_ctx.tickets)), }));
            const __VLS_28 = __VLS_27({ ...{ class: ("mb-[88px]") }, session: ((__VLS_ctx.session)), selected: ((__VLS_ctx.tickets)), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
            ({}({ ...{ class: ("mb-[88px]") }, session: ((__VLS_ctx.session)), selected: ((__VLS_ctx.tickets)), }));
            [session, session, tickets,];
            const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
        }
        const __VLS_32 = {}
            .TicketsFilmFooter;
        ({}.TicketsFilmFooter);
        __VLS_components.TicketsFilmFooter;
        [TicketsFilmFooter,];
        const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ tickets: ((__VLS_ctx.tickets)), }));
        const __VLS_34 = __VLS_33({ tickets: ((__VLS_ctx.tickets)), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
        ({}({ tickets: ((__VLS_ctx.tickets)), }));
        [tickets,];
        const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['gap-8'];
        __VLS_styleScopedClasses['text-h5'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['mb-[88px]'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                sessions: sessions,
                sessionsByDate: sessionsByDate,
                session: session,
                selectedDateSession: selectedDateSession,
                tickets: tickets,
                handleSelectSessionDate: handleSelectSessionDate,
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
//# sourceMappingURL=TicketsFilm.vue.js.map