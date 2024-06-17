const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const __VLS_props = defineProps();
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
        .VSheet;
    ({}.VSheet);
    ({}.VSheet);
    __VLS_components.VSheet;
    __VLS_components.vSheet;
    __VLS_components.VSheet;
    __VLS_components.vSheet;
    [VSheet, VSheet,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("about-film__card-list") }, elevation: ("8"), }));
    const __VLS_2 = __VLS_1({ ...{ class: ("about-film__card-list") }, elevation: ("8"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("about-film__card-list") }, elevation: ("8"), }));
    const __VLS_6 = {}
        .VSlideGroup;
    ({}.VSlideGroup);
    ({}.VSlideGroup);
    __VLS_components.VSlideGroup;
    __VLS_components.VSlideGroup;
    [VSlideGroup, VSlideGroup,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({}));
    for (const [actorPostion] of __VLS_getVForSourceType((__VLS_ctx.actors))) {
        const __VLS_12 = {}
            .VSlideGroupItem;
        ({}.VSlideGroupItem);
        ({}.VSlideGroupItem);
        __VLS_components.VSlideGroupItem;
        __VLS_components.VSlideGroupItem;
        [VSlideGroupItem, VSlideGroupItem,];
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ key: ((actorPostion.actor.id)), }));
        const __VLS_14 = __VLS_13({ key: ((actorPostion.actor.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ key: ((actorPostion.actor.id)), }));
        const __VLS_18 = {}
            .AboutFilmCardItem;
        ({}.AboutFilmCardItem);
        __VLS_components.AboutFilmCardItem;
        [AboutFilmCardItem,];
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ name: ((actorPostion.actor.name)), position: ((actorPostion.position)), icon: ((actorPostion.actor.image.path)), }));
        const __VLS_20 = __VLS_19({ name: ((actorPostion.actor.name)), position: ((actorPostion.position)), icon: ((actorPostion.actor.image.path)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ name: ((actorPostion.actor.name)), position: ((actorPostion.position)), icon: ((actorPostion.actor.image.path)), }));
        [actors,];
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
        (__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    }
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['about-film__card-list'];
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
//# sourceMappingURL=AboutFilmCardList.vue.js.map