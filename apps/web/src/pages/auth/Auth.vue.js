const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const $route = useRoute();
const headerTitle = computed(() => {
    switch ($route.name) {
        case 'register':
        case 'register.verify-email':
        case 'register.verify-code':
        case 'register.main.form':
            return 'Регистрация';
        case 'restore':
            return 'Восстановить пароль';
        case 'restore-password':
            return 'Восстановить пароль';
        default:
            return 'Авторизация';
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-column h-full") }, });
    const __VLS_0 = {}
        .AuthHeader;
    ({}.AuthHeader);
    __VLS_components.AuthHeader;
    [AuthHeader,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ title: ((__VLS_ctx.headerTitle)), }));
    const __VLS_2 = __VLS_1({ title: ((__VLS_ctx.headerTitle)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ title: ((__VLS_ctx.headerTitle)), }));
    [headerTitle,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_6 = {}
        .RouterView;
    ({}.RouterView);
    __VLS_components.RouterView;
    __VLS_components.routerView;
    [RouterView,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({}));
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['h-full'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                headerTitle: headerTitle,
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
//# sourceMappingURL=Auth.vue.js.map