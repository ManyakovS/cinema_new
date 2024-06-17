const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = withDefaults(defineProps(), {
    time: 1500,
    location: 'top',
});
const isShow = ref(false);
const handleClick = () => {
    isShow.value = true;
    setTimeout(() => {
        isShow.value = false;
    }, props.time);
};
const __VLS_withDefaultsArg = (function (t) { return t; })({
    time: 1500,
    location: 'top',
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
        .VTooltip;
    ({}.VTooltip);
    ({}.VTooltip);
    __VLS_components.VTooltip;
    __VLS_components.vTooltip;
    __VLS_components.VTooltip;
    __VLS_components.vTooltip;
    [VTooltip, VTooltip,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ modelValue: ((__VLS_ctx.isShow)), location: ((__VLS_ctx.location)), text: ((__VLS_ctx.text)), }));
    const __VLS_2 = __VLS_1({ modelValue: ((__VLS_ctx.isShow)), location: ((__VLS_ctx.location)), text: ((__VLS_ctx.text)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ modelValue: ((__VLS_ctx.isShow)), location: ((__VLS_ctx.location)), text: ((__VLS_ctx.text)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [activator] = __VLS_getSlotParams((__VLS_5.slots).activator);
        var __VLS_6 = {
            click: ((__VLS_ctx.handleClick)), activator: ((activator)), isShow: ((__VLS_ctx.isShow)),
        };
        [isShow, isShow, location, text, handleClick,];
    }
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
                isShow: isShow,
                handleClick: handleClick,
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
//# sourceMappingURL=BaseTooltip.vue.js.map