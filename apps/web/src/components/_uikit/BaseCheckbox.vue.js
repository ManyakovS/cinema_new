import { computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const $emit = defineEmits();
const _value = computed(() => props.modelValue || false);
function updateValue(value) {
    $emit('update:modelValue', value);
    $emit('input', value);
}
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
        .VCheckbox;
    ({}.VCheckbox);
    __VLS_components.VCheckbox;
    __VLS_components.vCheckbox;
    [VCheckbox,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onUpdate:modelValue': {} }, ...{ class: ("base-checkbox") }, ...{ class: (({ 'with-label': props.label })) }, ...({ ...props }), modelValue: ((__VLS_ctx._value)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onUpdate:modelValue': {} }, ...{ class: ("base-checkbox") }, ...{ class: (({ 'with-label': props.label })) }, ...({ ...props }), modelValue: ((__VLS_ctx._value)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onUpdate:modelValue': {} }, ...{ class: ("base-checkbox") }, ...{ class: (({ 'with-label': props.label })) }, ...({ ...props }), modelValue: ((__VLS_ctx._value)), }));
    __VLS_styleScopedClasses = ({ 'with-label': props.label });
    let __VLS_6;
    const __VLS_7 = {
        'onUpdate:modelValue': (__VLS_ctx.updateValue)
    };
    [_value, updateValue,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['base-checkbox'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                _value: _value,
                updateValue: updateValue,
            };
        },
        props: {},
        emits: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
    emits: {},
});
;
//# sourceMappingURL=BaseCheckbox.vue.js.map