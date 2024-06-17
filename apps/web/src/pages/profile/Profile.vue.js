import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useNotify } from '@/utils/hooks/use-notify';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { notifyError } = useNotify();
const { user } = storeToRefs(useUserStore());
const { changeImage } = useUserStore();
async function handleChangeImage(images) {
    await changeImage(user.value.id, images[0].id).catch(notifyError);
}
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-column") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-between") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_0 = {}
        .BaseDropZone;
    ({}.BaseDropZone);
    ({}.BaseDropZone);
    __VLS_components.BaseDropZone;
    __VLS_components.BaseDropZone;
    [BaseDropZone, BaseDropZone,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onUpdate:files': {} }, maxFileSize: ((10485760)), maxFiles: ((1)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onUpdate:files': {} }, maxFileSize: ((10485760)), maxFiles: ((1)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onUpdate:files': {} }, maxFileSize: ((10485760)), maxFiles: ((1)), }));
    let __VLS_6;
    const __VLS_7 = {
        'onUpdate:files': (__VLS_ctx.handleChangeImage)
    };
    const __VLS_8 = {}
        .UserCard;
    ({}.UserCard);
    __VLS_components.UserCard;
    [UserCard,];
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ user: ((__VLS_ctx.user)), size: ("big"), withName: (true), }));
    const __VLS_10 = __VLS_9({ user: ((__VLS_ctx.user)), size: ("big"), withName: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ user: ((__VLS_ctx.user)), size: ("big"), withName: (true), }));
    [handleChangeImage, user,];
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_14 = {}
        .VDivider;
    ({}.VDivider);
    __VLS_components.VDivider;
    [VDivider,];
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{ class: ("my-7") }, }));
    const __VLS_16 = __VLS_15({ ...{ class: ("my-7") }, }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ ...{ class: ("my-7") }, }));
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    const __VLS_20 = {}
        .ProfileRouteButtonsGroup;
    ({}.ProfileRouteButtonsGroup);
    __VLS_components.ProfileRouteButtonsGroup;
    [ProfileRouteButtonsGroup,];
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
    const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({}));
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['my-7'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                user: user,
                handleChangeImage: handleChangeImage,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=Profile.vue.js.map