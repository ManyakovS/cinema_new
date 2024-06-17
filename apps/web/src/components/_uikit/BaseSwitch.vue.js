const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const __VLS_props = withDefaults(defineProps(), {
    color: 'primary',
});
const $emit = defineEmits();
const __VLS_withDefaultsArg = (function (t) { return t; })({
    color: 'primary',
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...(__VLS_ctx.$attrs), ...{ class: ("d-flex items-center gap-2 h-[24px]") }, });
    const __VLS_0 = {}
        .VSwitch;
    ({}.VSwitch);
    __VLS_components.VSwitch;
    __VLS_components.vSwitch;
    [VSwitch,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onInput': {} }, value: ((__VLS_ctx.modelValue)), color: ((__VLS_ctx.color)), hideDetails: (true), }));
    const __VLS_2 = __VLS_1({ ...{ 'onInput': {} }, value: ((__VLS_ctx.modelValue)), color: ((__VLS_ctx.color)), hideDetails: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onInput': {} }, value: ((__VLS_ctx.modelValue)), color: ((__VLS_ctx.color)), hideDetails: (true), }));
    let __VLS_6;
    const __VLS_7 = {
        onInput: (({ returnValue }) => __VLS_ctx.$emit('update:model-value', returnValue))
    };
    [$attrs, modelValue, color, $emit,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    var __VLS_8 = {};
    (__VLS_ctx.label);
    [label,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['h-[24px]'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                $emit: $emit,
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
//# sourceMappingURL=BaseSwitch.vue.js.map