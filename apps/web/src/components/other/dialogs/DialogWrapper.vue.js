import { computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = withDefaults(defineProps(), {
    buttonCancelText: 'Вернуться',
    buttonConfirmText: 'Сохранить',
    buttonCancelVisible: true,
    buttonConfirmDisabled: false,
    buttonConfirmVisible: true,
    hideDefaultFooter: false,
    headerSkin: 'default',
    skin: 'positive',
    width: 1024,
});
const wrapperStyles = computed(() => {
    return {
        width: `${props.width}px`,
        height: props.height,
        maxWidth: '100vw',
    };
});
const __VLS_withDefaultsArg = (function (t) { return t; })({
    buttonCancelText: 'Вернуться',
    buttonConfirmText: 'Сохранить',
    buttonCancelVisible: true,
    buttonConfirmDisabled: false,
    buttonConfirmVisible: true,
    hideDefaultFooter: false,
    headerSkin: 'default',
    skin: 'positive',
    width: 1024,
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
        .VDialog;
    ({}.VDialog);
    ({}.VDialog);
    __VLS_components.VDialog;
    __VLS_components.vDialog;
    __VLS_components.VDialog;
    __VLS_components.vDialog;
    [VDialog, VDialog,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onUpdate:modelValue': {} }, modelValue: ((__VLS_ctx.visible)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onUpdate:modelValue': {} }, modelValue: ((__VLS_ctx.visible)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onUpdate:modelValue': {} }, modelValue: ((__VLS_ctx.visible)), }));
    let __VLS_6;
    const __VLS_7 = {
        'onUpdate:modelValue': (...[$event]) => {
            __VLS_ctx.$emit('close');
            [visible, $emit,];
        }
    };
    const __VLS_8 = {}
        .VCard;
    ({}.VCard);
    ({}.VCard);
    __VLS_components.VCard;
    __VLS_components.vCard;
    __VLS_components.VCard;
    __VLS_components.vCard;
    [VCard, VCard,];
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ class: ("modal-wrapper") }, ...{ style: ((__VLS_ctx.wrapperStyles)) }, }));
    const __VLS_10 = __VLS_9({ ...{ class: ("modal-wrapper") }, ...{ style: ((__VLS_ctx.wrapperStyles)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ ...{ class: ("modal-wrapper") }, ...{ style: ((__VLS_ctx.wrapperStyles)) }, }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-wrapper__header mb-9") }, ...{ class: ((`skin-${__VLS_ctx.headerSkin}`)) }, });
    __VLS_styleScopedClasses = (`skin-${headerSkin}`);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-wrapper__header-wrapper text-h1 ") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.title);
    [wrapperStyles, headerSkin, title,];
    if (__VLS_ctx.$slots['header-actions']) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row items-center mr-8") }, });
        var __VLS_14 = {};
        [$slots,];
    }
    if (__VLS_ctx.$slots.close) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.$slots.close)))
                        return;
                    __VLS_ctx.$emit('close');
                    [$emit, $slots,];
                } }, ...{ class: ("ml-8") }, });
        var __VLS_15 = {};
    }
    else {
        const __VLS_16 = {}
            .BaseButton;
        ({}.BaseButton);
        __VLS_components.BaseButton;
        [BaseButton,];
        const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ ...{ 'onClick': {} }, icon: ("close"), color: ("grey-7"), }));
        const __VLS_18 = __VLS_17({ ...{ 'onClick': {} }, icon: ("close"), color: ("grey-7"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
        ({}({ ...{ 'onClick': {} }, icon: ("close"), color: ("grey-7"), }));
        let __VLS_22;
        const __VLS_23 = {
            onClick: (...[$event]) => {
                if (!(!((__VLS_ctx.$slots.close))))
                    return;
                __VLS_ctx.$emit('close');
                [$emit,];
            }
        };
        const __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
        let __VLS_19;
        let __VLS_20;
    }
    var __VLS_24 = {};
    var __VLS_25 = {};
    if (__VLS_ctx.$slots.footer || __VLS_ctx.buttonCancelVisible || __VLS_ctx.buttonConfirmVisible) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-wrapper__footer mt-6") }, });
        if (__VLS_ctx.$slots.footer) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("full-width") }, });
            var __VLS_26 = {};
            [$slots, $slots, buttonCancelVisible, buttonConfirmVisible,];
        }
        else if (!__VLS_ctx.hideDefaultFooter) {
            if (__VLS_ctx.buttonCancelVisible) {
                const __VLS_27 = {}
                    .BaseButton;
                ({}.BaseButton);
                __VLS_components.BaseButton;
                [BaseButton,];
                const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ ...{ 'onClick': {} }, ...{ class: ("mr-8") }, label: ((__VLS_ctx.buttonCancelText)), color: ((__VLS_ctx.buttonCancelColor)), }));
                const __VLS_29 = __VLS_28({ ...{ 'onClick': {} }, ...{ class: ("mr-8") }, label: ((__VLS_ctx.buttonCancelText)), color: ((__VLS_ctx.buttonCancelColor)), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
                ({}({ ...{ 'onClick': {} }, ...{ class: ("mr-8") }, label: ((__VLS_ctx.buttonCancelText)), color: ((__VLS_ctx.buttonCancelColor)), }));
                let __VLS_33;
                const __VLS_34 = {
                    onClick: (...[$event]) => {
                        if (!((__VLS_ctx.$slots.footer || __VLS_ctx.buttonCancelVisible || __VLS_ctx.buttonConfirmVisible)))
                            return;
                        if (!(!((__VLS_ctx.$slots.footer))))
                            return;
                        if (!((!__VLS_ctx.hideDefaultFooter)))
                            return;
                        if (!((__VLS_ctx.buttonCancelVisible)))
                            return;
                        __VLS_ctx.$emit('cancel');
                        [$emit, buttonCancelVisible, hideDefaultFooter, buttonCancelText, buttonCancelColor,];
                    }
                };
                const __VLS_32 = __VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29);
                let __VLS_30;
                let __VLS_31;
            }
            if (__VLS_ctx.buttonConfirmVisible) {
                const __VLS_35 = {}
                    .BaseButton;
                ({}.BaseButton);
                __VLS_components.BaseButton;
                [BaseButton,];
                const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{ 'onClick': {} }, label: ((__VLS_ctx.buttonConfirmText)), color: ((__VLS_ctx.skin)), disabled: ((__VLS_ctx.buttonConfirmDisabled)), }));
                const __VLS_37 = __VLS_36({ ...{ 'onClick': {} }, label: ((__VLS_ctx.buttonConfirmText)), color: ((__VLS_ctx.skin)), disabled: ((__VLS_ctx.buttonConfirmDisabled)), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                ({}({ ...{ 'onClick': {} }, label: ((__VLS_ctx.buttonConfirmText)), color: ((__VLS_ctx.skin)), disabled: ((__VLS_ctx.buttonConfirmDisabled)), }));
                let __VLS_41;
                const __VLS_42 = {
                    onClick: (...[$event]) => {
                        if (!((__VLS_ctx.$slots.footer || __VLS_ctx.buttonCancelVisible || __VLS_ctx.buttonConfirmVisible)))
                            return;
                        if (!(!((__VLS_ctx.$slots.footer))))
                            return;
                        if (!((!__VLS_ctx.hideDefaultFooter)))
                            return;
                        if (!((__VLS_ctx.buttonConfirmVisible)))
                            return;
                        __VLS_ctx.$emit('submit');
                        [$emit, buttonConfirmVisible, buttonConfirmText, skin, buttonConfirmDisabled,];
                    }
                };
                const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                let __VLS_38;
                let __VLS_39;
            }
        }
    }
    (__VLS_13.slots).default;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['modal-wrapper'];
        __VLS_styleScopedClasses['modal-wrapper__header'];
        __VLS_styleScopedClasses['mb-9'];
        __VLS_styleScopedClasses['modal-wrapper__header-wrapper'];
        __VLS_styleScopedClasses['text-h1'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['mr-8'];
        __VLS_styleScopedClasses['ml-8'];
        __VLS_styleScopedClasses['modal-wrapper__footer'];
        __VLS_styleScopedClasses['mt-6'];
        __VLS_styleScopedClasses['full-width'];
        __VLS_styleScopedClasses['mr-8'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                wrapperStyles: wrapperStyles,
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
//# sourceMappingURL=DialogWrapper.vue.js.map