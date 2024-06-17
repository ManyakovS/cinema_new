import { getImagePath } from '@/utils/functions/get-image-path';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = withDefaults(defineProps(), {
    size: 'small',
});
const iconSize = computed(() => {
    if (props.size === 'big')
        return 60;
    else if (props.size === 'medium')
        return 45;
    else
        return 40;
});
const showImage = ref(true);
watch(() => props.user?.image?.path, () => {
    showImage.value = false;
    setTimeout(() => {
        showImage.value = true;
    }, 250);
});
const __VLS_withDefaultsArg = (function (t) { return t; })({
    size: 'small',
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex items-center my-1") }, });
    const __VLS_0 = {}
        .VAvatar;
    ({}.VAvatar);
    ({}.VAvatar);
    __VLS_components.VAvatar;
    __VLS_components.vAvatar;
    __VLS_components.VAvatar;
    __VLS_components.vAvatar;
    [VAvatar, VAvatar,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ size: ((__VLS_ctx.iconSize)), }));
    const __VLS_2 = __VLS_1({ size: ((__VLS_ctx.iconSize)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ size: ((__VLS_ctx.iconSize)), }));
    if (__VLS_ctx.showImage) {
        const __VLS_6 = {}
            .VImg;
        ({}.VImg);
        __VLS_components.VImg;
        __VLS_components.vImg;
        [VImg,];
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ alt: ("John"), src: ((__VLS_ctx.getImagePath(__VLS_ctx.user?.image?.path))), }));
        const __VLS_8 = __VLS_7({ alt: ("John"), src: ((__VLS_ctx.getImagePath(__VLS_ctx.user?.image?.path))), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ alt: ("John"), src: ((__VLS_ctx.getImagePath(__VLS_ctx.user?.image?.path))), }));
        [iconSize, showImage, getImagePath, user,];
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    }
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (__VLS_ctx.withName) {
        var __VLS_12 = {
            userName: ((__VLS_ctx.user?.name)),
        };
        [user, withName,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-h5 ml-4") }, });
        (__VLS_ctx.user?.name);
        [user,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['my-1'];
        __VLS_styleScopedClasses['text-h5'];
        __VLS_styleScopedClasses['ml-4'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                getImagePath: getImagePath,
                iconSize: iconSize,
                showImage: showImage,
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
//# sourceMappingURL=UserCard.vue.js.map