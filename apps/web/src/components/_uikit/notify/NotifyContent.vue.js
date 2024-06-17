const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const $emit = defineEmits();
const _snackbar = computed({
    get() {
        return props.snackbar;
    },
    set(value) {
        $emit('update:snackbar', value);
    },
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
        .VSnackbar;
    ({}.VSnackbar);
    ({}.VSnackbar);
    __VLS_components.VSnackbar;
    __VLS_components.VSnackbar;
    [VSnackbar, VSnackbar,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ timeout: ((__VLS_ctx.timeout)), modelValue: ((__VLS_ctx._snackbar)), }));
    const __VLS_2 = __VLS_1({ timeout: ((__VLS_ctx.timeout)), modelValue: ((__VLS_ctx._snackbar)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ timeout: ((__VLS_ctx.timeout)), modelValue: ((__VLS_ctx._snackbar)), }));
    const __VLS_6 = {}
        .VAlert;
    ({}.VAlert);
    ({}.VAlert);
    __VLS_components.VAlert;
    __VLS_components.VAlert;
    [VAlert, VAlert,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ border: ("top"), type: ("warning"), variant: ("outlined"), prominent: (true), }));
    const __VLS_8 = __VLS_7({ border: ("top"), type: ("warning"), variant: ("outlined"), prominent: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ border: ("top"), type: ("warning"), variant: ("outlined"), prominent: (true), }));
    [timeout, _snackbar,];
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
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
                _snackbar: _snackbar,
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
//# sourceMappingURL=NotifyContent.vue.js.map