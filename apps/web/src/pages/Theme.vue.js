import { useTheme } from 'vuetify';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const theme = useTheme();
function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark
        ? 'lightTheme'
        : 'dark';
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
        .VBtn;
    ({}.VBtn);
    ({}.VBtn);
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    [VBtn, VBtn,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, color: ("secondary"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, color: ("secondary"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {} }, color: ("secondary"), }));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (__VLS_ctx.toggleTheme)
    };
    [toggleTheme,];
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    const __VLS_8 = {}
        .VBtn;
    ({}.VBtn);
    ({}.VBtn);
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    [VBtn, VBtn,];
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onClick': {} }, color: ("primary-lighten-5"), }));
    const __VLS_10 = __VLS_9({ ...{ 'onClick': {} }, color: ("primary-lighten-5"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ ...{ 'onClick': {} }, color: ("primary-lighten-5"), }));
    let __VLS_14;
    const __VLS_15 = {
        onClick: (__VLS_ctx.toggleTheme)
    };
    [toggleTheme,];
    (__VLS_13.slots).default;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    let __VLS_11;
    let __VLS_12;
    const __VLS_16 = {}
        .VBtn;
    ({}.VBtn);
    ({}.VBtn);
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    [VBtn, VBtn,];
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ ...{ 'onClick': {} }, color: ("primary-darken-3"), }));
    const __VLS_18 = __VLS_17({ ...{ 'onClick': {} }, color: ("primary-darken-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    ({}({ ...{ 'onClick': {} }, color: ("primary-darken-3"), }));
    let __VLS_22;
    const __VLS_23 = {
        onClick: (__VLS_ctx.toggleTheme)
    };
    [toggleTheme,];
    (__VLS_21.slots).default;
    const __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
    let __VLS_19;
    let __VLS_20;
    const __VLS_24 = {}
        .VBtn;
    ({}.VBtn);
    ({}.VBtn);
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    [VBtn, VBtn,];
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ 'onClick': {} }, color: ("primary-darken-2"), }));
    const __VLS_26 = __VLS_25({ ...{ 'onClick': {} }, color: ("primary-darken-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ ...{ 'onClick': {} }, color: ("primary-darken-2"), }));
    let __VLS_30;
    const __VLS_31 = {
        onClick: (__VLS_ctx.toggleTheme)
    };
    [toggleTheme,];
    (__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    let __VLS_27;
    let __VLS_28;
    const __VLS_32 = {}
        .VBtn;
    ({}.VBtn);
    ({}.VBtn);
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    [VBtn, VBtn,];
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{ 'onClick': {} }, color: ("primary"), }));
    const __VLS_34 = __VLS_33({ ...{ 'onClick': {} }, color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ ...{ 'onClick': {} }, color: ("primary"), }));
    let __VLS_38;
    const __VLS_39 = {
        onClick: (__VLS_ctx.toggleTheme)
    };
    [toggleTheme,];
    (__VLS_37.slots).default;
    const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    let __VLS_35;
    let __VLS_36;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                toggleTheme: toggleTheme,
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
//# sourceMappingURL=Theme.vue.js.map