import { useIsNavItemActive } from '@/utils/hooks/use-is-nav-item-active';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const { isNavItemActive } = useIsNavItemActive(props);
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
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    [RouterLink, RouterLink,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ((props.to)), }));
    const __VLS_2 = __VLS_1({ to: ((props.to)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ((props.to)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("app-nav-item-mini d-flex flex-column items-center") }, });
    const __VLS_6 = {}
        .VIcon;
    ({}.VIcon);
    __VLS_components.VIcon;
    [VIcon,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...({ ...props }), color: ((__VLS_ctx.isNavItemActive
            ? 'primary'
            : 'rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))')), icon: ((__VLS_ctx.isNavItemActive ? props.icon : `${props.icon}-outline`)), size: ("large"), }));
    const __VLS_8 = __VLS_7({ ...({ ...props }), color: ((__VLS_ctx.isNavItemActive
            ? 'primary'
            : 'rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))')), icon: ((__VLS_ctx.isNavItemActive ? props.icon : `${props.icon}-outline`)), size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...({ ...props }), color: ((__VLS_ctx.isNavItemActive
            ? 'primary'
            : 'rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))')), icon: ((__VLS_ctx.isNavItemActive ? props.icon : `${props.icon}-outline`)), size: ("large"), }));
    [isNavItemActive, isNavItemActive,];
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-semibold") }, ...{ style: ((__VLS_ctx.isNavItemActive
                ? 'color: primary;'
                : 'color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));')) }, });
    (props.text);
    [isNavItemActive,];
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['app-nav-item-mini'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['items-center'];
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
                isNavItemActive: isNavItemActive,
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
//# sourceMappingURL=AppNavMiniItem.vue.js.map