const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const __VLS_props = defineProps();
const $emit = defineEmits();
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
        .VSelect;
    ({}.VSelect);
    ({}.VSelect);
    __VLS_components.VSelect;
    __VLS_components.vSelect;
    __VLS_components.VSelect;
    __VLS_components.vSelect;
    [VSelect, VSelect,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onUpdate:modelValue': {} }, items: ((__VLS_ctx.items)), modelValue: ((__VLS_ctx.modelValue)), itemTitle: ("name"), itemValue: ("id"), variant: ("solo"), clearable: (true), }));
    const __VLS_2 = __VLS_1({ ...{ 'onUpdate:modelValue': {} }, items: ((__VLS_ctx.items)), modelValue: ((__VLS_ctx.modelValue)), itemTitle: ("name"), itemValue: ("id"), variant: ("solo"), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onUpdate:modelValue': {} }, items: ((__VLS_ctx.items)), modelValue: ((__VLS_ctx.modelValue)), itemTitle: ("name"), itemValue: ("id"), variant: ("solo"), clearable: (true), }));
    let __VLS_6;
    const __VLS_7 = {
        'onUpdate:modelValue': (value => __VLS_ctx.$emit('update:model-value', value))
    };
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ props, item }] = __VLS_getSlotParams((__VLS_5.slots).item);
        var __VLS_8 = {
            item: ((item)), props: ((props)),
        };
        [items, modelValue, $emit,];
        const __VLS_9 = {}
            .VListItem;
        ({}.VListItem);
        __VLS_components.VListItem;
        __VLS_components.vListItem;
        [VListItem,];
        const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({ ...({ ...props }), subtitle: ((item.raw.department)), }));
        const __VLS_11 = __VLS_10({ ...({ ...props }), subtitle: ((item.raw.department)), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
        ({}({ ...({ ...props }), subtitle: ((item.raw.department)), }));
        const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_9, __VLS_11);
        (__VLS_5.slots).default;
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                $emit: $emit,
            };
        },
        props: {},
        emits: {},
    });
}
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
    emits: {},
});
export default {};
;
//# sourceMappingURL=BaseSelect.vue.js.map