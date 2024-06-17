import { isEqual } from 'lodash';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const $emit = defineEmits();
const _selectedIndex = computed({
    get() {
        if (!props.selected)
            return 0;
        else {
            return props.slides?.findIndex((s) => isEqual(s?.id, props.selected?.id));
        }
    },
    set(index) {
        $emit('update:selected', props.slides[index]);
        return index;
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
        .VSlideGroup;
    ({}.VSlideGroup);
    ({}.VSlideGroup);
    __VLS_components.VSlideGroup;
    __VLS_components.VSlideGroup;
    [VSlideGroup, VSlideGroup,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...(__VLS_ctx.$attrs), modelValue: ((__VLS_ctx._selectedIndex)), }));
    const __VLS_2 = __VLS_1({ ...(__VLS_ctx.$attrs), modelValue: ((__VLS_ctx._selectedIndex)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...(__VLS_ctx.$attrs), modelValue: ((__VLS_ctx._selectedIndex)), }));
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.slides))) {
        const __VLS_6 = {}
            .VSlideGroupItem;
        ({}.VSlideGroupItem);
        ({}.VSlideGroupItem);
        __VLS_components.VSlideGroupItem;
        __VLS_components.VSlideGroupItem;
        [VSlideGroupItem, VSlideGroupItem,];
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ key: ((index)), }));
        const __VLS_8 = __VLS_7({ key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ key: ((index)), }));
        {
            const [{ toggle, isSelected }] = __VLS_getSlotParams((__VLS_11.slots).default);
            var __VLS_12 = {
                isSelected: ((isSelected)), toggle: ((toggle)), item: ((item)),
            };
            [$attrs, _selectedIndex, slides,];
            __VLS_11.slots[''];
        }
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    }
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
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
                _selectedIndex: _selectedIndex,
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
//# sourceMappingURL=BaseSlideGroup.vue.js.map