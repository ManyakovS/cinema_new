const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
let timer1, timer2;
onMounted(() => {
    const toast = document.querySelector('.toast');
    const closeIcon = document.querySelector('.close');
    const progress = document.querySelector('.progress');
    progress.style.setProperty('--progress-active-duration', `${props.timeout}ms`);
    toast.classList.add('active');
    progress.classList.add('active');
    timer1 = setTimeout(() => {
        toast.classList.remove('active');
    }, props.timeout);
    timer2 = setTimeout(() => {
        progress.classList.remove('active');
    }, props.timeout + 50);
    closeIcon.addEventListener('click', () => {
        toast.classList.remove('active');
        setTimeout(() => {
            progress.classList.remove('active');
        }, props.timeout);
        clearTimeout(timer1);
        clearTimeout(timer2);
        props.close();
    });
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
        .teleport;
    ({}.teleport);
    ({}.teleport);
    __VLS_components.Teleport;
    __VLS_components.teleport;
    __VLS_components.Teleport;
    __VLS_components.teleport;
    [Teleport, Teleport,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("body"), }));
    const __VLS_2 = __VLS_1({ to: ("body"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("body"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("toast active") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("toast-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fas fa-solid fa-check check") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("message") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text text-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text text-2") }, });
    (__VLS_ctx.message);
    [message,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span)({ ...{ class: ("cross-stand-alone close") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("progress active") }, });
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['toast'];
        __VLS_styleScopedClasses['active'];
        __VLS_styleScopedClasses['toast-content'];
        __VLS_styleScopedClasses['fas'];
        __VLS_styleScopedClasses['fa-solid'];
        __VLS_styleScopedClasses['fa-check'];
        __VLS_styleScopedClasses['check'];
        __VLS_styleScopedClasses['message'];
        __VLS_styleScopedClasses['text'];
        __VLS_styleScopedClasses['text-1'];
        __VLS_styleScopedClasses['text'];
        __VLS_styleScopedClasses['text-2'];
        __VLS_styleScopedClasses['cross-stand-alone'];
        __VLS_styleScopedClasses['close'];
        __VLS_styleScopedClasses['progress'];
        __VLS_styleScopedClasses['active'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {};
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
//# sourceMappingURL=BaseNotify.vue.js.map