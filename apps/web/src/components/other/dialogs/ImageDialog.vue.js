const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const __VLS_props = defineProps();
const $emit = defineEmits();
function closeDialog() {
    $emit('update:visible', false);
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
        .DialogWrapper;
    ({}.DialogWrapper);
    ({}.DialogWrapper);
    __VLS_components.DialogWrapper;
    __VLS_components.DialogWrapper;
    [DialogWrapper, DialogWrapper,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClose': {} }, buttonConfirmText: ("Сохранить"), title: ((__VLS_ctx.imageTitle)), buttonCancelVisible: ((false)), buttonConfirmVisible: ((false)), width: ((1920)), height: ("100%"), visible: ((__VLS_ctx.visible)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClose': {} }, buttonConfirmText: ("Сохранить"), title: ((__VLS_ctx.imageTitle)), buttonCancelVisible: ((false)), buttonConfirmVisible: ((false)), width: ((1920)), height: ("100%"), visible: ((__VLS_ctx.visible)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClose': {} }, buttonConfirmText: ("Сохранить"), title: ((__VLS_ctx.imageTitle)), buttonCancelVisible: ((false)), buttonConfirmVisible: ((false)), width: ((1920)), height: ("100%"), visible: ((__VLS_ctx.visible)), }));
    let __VLS_6;
    const __VLS_7 = {
        onClose: (__VLS_ctx.closeDialog)
    };
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("image-dialog__image-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("image-dialog__image") }, src: ((__VLS_ctx.imageLink)), });
    [imageTitle, visible, closeDialog, imageLink,];
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['image-dialog__image-wrapper'];
        __VLS_styleScopedClasses['image-dialog__image'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                closeDialog: closeDialog,
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
//# sourceMappingURL=ImageDialog.vue.js.map