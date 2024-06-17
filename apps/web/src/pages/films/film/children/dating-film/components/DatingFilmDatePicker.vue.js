import { uniqBy, isEqual } from 'lodash';
import { format, closestTo } from 'date-fns';
import { ru } from 'date-fns/locale';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const $emit = defineEmits();
const _session = computed({
    get() {
        if (props.session)
            return props.session;
        else {
            const session = findClosestDate(uniqueDatesSessions.value, new Date())?.[0];
            $emit('update:session', session);
            return session;
        }
    },
    set(session) {
        $emit('update:session', session);
    },
});
const uniqueDatesSessions = computed(() => {
    console.log(1);
    return uniqueByDate(props.sessions, 'sessionTimeStart');
});
function formatDate(dateString) {
    const formatDate = format(new Date(dateString), 'EEE', {
        locale: ru,
    }).substring(0, 2);
    return `${formatDate[0].toUpperCase() + formatDate[1]}`;
}
function findClosestDate(array, targetDate) {
    const dates = array.map((obj) => new Date(obj.sessionTimeStart));
    const closestDate = closestTo(new Date(targetDate), dates);
    return array.filter((obj) => isEqual(new Date(obj.sessionTimeStart), new Date(closestDate)));
}
function uniqueByDate(array, key) {
    return uniqBy(array, (session) => session[key].substring(0, 10));
}
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("dating-film__date-picker") }, elevation: ("8"), }));
    const __VLS_2 = __VLS_1({ ...{ class: ("dating-film__date-picker") }, elevation: ("8"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("dating-film__date-picker") }, elevation: ("8"), }));
    const __VLS_6 = {}
        .BaseSlideGroup;
    ({}.BaseSlideGroup);
    ({}.BaseSlideGroup);
    __VLS_components.BaseSlideGroup;
    __VLS_components.BaseSlideGroup;
    [BaseSlideGroup, BaseSlideGroup,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("h-[84px]") }, slides: ((__VLS_ctx.uniqueDatesSessions)), selected: ((__VLS_ctx._session)), }));
    const __VLS_8 = __VLS_7({ ...{ class: ("h-[84px]") }, slides: ((__VLS_ctx.uniqueDatesSessions)), selected: ((__VLS_ctx._session)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ class: ("h-[84px]") }, slides: ((__VLS_ctx.uniqueDatesSessions)), selected: ((__VLS_ctx._session)), }));
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
        const __VLS_18 = {}
            .VCard;
        ({}.VCard);
        ({}.VCard);
        __VLS_components.VCard;
        __VLS_components.vCard;
        __VLS_components.VCard;
        __VLS_components.vCard;
        [VCard, VCard,];
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ 'onClick': {} }, ...{ class: ("dating-film__date-picker__item w-[48px] py-3 d-flex flex-column items-center justify-center text-xl") }, ...{ class: (({ 'dating-film__date-picker__item__selected': isSelected })) }, }));
        const __VLS_20 = __VLS_19({ ...{ 'onClick': {} }, ...{ class: ("dating-film__date-picker__item w-[48px] py-3 d-flex flex-column items-center justify-center text-xl") }, ...{ class: (({ 'dating-film__date-picker__item__selected': isSelected })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ ...{ 'onClick': {} }, ...{ class: ("dating-film__date-picker__item w-[48px] py-3 d-flex flex-column items-center justify-center text-xl") }, ...{ class: (({ 'dating-film__date-picker__item__selected': isSelected })) }, }));
        __VLS_styleScopedClasses = ({ 'dating-film__date-picker__item__selected': isSelected });
        let __VLS_24;
        const __VLS_25 = {
            onClick: (toggle)
        };
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-primary font-bold uppercase") }, });
        (__VLS_ctx.format(item.sessionTimeStart, 'd'));
        [uniqueDatesSessions, _session, format,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-primary") }, });
        (__VLS_ctx.formatDate(item.sessionTimeStart));
        [formatDate,];
        (__VLS_23.slots).default;
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
        let __VLS_21;
        let __VLS_22;
        (__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    }
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['dating-film__date-picker'];
        __VLS_styleScopedClasses['h-[84px]'];
        __VLS_styleScopedClasses['dating-film__date-picker__item'];
        __VLS_styleScopedClasses['w-[48px]'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['text-primary'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['text-primary'];
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
                uniqueDatesSessions: uniqueDatesSessions,
                formatDate: formatDate,
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
//# sourceMappingURL=DatingFilmDatePicker.vue.js.map