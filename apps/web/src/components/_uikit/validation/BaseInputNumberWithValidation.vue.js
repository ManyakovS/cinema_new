import { required } from '@vee-validate/rules';
import { useField } from 'vee-validate';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = withDefaults(defineProps(), {
    validateOnBlur: true,
});
const { value: formValue, errorMessage: baseErrorMessage, handleChange, validate, } = useField(props.name, required, { validateOnValueUpdate: false });
function handleInput(value) {
    handleChange(value, false);
    if (!props.validateOnBlur)
        validate();
}
function handleBlur() {
    if (props.validateOnBlur)
        validate();
}
const __VLS_withDefaultsArg = (function (t) { return t; })({
    validateOnBlur: true,
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
        .BaseInputNumber;
    ({}.BaseInputNumber);
    ({}.BaseInputNumber);
    __VLS_components.BaseInputNumber;
    __VLS_components.BaseInputNumber;
    [BaseInputNumber, BaseInputNumber,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onBlur': {} }, modelValue: ((__VLS_ctx.formValue)), errorMessages: ((__VLS_ctx.baseErrorMessage ? props.errorMessages || __VLS_ctx.baseErrorMessage : undefined)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onBlur': {} }, modelValue: ((__VLS_ctx.formValue)), errorMessages: ((__VLS_ctx.baseErrorMessage ? props.errorMessages || __VLS_ctx.baseErrorMessage : undefined)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onBlur': {} }, modelValue: ((__VLS_ctx.formValue)), errorMessages: ((__VLS_ctx.baseErrorMessage ? props.errorMessages || __VLS_ctx.baseErrorMessage : undefined)), }));
    let __VLS_6;
    const __VLS_7 = {
        'onUpdate:modelValue': (__VLS_ctx.handleInput)
    };
    const __VLS_8 = {
        onBlur: (__VLS_ctx.handleBlur)
    };
    for (const [_, slotName] of __VLS_getVForSourceType((__VLS_ctx.$slots))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const [scope] = __VLS_getSlotParams((__VLS_5.slots)[slotName]);
            var __VLS_9 = {
                ...({ ...scope }),
            };
            var __VLS_10 = (slotName);
            [formValue, baseErrorMessage, baseErrorMessage, handleInput, handleBlur, $slots,];
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
                formValue: formValue,
                baseErrorMessage: baseErrorMessage,
                handleInput: handleInput,
                handleBlur: handleBlur,
            };
        },
        props: {},
    });
}
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
});
export default {};
;
//# sourceMappingURL=BaseInputNumberWithValidation.vue.js.map