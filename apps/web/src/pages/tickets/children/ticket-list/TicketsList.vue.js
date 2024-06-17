import { TickedPageEnum } from './model/tikets-types';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const $route = useRoute();
const $router = useRouter();
const tabs = [
    {
        name: 'Скоро',
        value: TickedPageEnum.SOON,
    },
    {
        name: 'Завершены',
        value: TickedPageEnum.DONE,
    },
    {
        name: 'Отменены',
        value: TickedPageEnum.CANCELED,
    },
];
const tab = computed({
    get() {
        const { tab } = $route.query;
        return (tab ?? TickedPageEnum.SOON);
    },
    set(value) {
        $router.replace({ name: 'tickets', query: { tab: value } });
        return value;
    },
});
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
    const __VLS_0 = {}
        .BaseSearchButton;
    ({}.BaseSearchButton);
    __VLS_components.BaseSearchButton;
    [BaseSearchButton,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_6 = {}
        .VTabs;
    ({}.VTabs);
    ({}.VTabs);
    __VLS_components.VTabs;
    __VLS_components.vTabs;
    __VLS_components.VTabs;
    __VLS_components.vTabs;
    [VTabs, VTabs,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ modelValue: ((__VLS_ctx.tab)), alignTabs: ("center"), color: ("primary font-semibold"), }));
    const __VLS_8 = __VLS_7({ modelValue: ((__VLS_ctx.tab)), alignTabs: ("center"), color: ("primary font-semibold"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ modelValue: ((__VLS_ctx.tab)), alignTabs: ("center"), color: ("primary font-semibold"), }));
    for (const [_tab] of __VLS_getVForSourceType((__VLS_ctx.tabs))) {
        const __VLS_12 = {}
            .VTab;
        ({}.VTab);
        ({}.VTab);
        __VLS_components.VTab;
        __VLS_components.vTab;
        __VLS_components.VTab;
        __VLS_components.vTab;
        [VTab, VTab,];
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ key: ((_tab.value)), value: ((_tab.value)), }));
        const __VLS_14 = __VLS_13({ key: ((_tab.value)), value: ((_tab.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ key: ((_tab.value)), value: ((_tab.value)), }));
        (_tab.name);
        [tab, tabs,];
        (__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    }
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_18 = {}
        .VWindow;
    ({}.VWindow);
    ({}.VWindow);
    __VLS_components.VWindow;
    __VLS_components.vWindow;
    __VLS_components.VWindow;
    __VLS_components.vWindow;
    [VWindow, VWindow,];
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ modelValue: ((__VLS_ctx.tab)), }));
    const __VLS_20 = __VLS_19({ modelValue: ((__VLS_ctx.tab)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ modelValue: ((__VLS_ctx.tab)), }));
    const __VLS_24 = {}
        .TicketsSoon;
    ({}.TicketsSoon);
    __VLS_components.TicketsSoon;
    [TicketsSoon,];
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ itemPage: ((__VLS_ctx.TickedPageEnum.SOON)), }));
    const __VLS_26 = __VLS_25({ itemPage: ((__VLS_ctx.TickedPageEnum.SOON)), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ itemPage: ((__VLS_ctx.TickedPageEnum.SOON)), }));
    [tab, TickedPageEnum,];
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    const __VLS_30 = {}
        .TicketsDone;
    ({}.TicketsDone);
    __VLS_components.TicketsDone;
    [TicketsDone,];
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ itemPage: ((__VLS_ctx.TickedPageEnum.DONE)), }));
    const __VLS_32 = __VLS_31({ itemPage: ((__VLS_ctx.TickedPageEnum.DONE)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ itemPage: ((__VLS_ctx.TickedPageEnum.DONE)), }));
    [TickedPageEnum,];
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    const __VLS_36 = {}
        .TicketsCanceled;
    ({}.TicketsCanceled);
    __VLS_components.TicketsCanceled;
    [TicketsCanceled,];
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ itemPage: ((__VLS_ctx.TickedPageEnum.CANCELED)), }));
    const __VLS_38 = __VLS_37({ itemPage: ((__VLS_ctx.TickedPageEnum.CANCELED)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ itemPage: ((__VLS_ctx.TickedPageEnum.CANCELED)), }));
    [TickedPageEnum,];
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    (__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['text-h5'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['mb-2'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                TickedPageEnum: TickedPageEnum,
                tabs: tabs,
                tab: tab,
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
//# sourceMappingURL=TicketsList.vue.js.map