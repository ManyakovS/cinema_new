import { computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const list = computed(() => {
    const menu = [];
    menu.push({
        icon: 'mdi-home',
        text: 'Главная',
        to: '/home',
    });
    menu.push({
        icon: 'mdi-movie-open',
        text: 'Фильмы',
        to: '/films',
    });
    menu.push({
        icon: 'mdi-ticket-confirmation',
        text: 'Билеты',
        to: '/tickets',
    });
    menu.push({
        icon: 'mdi-account',
        text: 'Профиль',
        to: '/profile',
    });
    return menu;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("app-nav-mini d-flex justify-evenly w-full") }, });
    for (const [item, i] of __VLS_getVForSourceType((__VLS_ctx.list))) {
        const __VLS_0 = {}
            .AppNavMiniItem;
        ({}.AppNavMiniItem);
        __VLS_components.AppNavMiniItem;
        [AppNavMiniItem,];
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ key: ((i)), ...(item), ...{ class: ("app-nav-mini__item") }, }));
        const __VLS_2 = __VLS_1({ key: ((i)), ...(item), ...{ class: ("app-nav-mini__item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ key: ((i)), ...(item), ...{ class: ("app-nav-mini__item") }, }));
        [list,];
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['app-nav-mini'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-evenly'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['app-nav-mini__item'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                list: list,
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
//# sourceMappingURL=AppNavMini.vue.js.map