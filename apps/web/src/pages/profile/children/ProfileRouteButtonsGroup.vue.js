import { getCurrentPath } from '@/utils/functions/get-current-path';
import { useUserStore } from '@/stores/user';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { logout } = useUserStore();
const $router = useRouter();
const handleLogout = async () => {
    await logout();
    $router.push({ name: 'login', query: { redirect: getCurrentPath() } });
};
const buttons = computed(() => {
    return [
        {
            icon: 'mdi-account-outline',
            text: 'Домой',
            secondText: 'бла бла',
            to: { name: 'home' },
        },
        {
            icon: 'mdi-account-outline',
            text: 'Домой',
            secondText: 'бла бла',
            to: { name: 'home' },
        },
        {
            icon: 'mdi-exit-run',
            iconColor: 'error',
            text: 'Выйти',
            callback: () => handleLogout(),
        },
    ];
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-column gap-4") }, });
    for (const [btn, i] of __VLS_getVForSourceType((__VLS_ctx.buttons))) {
        const __VLS_0 = {}
            .ProfileRouteButton;
        ({}.ProfileRouteButton);
        __VLS_components.ProfileRouteButton;
        [ProfileRouteButton,];
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ key: ((i)), ...(btn), }));
        const __VLS_2 = __VLS_1({ key: ((i)), ...(btn), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ key: ((i)), ...(btn), }));
        [buttons,];
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['gap-4'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                buttons: buttons,
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
//# sourceMappingURL=ProfileRouteButtonsGroup.vue.js.map