import { VTimePicker } from 'vuetify/labs/VTimePicker';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const __VLS_props = defineProps();
const modal = ref(false);
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
        .VContainer;
    ({}.VContainer);
    ({}.VContainer);
    __VLS_components.VContainer;
    __VLS_components.vContainer;
    __VLS_components.VContainer;
    __VLS_components.vContainer;
    [VContainer, VContainer,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_6 = {}
        .VTextField;
    ({}.VTextField);
    ({}.VTextField);
    __VLS_components.VTextField;
    __VLS_components.vTextField;
    __VLS_components.VTextField;
    __VLS_components.vTextField;
    [VTextField, VTextField,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onUpdate:modelValue': {} }, modelValue: ((__VLS_ctx.modelValue)), active: ((__VLS_ctx.modal)), focused: ((__VLS_ctx.modal)), variant: ("solo"), label: ("Время"), prependIcon: ("mdi-clock-time-four-outline"), readonly: (true), }));
    const __VLS_8 = __VLS_7({ ...{ 'onUpdate:modelValue': {} }, modelValue: ((__VLS_ctx.modelValue)), active: ((__VLS_ctx.modal)), focused: ((__VLS_ctx.modal)), variant: ("solo"), label: ("Время"), prependIcon: ("mdi-clock-time-four-outline"), readonly: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ 'onUpdate:modelValue': {} }, modelValue: ((__VLS_ctx.modelValue)), active: ((__VLS_ctx.modal)), focused: ((__VLS_ctx.modal)), variant: ("solo"), label: ("Время"), prependIcon: ("mdi-clock-time-four-outline"), readonly: (true), }));
    let __VLS_12;
    const __VLS_13 = {
        'onUpdate:modelValue': ((val) => __VLS_ctx.$emit('update:modelValue', val))
    };
    const __VLS_14 = {}
        .VMenu;
    ({}.VMenu);
    ({}.VMenu);
    __VLS_components.VMenu;
    __VLS_components.vMenu;
    __VLS_components.VMenu;
    __VLS_components.vMenu;
    [VMenu, VMenu,];
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ modelValue: ((__VLS_ctx.modal)), closeOnContentClick: ((false)), activator: ("parent"), transition: ("scale-transition"), }));
    const __VLS_16 = __VLS_15({ modelValue: ((__VLS_ctx.modal)), closeOnContentClick: ((false)), activator: ("parent"), transition: ("scale-transition"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ modelValue: ((__VLS_ctx.modal)), closeOnContentClick: ((false)), activator: ("parent"), transition: ("scale-transition"), }));
    if (__VLS_ctx.modal) {
        const __VLS_20 = {}
            .VTimePicker;
        ({}.VTimePicker);
        __VLS_components.VTimePicker;
        [VTimePicker,];
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ 'onUpdate:modelValue': {} }, hideHeader: (true), format: ("24hr"), modelValue: ((__VLS_ctx.modelValue)), }));
        const __VLS_22 = __VLS_21({ ...{ 'onUpdate:modelValue': {} }, hideHeader: (true), format: ("24hr"), modelValue: ((__VLS_ctx.modelValue)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
        ({}({ ...{ 'onUpdate:modelValue': {} }, hideHeader: (true), format: ("24hr"), modelValue: ((__VLS_ctx.modelValue)), }));
        let __VLS_26;
        const __VLS_27 = {
            'onUpdate:modelValue': ((val) => __VLS_ctx.$emit('update:modelValue', val))
        };
        [modelValue, modelValue, modal, modal, modal, modal, $emit, $emit,];
        const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
        let __VLS_23;
        let __VLS_24;
    }
    (__VLS_19.slots).default;
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    let __VLS_9;
    let __VLS_10;
    (__VLS_5.slots).default;
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
                VTimePicker: VTimePicker,
                modal: modal,
                $emit: $emit,
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
//# sourceMappingURL=TimePicker.vue.js.map