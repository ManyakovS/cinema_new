import { getFormatedTime } from '@/utils/functions/get-formated-time';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const __VLS_props = defineProps();
const $emit = defineEmits();
let hoverTimer = null;
const handleMouseEnter = (notification) => {
    if (notification.read)
        return;
    hoverTimer = setTimeout(() => {
        $emit('read', notification.id);
    }, 300);
};
const resetHoverTimer = () => {
    clearTimeout(hoverTimer);
};
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
        .VListItem;
    ({}.VListItem);
    ({}.VListItem);
    __VLS_components.VListItem;
    __VLS_components.vListItem;
    __VLS_components.VListItem;
    __VLS_components.vListItem;
    [VListItem, VListItem,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onMouseenter': {} }, ...{ 'onMouseleave': {} }, ...{ class: ("notification-card") }, ...{ class: (({
                unread: !__VLS_ctx.notification.read,
            })) }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onMouseenter': {} }, ...{ 'onMouseleave': {} }, ...{ class: ("notification-card") }, ...{ class: (({
                unread: !__VLS_ctx.notification.read,
            })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onMouseenter': {} }, ...{ 'onMouseleave': {} }, ...{ class: ("notification-card") }, ...{ class: (({
                unread: !__VLS_ctx.notification.read,
            })) }, }));
    __VLS_styleScopedClasses = ({
        unread: !notification.read,
    });
    let __VLS_6;
    const __VLS_7 = {
        onMouseenter: (...[$event]) => {
            __VLS_ctx.handleMouseEnter(__VLS_ctx.notification);
            [notification, notification, handleMouseEnter,];
        }
    };
    const __VLS_8 = {
        onMouseleave: (__VLS_ctx.resetHoverTimer)
    };
    const __VLS_9 = {}
        .VListItemContent;
    ({}.VListItemContent);
    ({}.VListItemContent);
    __VLS_components.VListItemContent;
    __VLS_components.vListItemContent;
    __VLS_components.VListItemContent;
    __VLS_components.vListItemContent;
    [VListItemContent, VListItemContent,];
    const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    ({}({}));
    const __VLS_15 = {}
        .VListItemTitle;
    ({}.VListItemTitle);
    __VLS_components.VListItemTitle;
    __VLS_components.vListItemTitle;
    [VListItemTitle,];
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{ class: ("font-weight-medium") }, }));
    const __VLS_17 = __VLS_16({ ...{ class: ("font-weight-medium") }, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    ({}({ ...{ class: ("font-weight-medium") }, }));
    __VLS_directiveFunction(__VLS_ctx.vHtml)((__VLS_ctx.notification.content));
    [notification, resetHoverTimer, vHtml,];
    const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
    const __VLS_21 = {}
        .VListItemSubtitle;
    ({}.VListItemSubtitle);
    ({}.VListItemSubtitle);
    __VLS_components.VListItemSubtitle;
    __VLS_components.vListItemSubtitle;
    __VLS_components.VListItemSubtitle;
    __VLS_components.vListItemSubtitle;
    [VListItemSubtitle, VListItemSubtitle,];
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ ...{ class: ("mt-2") }, }));
    const __VLS_23 = __VLS_22({ ...{ class: ("mt-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    ({}({ ...{ class: ("mt-2") }, }));
    (__VLS_ctx.getFormatedTime(__VLS_ctx.notification.createdAt, 'dd.MM.yyyy HH:mm'));
    [notification, getFormatedTime,];
    (__VLS_26.slots).default;
    const __VLS_26 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23);
    (__VLS_14.slots).default;
    const __VLS_14 = __VLS_pickFunctionalComponentCtx(__VLS_9, __VLS_11);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['notification-card'];
        __VLS_styleScopedClasses['font-weight-medium'];
        __VLS_styleScopedClasses['mt-2'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                getFormatedTime: getFormatedTime,
                handleMouseEnter: handleMouseEnter,
                resetHoverTimer: resetHoverTimer,
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
//# sourceMappingURL=NotificationItem.vue.js.map