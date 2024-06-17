import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = withDefaults(defineProps(), {
    width: 500,
});
const $emit = defineEmits();
const __VLS_exposed = {
    open,
    closeDialog,
};
defineExpose({
    open,
    closeDialog,
});
const visible = ref(false);
const _title = ref('');
const _message = ref('');
let _resolve = null;
let _reject = null;
function open(title, message) {
    visible.value = true;
    _title.value = title;
    if (message)
        _message.value = message;
    return new Promise((resolve, reject) => {
        _resolve = resolve;
        _reject = reject;
    });
}
async function handleConfirm() {
    if (props.checkBeforeSubmit) {
        if (await props.checkBeforeSubmit()) {
            $emit('submit');
        }
    }
    else {
        _resolve(true);
        closeDialog();
    }
}
function handleCancel() {
    _reject(true);
    $emit('cancel');
    closeDialog();
}
function closeDialog() {
    visible.value = false;
    $emit('close');
}
const __VLS_withDefaultsArg = (function (t) { return t; })({
    width: 500,
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
        .DialogWrapper;
    ({}.DialogWrapper);
    ({}.DialogWrapper);
    __VLS_components.DialogWrapper;
    __VLS_components.DialogWrapper;
    [DialogWrapper, DialogWrapper,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClose': {} }, ...{ 'onCancel': {} }, ...{ 'onSubmit': {} }, visible: ((__VLS_ctx.visible)), title: ((__VLS_ctx._title)), width: ((__VLS_ctx.width)), ...(__VLS_ctx.options), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClose': {} }, ...{ 'onCancel': {} }, ...{ 'onSubmit': {} }, visible: ((__VLS_ctx.visible)), title: ((__VLS_ctx._title)), width: ((__VLS_ctx.width)), ...(__VLS_ctx.options), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClose': {} }, ...{ 'onCancel': {} }, ...{ 'onSubmit': {} }, visible: ((__VLS_ctx.visible)), title: ((__VLS_ctx._title)), width: ((__VLS_ctx.width)), ...(__VLS_ctx.options), }));
    let __VLS_6;
    const __VLS_7 = {
        onClose: (__VLS_ctx.closeDialog)
    };
    const __VLS_8 = {
        onCancel: (__VLS_ctx.handleCancel)
    };
    const __VLS_9 = {
        onSubmit: (__VLS_ctx.handleConfirm)
    };
    var __VLS_10 = {};
    [visible, _title, width, options, closeDialog, handleCancel, handleConfirm,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-body1") }, });
    __VLS_directiveFunction(__VLS_ctx.vHtml)((__VLS_ctx._message));
    [vHtml, _message,];
    (__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_5.slots).footer;
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['text-body1'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                visible: visible,
                _title: _title,
                _message: _message,
                handleConfirm: handleConfirm,
                handleCancel: handleCancel,
                closeDialog: closeDialog,
            };
        },
        props: {},
        emits: {},
    });
}
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {
            ...__VLS_exposed,
        };
    },
    props: {},
    emits: {},
});
export default {};
;
//# sourceMappingURL=ConfirmationDialog.vue.js.map