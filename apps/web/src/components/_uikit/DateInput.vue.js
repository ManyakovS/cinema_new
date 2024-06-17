import { computed, ref } from 'vue';
import { format } from 'date-fns';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const $emit = defineEmits();
const menu = ref(false);
const inputFieldValue = computed(() => {
    const { modelValue, value } = props;
    const newValue = modelValue || value;
    return newValue ? format(newValue, 'yyyy-MM-dd') : null;
});
const datePickerValue = computed(() => {
    const newValue = props.modelValue || props.value;
    return new Date(newValue);
});
function handleInput(date) {
    const isRangeDate = false;
    let rangeDate;
    let newDate = isRangeDate || props.range && date !== null ? rangeDate : format(date, 'yyyy-MM-dd');
    $emit('update:modelValue', newDate);
    $emit('input', newDate);
    if (date !== null) {
        menu.value = false;
    }
}
function handleClear() {
    if (!menu.value)
        menu.value = true;
    $emit('update:modelValue', null);
    $emit('input', null);
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
        .VMenu;
    ({}.VMenu);
    ({}.VMenu);
    __VLS_components.VMenu;
    __VLS_components.vMenu;
    __VLS_components.VMenu;
    __VLS_components.vMenu;
    [VMenu, VMenu,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ modelValue: ((__VLS_ctx.menu)), closeOnContentClick: ((false)), location: ("end"), }));
    const __VLS_2 = __VLS_1({ modelValue: ((__VLS_ctx.menu)), closeOnContentClick: ((false)), location: ("end"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ modelValue: ((__VLS_ctx.menu)), closeOnContentClick: ((false)), location: ("end"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ props }] = __VLS_getSlotParams((__VLS_5.slots).activator);
        const __VLS_6 = {}
            .BaseInput;
        ({}.BaseInput);
        __VLS_components.BaseInput;
        [BaseInput,];
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClear': {} }, ...({ ...__VLS_ctx.$attrs, ...props }), errorMessage: ((__VLS_ctx.errorMessage)), label: ((__VLS_ctx.label)), variant: ("solo"), clearable: (true), modelValue: ((__VLS_ctx.inputFieldValue)), }));
        const __VLS_8 = __VLS_7({ ...{ 'onClear': {} }, ...({ ...__VLS_ctx.$attrs, ...props }), errorMessage: ((__VLS_ctx.errorMessage)), label: ((__VLS_ctx.label)), variant: ("solo"), clearable: (true), modelValue: ((__VLS_ctx.inputFieldValue)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ ...{ 'onClear': {} }, ...({ ...__VLS_ctx.$attrs, ...props }), errorMessage: ((__VLS_ctx.errorMessage)), label: ((__VLS_ctx.label)), variant: ("solo"), clearable: (true), modelValue: ((__VLS_ctx.inputFieldValue)), }));
        let __VLS_12;
        const __VLS_13 = {
            onClear: (__VLS_ctx.handleClear)
        };
        [menu, $attrs, errorMessage, label, inputFieldValue, handleClear,];
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        let __VLS_9;
        let __VLS_10;
    }
    const __VLS_14 = {}
        .VCard;
    ({}.VCard);
    ({}.VCard);
    __VLS_components.VCard;
    __VLS_components.vCard;
    __VLS_components.VCard;
    __VLS_components.vCard;
    [VCard, VCard,];
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ minWidth: ("200"), }));
    const __VLS_16 = __VLS_15({ minWidth: ("200"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ minWidth: ("200"), }));
    const __VLS_20 = {}
        .VDatePicker;
    ({}.VDatePicker);
    ({}.VDatePicker);
    __VLS_components.VDatePicker;
    __VLS_components.vDatePicker;
    __VLS_components.VDatePicker;
    __VLS_components.vDatePicker;
    [VDatePicker, VDatePicker,];
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ 'onUpdate:modelValue': {} }, ...({ ...__VLS_ctx.$attrs, ...props }), modelValue: ((__VLS_ctx.datePickerValue)), }));
    const __VLS_22 = __VLS_21({ ...{ 'onUpdate:modelValue': {} }, ...({ ...__VLS_ctx.$attrs, ...props }), modelValue: ((__VLS_ctx.datePickerValue)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ ...{ 'onUpdate:modelValue': {} }, ...({ ...__VLS_ctx.$attrs, ...props }), modelValue: ((__VLS_ctx.datePickerValue)), }));
    let __VLS_26;
    const __VLS_27 = {
        'onUpdate:modelValue': (__VLS_ctx.handleInput)
    };
    __VLS_elementAsFunction(__VLS_intrinsicElements.template)({});
    {
        (__VLS_25.slots).header;
        [$attrs, datePickerValue, handleInput,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template)({});
    {
        (__VLS_25.slots).title;
    }
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    let __VLS_23;
    let __VLS_24;
    (__VLS_19.slots).default;
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
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
                menu: menu,
                inputFieldValue: inputFieldValue,
                datePickerValue: datePickerValue,
                handleInput: handleInput,
                handleClear: handleClear,
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
//# sourceMappingURL=DateInput.vue.js.map