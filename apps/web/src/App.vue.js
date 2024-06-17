import { storeToRefs } from 'pinia';
import { useUserStore } from './stores/user';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { user } = storeToRefs(useUserStore());
const $route = useRoute();
const showHeader = computed(() => {
    const name = $route?.name?.toString();
    return !name?.includes('profile');
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
        .VApp;
    ({}.VApp);
    ({}.VApp);
    __VLS_components.VApp;
    __VLS_components.VApp;
    [VApp, VApp,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("bg-color") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("bg-color") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("bg-color") }, }));
    const __VLS_6 = {}
        .ReloadPWA;
    ({}.ReloadPWA);
    __VLS_components.ReloadPWA;
    [ReloadPWA,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({}));
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_12 = {}
        .VLayout;
    ({}.VLayout);
    ({}.VLayout);
    __VLS_components.VLayout;
    __VLS_components.vLayout;
    __VLS_components.VLayout;
    __VLS_components.vLayout;
    [VLayout, VLayout,];
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("page-layout") }, }));
    const __VLS_14 = __VLS_13({ ...{ class: ("page-layout") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ ...{ class: ("page-layout") }, }));
    if (__VLS_ctx.user && __VLS_ctx.showHeader) {
        const __VLS_18 = {}
            .AppHeader;
        ({}.AppHeader);
        __VLS_components.AppHeader;
        [AppHeader,];
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
        const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({}));
        [user, showHeader,];
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    }
    const __VLS_24 = {}
        .VMain;
    ({}.VMain);
    ({}.VMain);
    __VLS_components.VMain;
    __VLS_components.VMain;
    [VMain, VMain,];
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("pa-4") }, }));
    const __VLS_26 = __VLS_25({ ...{ class: ("pa-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ ...{ class: ("pa-4") }, }));
    const __VLS_30 = {}
        .RouterView;
    ({}.RouterView);
    ({}.RouterView);
    __VLS_components.RouterView;
    __VLS_components.routerView;
    __VLS_components.RouterView;
    __VLS_components.routerView;
    [RouterView, RouterView,];
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
    const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({}));
    {
        const [{ Component, route }] = __VLS_getSlotParams((__VLS_35.slots).default);
        const __VLS_36 = {}
            .Transition;
        ({}.Transition);
        ({}.Transition);
        __VLS_components.Transition;
        __VLS_components.Transition;
        [Transition, Transition,];
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ name: ("slide-fade"), }));
        const __VLS_38 = __VLS_37({ name: ("slide-fade"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        ({}({ name: ("slide-fade"), }));
        const __VLS_42 = (Component);
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ key: ((route.path)), }));
        const __VLS_44 = __VLS_43({ key: ((route.path)), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        ({}({ key: ((route.path)), }));
        const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
        (__VLS_41.slots).default;
        const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
        __VLS_35.slots[''];
    }
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    (__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    if (__VLS_ctx.user) {
        const __VLS_48 = {}
            .AppFooter;
        ({}.AppFooter);
        __VLS_components.AppFooter;
        [AppFooter,];
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
        const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
        ({}({}));
        [user,];
        const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    }
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['bg-color'];
        __VLS_styleScopedClasses['page-layout'];
        __VLS_styleScopedClasses['pa-4'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                user: user,
                showHeader: showHeader,
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

//# sourceMappingURL=App.vue.js.map