const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-col-1 gap-1 pb-20") }, });
    const __VLS_0 = {}
        .BaseInputWithValidation;
    ({}.BaseInputWithValidation);
    __VLS_components.BaseInputWithValidation;
    [BaseInputWithValidation,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ variant: ("solo"), name: ("title"), label: ("Название"), clearable: (true), }));
    const __VLS_2 = __VLS_1({ variant: ("solo"), name: ("title"), label: ("Название"), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ variant: ("solo"), name: ("title"), label: ("Название"), clearable: (true), }));
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_6 = {}
        .BaseInputWithValidation;
    ({}.BaseInputWithValidation);
    __VLS_components.BaseInputWithValidation;
    [BaseInputWithValidation,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ variant: ("solo"), name: ("shortTitle"), label: ("Кодовое название"), clearable: (true), }));
    const __VLS_8 = __VLS_7({ variant: ("solo"), name: ("shortTitle"), label: ("Кодовое название"), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ variant: ("solo"), name: ("shortTitle"), label: ("Кодовое название"), clearable: (true), }));
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_12 = {}
        .BaseInputWithValidation;
    ({}.BaseInputWithValidation);
    __VLS_components.BaseInputWithValidation;
    [BaseInputWithValidation,];
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ variant: ("solo"), name: ("description"), label: ("Описание"), clearable: (true), }));
    const __VLS_14 = __VLS_13({ variant: ("solo"), name: ("description"), label: ("Описание"), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ variant: ("solo"), name: ("description"), label: ("Описание"), clearable: (true), }));
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    const __VLS_18 = {}
        .BaseInputWithValidation;
    ({}.BaseInputWithValidation);
    __VLS_components.BaseInputWithValidation;
    [BaseInputWithValidation,];
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ type: ("number"), variant: ("solo"), name: ("duration"), label: ("Продолжительность (в минутах)"), clearable: (true), }));
    const __VLS_20 = __VLS_19({ type: ("number"), variant: ("solo"), name: ("duration"), label: ("Продолжительность (в минутах)"), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ type: ("number"), variant: ("solo"), name: ("duration"), label: ("Продолжительность (в минутах)"), clearable: (true), }));
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    const __VLS_24 = {}
        .DateInputWithValidation;
    ({}.DateInputWithValidation);
    __VLS_components.DateInputWithValidation;
    [DateInputWithValidation,];
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ label: ("Дата начала"), name: ("dateStart"), min: ((new Date(new Date().setDate(new Date().getDate() - 1)).toISOString())), }));
    const __VLS_26 = __VLS_25({ label: ("Дата начала"), name: ("dateStart"), min: ((new Date(new Date().setDate(new Date().getDate() - 1)).toISOString())), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ label: ("Дата начала"), name: ("dateStart"), min: ((new Date(new Date().setDate(new Date().getDate() - 1)).toISOString())), }));
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    const __VLS_30 = {}
        .BaseDropZoneWithValidation;
    ({}.BaseDropZoneWithValidation);
    __VLS_components.BaseDropZoneWithValidation;
    [BaseDropZoneWithValidation,];
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ maxFiles: ((1)), name: ("imagesIds"), files: ((__VLS_ctx.values.images)), maxFileSize: ((10485760)), }));
    const __VLS_32 = __VLS_31({ maxFiles: ((1)), name: ("imagesIds"), files: ((__VLS_ctx.values.images)), maxFileSize: ((10485760)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ maxFiles: ((1)), name: ("imagesIds"), files: ((__VLS_ctx.values.images)), maxFileSize: ((10485760)), }));
    [values,];
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    const __VLS_36 = {}
        .BaseSelectWithValidation;
    ({}.BaseSelectWithValidation);
    __VLS_components.BaseSelectWithValidation;
    [BaseSelectWithValidation,];
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ label: ("Актеры"), ...{ class: ("mt-5") }, name: ("actorsIds"), items: ((__VLS_ctx.actors)), multiple: (true), chips: (true), }));
    const __VLS_38 = __VLS_37({ label: ("Актеры"), ...{ class: ("mt-5") }, name: ("actorsIds"), items: ((__VLS_ctx.actors)), multiple: (true), chips: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ label: ("Актеры"), ...{ class: ("mt-5") }, name: ("actorsIds"), items: ((__VLS_ctx.actors)), multiple: (true), chips: (true), }));
    [actors,];
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    const __VLS_42 = {}
        .BaseSelectWithValidation;
    ({}.BaseSelectWithValidation);
    __VLS_components.BaseSelectWithValidation;
    [BaseSelectWithValidation,];
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ label: ("Режиссер"), ...{ class: ("mt-5") }, name: ("directorId"), items: ((__VLS_ctx.actors)), chips: (true), }));
    const __VLS_44 = __VLS_43({ label: ("Режиссер"), ...{ class: ("mt-5") }, name: ("directorId"), items: ((__VLS_ctx.actors)), chips: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({ label: ("Режиссер"), ...{ class: ("mt-5") }, name: ("directorId"), items: ((__VLS_ctx.actors)), chips: (true), }));
    [actors,];
    const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xl font-semibold") }, });
    const __VLS_48 = {}
        .DateInput;
    ({}.DateInput);
    __VLS_components.DateInput;
    [DateInput,];
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ class: ("mt-2") }, modelValue: ((__VLS_ctx.sessionDate)), label: ("Дата начала сеанса"), min: ((new Date(new Date().setDate(new Date().getDate() - 1)).toISOString())), }));
    const __VLS_50 = __VLS_49({ ...{ class: ("mt-2") }, modelValue: ((__VLS_ctx.sessionDate)), label: ("Дата начала сеанса"), min: ((new Date(new Date().setDate(new Date().getDate() - 1)).toISOString())), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    ({}({ ...{ class: ("mt-2") }, modelValue: ((__VLS_ctx.sessionDate)), label: ("Дата начала сеанса"), min: ((new Date(new Date().setDate(new Date().getDate() - 1)).toISOString())), }));
    [sessionDate,];
    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    const __VLS_54 = {}
        .TimePicker;
    ({}.TimePicker);
    __VLS_components.TimePicker;
    [TimePicker,];
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ modelValue: ((__VLS_ctx.sessionTime)), }));
    const __VLS_56 = __VLS_55({ modelValue: ((__VLS_ctx.sessionTime)), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    ({}({ modelValue: ((__VLS_ctx.sessionTime)), }));
    [sessionTime,];
    const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
    const __VLS_60 = {}
        .BaseButton;
    ({}.BaseButton);
    __VLS_components.BaseButton;
    [BaseButton,];
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{ 'onClick': {} }, label: ("Добавить"), }));
    const __VLS_62 = __VLS_61({ ...{ 'onClick': {} }, label: ("Добавить"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    ({}({ ...{ 'onClick': {} }, label: ("Добавить"), }));
    let __VLS_66;
    const __VLS_67 = {
        onClick: (__VLS_ctx.handleAddSession)
    };
    [handleAddSession,];
    const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
    let __VLS_63;
    let __VLS_64;
    if (__VLS_ctx.sessions.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-col gap-y-2 ") }, });
        for (const [{ sessionTimeStart, status, cinemaHall, tickets }, index] of __VLS_getVForSourceType((__VLS_ctx.sessions))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-between items-center border-2 border-gray my-2 p-4 rounded-[16px]") }, key: ((index)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-col gap-y-2") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-semibold mr-2") }, });
            [sessions, sessions,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.dataBySessionStatus[status]?.label ?? 'Создано');
            [dataBySessionStatus,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-semibold mr-2") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (cinemaHall?.name ?? 'Не задан');
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-semibold mr-2") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (tickets?.filter(t => t.status === __VLS_ctx.TicketStatus.BOOKED)?.length ?? 0);
            [TicketStatus,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-semibold mr-2") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (tickets?.filter(t => t.status !== __VLS_ctx.TicketStatus.BOOKED)?.length ?? 56);
            [TicketStatus,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-semibold mr-2") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.formatDate(sessionTimeStart, 'dd.MM.yyyy, HH:mm'));
            [formatDate,];
            const __VLS_68 = {}
                .BaseButton;
            ({}.BaseButton);
            __VLS_components.BaseButton;
            [BaseButton,];
            const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ ...{ 'onClick': {} }, disabled: ((!!tickets?.filter(t => t.status === __VLS_ctx.TicketStatus.BOOKED)?.length)), ...{ class: ("mt-4") }, label: ("Удалить"), }));
            const __VLS_70 = __VLS_69({ ...{ 'onClick': {} }, disabled: ((!!tickets?.filter(t => t.status === __VLS_ctx.TicketStatus.BOOKED)?.length)), ...{ class: ("mt-4") }, label: ("Удалить"), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
            ({}({ ...{ 'onClick': {} }, disabled: ((!!tickets?.filter(t => t.status === __VLS_ctx.TicketStatus.BOOKED)?.length)), ...{ class: ("mt-4") }, label: ("Удалить"), }));
            let __VLS_74;
            const __VLS_75 = {
                onClick: (...[$event]) => {
                    if (!((__VLS_ctx.sessions.length)))
                        return;
                    __VLS_ctx.handleDeleteSession(index);
                    [TicketStatus, handleDeleteSession,];
                }
            };
            const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70);
            let __VLS_71;
            let __VLS_72;
        }
    }
    const __VLS_76 = {}
        .AppToolbar;
    ({}.AppToolbar);
    ({}.AppToolbar);
    __VLS_components.AppToolbar;
    __VLS_components.AppToolbar;
    [AppToolbar, AppToolbar,];
    const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({ showFilterButton: ((false)), }));
    const __VLS_78 = __VLS_77({ showFilterButton: ((false)), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
    ({}({ showFilterButton: ((false)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex w-full h-full justify-between items-center p-2") }, });
    const __VLS_82 = {}
        .ButtonLink;
    ({}.ButtonLink);
    __VLS_components.ButtonLink;
    [ButtonLink,];
    const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({ ...{ class: ("font-semibold text-base") }, to: (({ name: 'admin.films' })), label: ("Назад"), }));
    const __VLS_84 = __VLS_83({ ...{ class: ("font-semibold text-base") }, to: (({ name: 'admin.films' })), label: ("Назад"), }, ...__VLS_functionalComponentArgsRest(__VLS_83));
    ({}({ ...{ class: ("font-semibold text-base") }, to: (({ name: 'admin.films' })), label: ("Назад"), }));
    const __VLS_87 = __VLS_pickFunctionalComponentCtx(__VLS_82, __VLS_84);
    const __VLS_88 = {}
        .BaseButton;
    ({}.BaseButton);
    __VLS_components.BaseButton;
    [BaseButton,];
    const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({ ...{ 'onClick': {} }, label: ("Сохранить"), }));
    const __VLS_90 = __VLS_89({ ...{ 'onClick': {} }, label: ("Сохранить"), }, ...__VLS_functionalComponentArgsRest(__VLS_89));
    ({}({ ...{ 'onClick': {} }, label: ("Сохранить"), }));
    let __VLS_94;
    const __VLS_95 = {
        onClick: (__VLS_ctx.handleSubmit)
    };
    [handleSubmit,];
    const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_88, __VLS_90);
    let __VLS_91;
    let __VLS_92;
    (__VLS_81.slots).default;
    const __VLS_81 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-col-1'];
        __VLS_styleScopedClasses['gap-1'];
        __VLS_styleScopedClasses['pb-20'];
        __VLS_styleScopedClasses['mt-5'];
        __VLS_styleScopedClasses['mt-5'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['gap-y-2'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['border-2'];
        __VLS_styleScopedClasses['border-gray'];
        __VLS_styleScopedClasses['my-2'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['rounded-[16px]'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['gap-y-2'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['text-base'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {};
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=FilmForm.vue.js.map