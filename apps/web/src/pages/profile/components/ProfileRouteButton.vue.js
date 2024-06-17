const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = withDefaults(defineProps(), {
    iconColor: 'primary',
});
const __VLS_withDefaultsArg = (function (t) { return t; })({
    iconColor: 'primary',
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
    const __VLS_0 = {}
        .BaseRouterLink;
    ({}.BaseRouterLink);
    ({}.BaseRouterLink);
    __VLS_components.BaseRouterLink;
    __VLS_components.BaseRouterLink;
    [BaseRouterLink, BaseRouterLink,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("d-flex") }, to: ((__VLS_ctx.to)), }));
    const __VLS_2 = __VLS_1({ ...{ class: ("d-flex") }, to: ((__VLS_ctx.to)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("d-flex") }, to: ((__VLS_ctx.to)), }));
    const __VLS_6 = {}
        .VBtn;
    ({}.VBtn);
    ({}.VBtn);
    __VLS_components.VBtn;
    __VLS_components.VBtn;
    [VBtn, VBtn,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClick': {} }, ...{ class: ("profile-route-button") }, prependIcon: ((__VLS_ctx.icon)), }));
    const __VLS_8 = __VLS_7({ ...{ 'onClick': {} }, ...{ class: ("profile-route-button") }, prependIcon: ((__VLS_ctx.icon)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ 'onClick': {} }, ...{ class: ("profile-route-button") }, prependIcon: ((__VLS_ctx.icon)), }));
    let __VLS_12;
    const __VLS_13 = {
        onClick: (__VLS_ctx.callback)
    };
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_11.slots).prepend;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("profile-route-button__icon d-flex") }, });
        const __VLS_14 = {}
            .VIcon;
        ({}.VIcon);
        __VLS_components.VIcon;
        __VLS_components.vIcon;
        [VIcon,];
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ icon: ((__VLS_ctx.icon)), color: ((__VLS_ctx.iconColor)), size: ("30"), }));
        const __VLS_16 = __VLS_15({ icon: ((__VLS_ctx.icon)), color: ((__VLS_ctx.iconColor)), size: ("30"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
        ({}({ icon: ((__VLS_ctx.icon)), color: ((__VLS_ctx.iconColor)), size: ("30"), }));
        [to, icon, icon, callback, iconColor,];
        const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_11.slots).default;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("profile-route-button__content") }, });
        if (props.text) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ml-1 profile-route-button__content__text") }, });
            (__VLS_ctx.text);
            [text,];
        }
        if (props.secondText) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("profile-route-button__content__second-text") }, });
            (__VLS_ctx.secondText);
            [secondText,];
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_11.slots).append;
        if (props.to) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("profile-route-button__route-icon") }, });
            const __VLS_20 = {}
                .VIcon;
            ({}.VIcon);
            __VLS_components.VIcon;
            __VLS_components.vIcon;
            [VIcon,];
            const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ icon: ("mdi-chevron-right"), size: ("34"), }));
            const __VLS_22 = __VLS_21({ icon: ("mdi-chevron-right"), size: ("34"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
            ({}({ icon: ("mdi-chevron-right"), size: ("34"), }));
            const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
        }
    }
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    let __VLS_9;
    let __VLS_10;
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['profile-route-button'];
        __VLS_styleScopedClasses['profile-route-button__icon'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['profile-route-button__content'];
        __VLS_styleScopedClasses['ml-1'];
        __VLS_styleScopedClasses['profile-route-button__content__text'];
        __VLS_styleScopedClasses['profile-route-button__content__second-text'];
        __VLS_styleScopedClasses['profile-route-button__route-icon'];
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
//# sourceMappingURL=ProfileRouteButton.vue.js.map