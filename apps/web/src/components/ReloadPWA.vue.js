import { useRegisterSW } from 'virtual:pwa-register/vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();
const close = async () => {
    offlineReady.value = false;
    needRefresh.value = false;
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
    if (__VLS_ctx.needRefresh) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap md:flex-nowrap bg-pink-900 text-white text-sm px-6 py-2 justify-between align-middle") }, role: ("alert"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("message mt-1") }, });
        if (__VLS_ctx.offlineReady) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            [needRefresh, offlineReady,];
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("buttons flex align-middle mt-2 md:mt-0") }, });
        if (__VLS_ctx.needRefresh) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.needRefresh)))
                            return;
                        if (!((__VLS_ctx.needRefresh)))
                            return;
                        __VLS_ctx.updateServiceWorker();
                        [needRefresh, updateServiceWorker,];
                    } }, ...{ class: ("w-full px-4 py-2 text-sm text-white leading-none transition-colors duration-150 bg-pink-900 border border-white rounded sm:w-auto active:bg-pink-600 hover:bg-pink-700 focus:outline-none focus:shadow-outline-purple mr-4") }, });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.close) }, ...{ class: ("w-full px-4 py-2 text-sm text-white leading-none transition-colors duration-150 bg-pink-900 border border-white rounded sm:w-auto active:bg-pink-600 hover:bg-pink-700 focus:outline-none focus:shadow-outline-purple") }, });
        [close,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['md:flex-nowrap'];
        __VLS_styleScopedClasses['bg-pink-900'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['align-middle'];
        __VLS_styleScopedClasses['message'];
        __VLS_styleScopedClasses['mt-1'];
        __VLS_styleScopedClasses['buttons'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['align-middle'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['md:mt-0'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['leading-none'];
        __VLS_styleScopedClasses['transition-colors'];
        __VLS_styleScopedClasses['duration-150'];
        __VLS_styleScopedClasses['bg-pink-900'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-white'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['sm:w-auto'];
        __VLS_styleScopedClasses['active:bg-pink-600'];
        __VLS_styleScopedClasses['hover:bg-pink-700'];
        __VLS_styleScopedClasses['focus:outline-none'];
        __VLS_styleScopedClasses['focus:shadow-outline-purple'];
        __VLS_styleScopedClasses['mr-4'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['leading-none'];
        __VLS_styleScopedClasses['transition-colors'];
        __VLS_styleScopedClasses['duration-150'];
        __VLS_styleScopedClasses['bg-pink-900'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-white'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['sm:w-auto'];
        __VLS_styleScopedClasses['active:bg-pink-600'];
        __VLS_styleScopedClasses['hover:bg-pink-700'];
        __VLS_styleScopedClasses['focus:outline-none'];
        __VLS_styleScopedClasses['focus:shadow-outline-purple'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                offlineReady: offlineReady,
                needRefresh: needRefresh,
                updateServiceWorker: updateServiceWorker,
                close: close,
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
//# sourceMappingURL=ReloadPWA.vue.js.map