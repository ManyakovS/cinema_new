const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const $emit = defineEmits();
const search = ref('');
function handleSearch(isActive) {
    $emit('update:search', search.value);
    isActive.value = false;
}
function handleClear(isActive) {
    $emit('update:search', '');
    isActive.value = false;
}
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
    const __VLS_0 = {}
        .VBtn;
    ({}.VBtn);
    ({}.VBtn);
    __VLS_components.VBtn;
    __VLS_components.VBtn;
    [VBtn, VBtn,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, ...(props), ...{ class: ("base-search-button") }, size: ("26"), prependIcon: ("mdi-magnify"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, ...(props), ...{ class: ("base-search-button") }, size: ("26"), prependIcon: ("mdi-magnify"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {} }, ...(props), ...{ class: ("base-search-button") }, size: ("26"), prependIcon: ("mdi-magnify"), }));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (__VLS_ctx.handleSearch)
    };
    const __VLS_8 = {}
        .VDialog;
    ({}.VDialog);
    ({}.VDialog);
    __VLS_components.VDialog;
    __VLS_components.vDialog;
    __VLS_components.VDialog;
    __VLS_components.vDialog;
    [VDialog, VDialog,];
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ activator: ("parent"), maxWidth: ("340"), ...{ class: ("base-search-window") }, }));
    const __VLS_10 = __VLS_9({ activator: ("parent"), maxWidth: ("340"), ...{ class: ("base-search-window") }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ activator: ("parent"), maxWidth: ("340"), ...{ class: ("base-search-window") }, }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ isActive }] = __VLS_getSlotParams((__VLS_13.slots).default);
        const __VLS_14 = {}
            .VCard;
        ({}.VCard);
        ({}.VCard);
        __VLS_components.VCard;
        __VLS_components.vCard;
        __VLS_components.VCard;
        __VLS_components.vCard;
        [VCard, VCard,];
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({}));
        const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
        ({}({}));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            (__VLS_19.slots).text;
            const __VLS_20 = {}
                .BaseInput;
            ({}.BaseInput);
            __VLS_components.BaseInput;
            [BaseInput,];
            const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ modelValue: ((__VLS_ctx.search)), placeholder: ("Поиск"), hideDetails: (true), }));
            const __VLS_22 = __VLS_21({ modelValue: ((__VLS_ctx.search)), placeholder: ("Поиск"), hideDetails: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
            ({}({ modelValue: ((__VLS_ctx.search)), placeholder: ("Поиск"), hideDetails: (true), }));
            [handleSearch, search,];
            const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            (__VLS_19.slots).actions;
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex gap-4 justify-end w-full") }, });
            const __VLS_26 = {}
                .BaseButton;
            ({}.BaseButton);
            __VLS_components.BaseButton;
            [BaseButton,];
            const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{ 'onClick': {} }, label: ("Очистить"), }));
            const __VLS_28 = __VLS_27({ ...{ 'onClick': {} }, label: ("Очистить"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
            ({}({ ...{ 'onClick': {} }, label: ("Очистить"), }));
            let __VLS_32;
            const __VLS_33 = {
                onClick: (...[$event]) => {
                    __VLS_ctx.handleClear(isActive);
                    [handleClear,];
                }
            };
            const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
            let __VLS_29;
            let __VLS_30;
            const __VLS_34 = {}
                .BaseButton;
            ({}.BaseButton);
            __VLS_components.BaseButton;
            [BaseButton,];
            const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({ ...{ 'onClick': {} }, label: ("Найти"), }));
            const __VLS_36 = __VLS_35({ ...{ 'onClick': {} }, label: ("Найти"), }, ...__VLS_functionalComponentArgsRest(__VLS_35));
            ({}({ ...{ 'onClick': {} }, label: ("Найти"), }));
            let __VLS_40;
            const __VLS_41 = {
                onClick: (...[$event]) => {
                    __VLS_ctx.handleSearch(isActive);
                    [handleSearch,];
                }
            };
            const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_34, __VLS_36);
            let __VLS_37;
            let __VLS_38;
        }
        const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    }
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['base-search-button'];
        __VLS_styleScopedClasses['base-search-window'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['justify-end'];
        __VLS_styleScopedClasses['w-full'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                search: search,
                handleSearch: handleSearch,
                handleClear: handleClear,
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
//# sourceMappingURL=BaseSearchButton.vue.js.map