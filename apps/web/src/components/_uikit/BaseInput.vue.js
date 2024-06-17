const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const $emit = defineEmits();
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
        .VTextField;
    ({}.VTextField);
    ({}.VTextField);
    __VLS_components.VTextField;
    __VLS_components.VTextField;
    [VTextField, VTextField,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onClick:clear': {} }, ...({ ...__VLS_ctx.$attrs, ...props }), rounded: ("lg"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onClick:clear': {} }, ...({ ...__VLS_ctx.$attrs, ...props }), rounded: ("lg"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onClick:clear': {} }, ...({ ...__VLS_ctx.$attrs, ...props }), rounded: ("lg"), }));
    let __VLS_6;
    const __VLS_7 = {
        'onUpdate:modelValue': ((value) => __VLS_ctx.$emit('update:model-value', value))
    };
    const __VLS_8 = {
        'onClick:clear': (...[$event]) => {
            __VLS_ctx.$emit('clear');
            [$attrs, $emit, $emit,];
        }
    };
    for (const [_, slotName] of __VLS_getVForSourceType((__VLS_ctx.$slots))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const [scope] = __VLS_getSlotParams((__VLS_5.slots)[slotName]);
            var __VLS_9 = {
                ...({ ...scope }),
            };
            var __VLS_10 = (slotName);
            [$slots,];
        }
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
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
//# sourceMappingURL=BaseInput.vue.js.map