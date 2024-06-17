import { format } from 'date-fns';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const $emit = defineEmits();
const _session = computed({
    get() {
        return props.session;
    },
    set(session) {
        $emit('update:session', session);
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
        .VSheet;
    ({}.VSheet);
    ({}.VSheet);
    __VLS_components.VSheet;
    __VLS_components.vSheet;
    __VLS_components.VSheet;
    __VLS_components.vSheet;
    [VSheet, VSheet,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("dating-film__date-picker h-[44px]") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("dating-film__date-picker h-[44px]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("dating-film__date-picker h-[44px]") }, }));
    const __VLS_6 = {}
        .BaseSlideGroup;
    ({}.BaseSlideGroup);
    ({}.BaseSlideGroup);
    __VLS_components.BaseSlideGroup;
    __VLS_components.BaseSlideGroup;
    [BaseSlideGroup, BaseSlideGroup,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ slides: ((__VLS_ctx.sessions)), selected: ((__VLS_ctx._session)), }));
    const __VLS_8 = __VLS_7({ slides: ((__VLS_ctx.sessions)), selected: ((__VLS_ctx._session)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ slides: ((__VLS_ctx.sessions)), selected: ((__VLS_ctx._session)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ toggle, item, isSelected }] = __VLS_getSlotParams((__VLS_11.slots).default);
        const __VLS_12 = {}
            .KeepAlive;
        ({}.KeepAlive);
        ({}.KeepAlive);
        __VLS_components.KeepAlive;
        __VLS_components.keepAlive;
        __VLS_components.KeepAlive;
        __VLS_components.keepAlive;
        [KeepAlive, KeepAlive,];
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
        const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({}));
        if (item) {
            const __VLS_18 = {}
                .VBtn;
            ({}.VBtn);
            ({}.VBtn);
            __VLS_components.VBtn;
            __VLS_components.vBtn;
            __VLS_components.VBtn;
            __VLS_components.vBtn;
            [VBtn, VBtn,];
            const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ 'onClick': {} }, color: ("primary"), variant: ((isSelected ? 'flat' : 'outlined')), ...{ class: ("dating-film__date-picker__item") }, rounded: ("lg"), }));
            const __VLS_20 = __VLS_19({ ...{ 'onClick': {} }, color: ("primary"), variant: ((isSelected ? 'flat' : 'outlined')), ...{ class: ("dating-film__date-picker__item") }, rounded: ("lg"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
            ({}({ ...{ 'onClick': {} }, color: ("primary"), variant: ((isSelected ? 'flat' : 'outlined')), ...{ class: ("dating-film__date-picker__item") }, rounded: ("lg"), }));
            let __VLS_24;
            const __VLS_25 = {
                onClick: (toggle)
            };
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("font-semibold text-base") }, });
            (__VLS_ctx.format(item?.sessionTimeStart, 'hh:mm'));
            [sessions, _session, format,];
            (__VLS_23.slots).default;
            const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
            let __VLS_21;
            let __VLS_22;
        }
        (__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    }
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['dating-film__date-picker'];
        __VLS_styleScopedClasses['h-[44px]'];
        __VLS_styleScopedClasses['dating-film__date-picker__item'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['text-base'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                format: format,
                _session: _session,
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
//# sourceMappingURL=DatingFilmTimePicker.vue.js.map