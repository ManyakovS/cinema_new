import { getCurrentPath } from '@/utils/functions/get-current-path';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const handleShare = (click) => {
    click();
    navigator.clipboard.writeText(props.shareValue ?? getCurrentPath()).catch();
};
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
        .BaseTooltip;
    ({}.BaseTooltip);
    ({}.BaseTooltip);
    __VLS_components.BaseTooltip;
    __VLS_components.BaseTooltip;
    [BaseTooltip, BaseTooltip,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ location: ("bottom"), text: ("Скопировано"), }));
    const __VLS_2 = __VLS_1({ location: ("bottom"), text: ("Скопировано"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ location: ("bottom"), text: ("Скопировано"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { activator: { props }, click } = __VLS_getSlotParam((__VLS_5.slots).default);
        const __VLS_6 = {}
            .VBtn;
        ({}.VBtn);
        __VLS_components.VBtn;
        [VBtn,];
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClick': {} }, ...(props), ...{ class: ("base-share-button text-white") }, size: ("26"), icon: ("mdi-share-variant"), }));
        const __VLS_8 = __VLS_7({ ...{ 'onClick': {} }, ...(props), ...{ class: ("base-share-button text-white") }, size: ("26"), icon: ("mdi-share-variant"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ ...{ 'onClick': {} }, ...(props), ...{ class: ("base-share-button text-white") }, size: ("26"), icon: ("mdi-share-variant"), }));
        let __VLS_12;
        const __VLS_13 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleShare(click);
                [handleShare,];
            }
        };
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        let __VLS_9;
        let __VLS_10;
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['base-share-button'];
        __VLS_styleScopedClasses['text-white'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                handleShare: handleShare,
            };
        },
        props: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
});
;
//# sourceMappingURL=BaseShareButton.vue.js.map