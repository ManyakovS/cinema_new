import { required } from '@vee-validate/rules';
import { useField } from 'vee-validate';
import BaseDropZone from '@/components/helpers/BaseDropZone.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = withDefaults(defineProps(), {
    label: 'Загрузить изображения',
});
const { value: formValue, errorMessage: baseErrorMessage, handleChange, validate, } = useField(props.name, required, { validateOnValueUpdate: false });
function handleInput(value) {
    handleChange(value, false);
    validate();
}
function handleBlur() {
    if (props.validateOnBlur)
        validate();
}
const __VLS_withDefaultsArg = (function (t) { return t; })({
    label: 'Загрузить изображения',
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
    [BaseDropZone, BaseDropZone,];
    const __VLS_0 = __VLS_asFunctionalComponent(BaseDropZone, new BaseDropZone({ ...{ 'onUpdate:fileIds': {} }, ...{ 'onUpdate:files': {} }, ...{ 'onBlur': {} }, ...({ ...__VLS_ctx.$attrs, ...props }), errorMessages: ((__VLS_ctx.baseErrorMessage ? props.errorMessages || __VLS_ctx.baseErrorMessage : undefined)), }));
    const __VLS_1 = __VLS_0({ ...{ 'onUpdate:fileIds': {} }, ...{ 'onUpdate:files': {} }, ...{ 'onBlur': {} }, ...({ ...__VLS_ctx.$attrs, ...props }), errorMessages: ((__VLS_ctx.baseErrorMessage ? props.errorMessages || __VLS_ctx.baseErrorMessage : undefined)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ ...{ 'onUpdate:fileIds': {} }, ...{ 'onUpdate:files': {} }, ...{ 'onBlur': {} }, ...({ ...__VLS_ctx.$attrs, ...props }), errorMessages: ((__VLS_ctx.baseErrorMessage ? props.errorMessages || __VLS_ctx.baseErrorMessage : undefined)), }));
    let __VLS_5;
    const __VLS_6 = {
        'onUpdate:fileIds': (__VLS_ctx.handleInput)
    };
    const __VLS_7 = {
        'onUpdate:files': (val => __VLS_ctx.$emit('update:files', val))
    };
    const __VLS_8 = {
        onBlur: (__VLS_ctx.handleBlur)
    };
    var __VLS_9 = {
        errorMessages: ((__VLS_ctx.baseErrorMessage)),
    };
    [$attrs, baseErrorMessage, baseErrorMessage, baseErrorMessage, handleInput, $emit, handleBlur,];
    const __VLS_10 = {}
        .BaseButton;
    ({}.BaseButton);
    __VLS_components.BaseButton;
    [BaseButton,];
    const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ label: ((__VLS_ctx.label)), color: ((__VLS_ctx.baseErrorMessage ? 'error' : 'primary')), }));
    const __VLS_12 = __VLS_11({ label: ((__VLS_ctx.label)), color: ((__VLS_ctx.baseErrorMessage ? 'error' : 'primary')), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ({}({ label: ((__VLS_ctx.label)), color: ((__VLS_ctx.baseErrorMessage ? 'error' : 'primary')), }));
    [baseErrorMessage, label,];
    const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
    (__VLS_4.slots).default;
    (__VLS_4.slots).default;
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(BaseDropZone, __VLS_1);
    let __VLS_2;
    let __VLS_3;
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
                BaseDropZone: BaseDropZone,
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
//# sourceMappingURL=BaseDropZoneWithValidation.vue.js.map