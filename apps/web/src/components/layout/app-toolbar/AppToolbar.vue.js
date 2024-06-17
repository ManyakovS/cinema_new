import { ref } from 'vue';
import { VToolbar } from 'vuetify/lib/components/index.mjs';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = withDefaults(defineProps(), {
    showFilterButton: true,
    filterSelected: false,
    hideFilterButtonLabel: true,
    crutchTargetSelector: '.q-page-container',
    menu: () => [],
});
const emit = defineEmits();
const element = ref(null);
const crutch = ref();
const addCrutch = () => {
    const crutchTarget = document.querySelector(props.crutchTargetSelector);
    if (!crutchTarget)
        return;
    const _crutch = document.createElement('div');
    _crutch.classList.add('app-toolbar-space-crutch');
    _crutch.style.height = `${getHeigth()}px`;
    crutchTarget.append(_crutch);
    crutch.value = _crutch;
};
const getHeigth = () => {
    return element.value?.$el.offsetHeight;
};
const onIntersection = ({ isIntersecting }) => {
    const crutchVal = crutch.value;
    if (crutchVal) {
        if (isIntersecting) {
            crutchVal.classList.remove('hidden');
            crutchVal.style.height = `${getHeigth()}px`;
        }
        else {
            crutchVal.classList.add('hidden');
        }
    }
};
const __VLS_withDefaultsArg = (function (t) { return t; })({
    showFilterButton: true,
    filterSelected: false,
    hideFilterButtonLabel: true,
    crutchTargetSelector: '.q-page-container',
    menu: () => [],
});
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
        .VToolbar;
    ({}.VToolbar);
    ({}.VToolbar);
    __VLS_components.VToolbar;
    __VLS_components.vToolbar;
    __VLS_components.VToolbar;
    __VLS_components.vToolbar;
    [VToolbar, VToolbar,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("app-toolbar") }, ref: ("element"), }));
    const __VLS_2 = __VLS_1({ ...{ class: ("app-toolbar") }, ref: ("element"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("app-toolbar") }, ref: ("element"), }));
    (__VLS_ctx.element);
    var __VLS_6 = {};
    [element,];
    if (__VLS_ctx.$slots['end'] || __VLS_ctx.showFilterButton) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("app-toolbar__end") }, });
        var __VLS_7 = {};
        [$slots, showFilterButton,];
    }
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['app-toolbar'];
        __VLS_styleScopedClasses['app-toolbar__end'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                VToolbar: VToolbar,
                element: element,
            };
        },
        props: {},
        emits: {},
    });
}
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
    emits: {},
});
export default {};
;
//# sourceMappingURL=AppToolbar.vue.js.map