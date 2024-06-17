const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const __VLS_props = withDefaults(defineProps(), {
    to: '/',
});
const $emit = defineEmits();
const __VLS_withDefaultsArg = (function (t) { return t; })({
    to: '/',
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("base-fixed-button d-flex items-end justify-center p-4") }, });
    var __VLS_0 = {
        ...({ label: __VLS_ctx.label, to: __VLS_ctx.to }),
    };
    [label, to,];
    const __VLS_1 = {}
        .BaseButton;
    ({}.BaseButton);
    __VLS_components.BaseButton;
    [BaseButton,];
    const __VLS_2 = __VLS_asFunctionalComponent(__VLS_1, new __VLS_1({ ...{ 'onClick': {} }, ...{ class: ("w-50") }, label: ((__VLS_ctx.label)), to: ((__VLS_ctx.to)), }));
    const __VLS_3 = __VLS_2({ ...{ 'onClick': {} }, ...{ class: ("w-50") }, label: ((__VLS_ctx.label)), to: ((__VLS_ctx.to)), }, ...__VLS_functionalComponentArgsRest(__VLS_2));
    ({}({ ...{ 'onClick': {} }, ...{ class: ("w-50") }, label: ((__VLS_ctx.label)), to: ((__VLS_ctx.to)), }));
    let __VLS_7;
    const __VLS_8 = {
        onClick: (...[$event]) => {
            __VLS_ctx.$emit('click');
            [label, to, $emit,];
        }
    };
    const __VLS_6 = __VLS_pickFunctionalComponentCtx(__VLS_1, __VLS_3);
    let __VLS_4;
    let __VLS_5;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['base-fixed-button'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['items-end'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['w-50'];
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
//# sourceMappingURL=BaseFixedButton.vue.js.map