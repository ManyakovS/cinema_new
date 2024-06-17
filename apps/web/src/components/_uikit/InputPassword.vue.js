import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = withDefaults(defineProps(), {
    name: 'password',
    label: 'Пароль',
    placeholder: 'Введите пароль',
});
const $emit = defineEmits();
const showPassword = ref(false);
const __VLS_withDefaultsArg = (function (t) { return t; })({
    name: 'password',
    label: 'Пароль',
    placeholder: 'Введите пароль',
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
        .BaseInputWithValidation;
    ({}.BaseInputWithValidation);
    ({}.BaseInputWithValidation);
    __VLS_components.BaseInputWithValidation;
    __VLS_components.BaseInputWithValidation;
    [BaseInputWithValidation, BaseInputWithValidation,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onKeyup': {} }, ...({ ...props }), }));
    const __VLS_2 = __VLS_1({ ...{ 'onKeyup': {} }, ...({ ...props }), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onKeyup': {} }, ...({ ...props }), }));
    let __VLS_6;
    const __VLS_7 = {
        onKeyup: (...[$event]) => {
            __VLS_ctx.$emit('enter', props.value);
            [$emit,];
        }
    };
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_5.slots)["prepend-inner"];
        const __VLS_8 = {}
            .VIcon;
        ({}.VIcon);
        __VLS_components.VIcon;
        [VIcon,];
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ icon: (('mdi-lock')), color: ("primary"), }));
        const __VLS_10 = __VLS_9({ icon: (('mdi-lock')), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
        ({}({ icon: (('mdi-lock')), color: ("primary"), }));
        const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_5.slots)["append-inner"];
        const __VLS_14 = {}
            .VIcon;
        ({}.VIcon);
        __VLS_components.VIcon;
        [VIcon,];
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{ 'onClick': {} }, icon: ((__VLS_ctx.showPassword ? 'mdi-eye' : 'mdi-eye-off')), color: ("primary"), }));
        const __VLS_16 = __VLS_15({ ...{ 'onClick': {} }, icon: ((__VLS_ctx.showPassword ? 'mdi-eye' : 'mdi-eye-off')), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
        ({}({ ...{ 'onClick': {} }, icon: ((__VLS_ctx.showPassword ? 'mdi-eye' : 'mdi-eye-off')), color: ("primary"), }));
        let __VLS_20;
        const __VLS_21 = {
            onClick: (...[$event]) => {
                __VLS_ctx.showPassword = !__VLS_ctx.showPassword;
                [showPassword, showPassword, showPassword,];
            }
        };
        const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
        let __VLS_17;
        let __VLS_18;
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
                showPassword: showPassword,
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
//# sourceMappingURL=InputPassword.vue.js.map