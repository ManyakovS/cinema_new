import router from '@/router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const handleRedirect = async () => {
    router.push('/');
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("h-screen grid place-items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-3xl w-full p-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("aspect-[16/8] flex justify-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("h-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-6xl font-bold text-white text-center my-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.handleRedirect) }, ...{ class: ("daisy-btn daisy-btn-primary") }, });
    [handleRedirect,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['h-screen'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['place-items-center'];
        __VLS_styleScopedClasses['max-w-3xl'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['p-6'];
        __VLS_styleScopedClasses['aspect-[16/8]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['text-6xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['my-10'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['daisy-btn'];
        __VLS_styleScopedClasses['daisy-btn-primary'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                handleRedirect: handleRedirect,
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
//# sourceMappingURL=NotFound.vue.js.map