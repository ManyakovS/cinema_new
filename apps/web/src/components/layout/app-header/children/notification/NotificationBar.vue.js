import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useNotificationStore } from '@/stores/notifications';
import { useUserStore } from '@/stores/user';
import { useNotify } from '@/utils/hooks/use-notify';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const $emit = defineEmits();
const { fetchNotifications, readNotification, readAllNotification } = useNotificationStore();
const { notifications } = storeToRefs(useNotificationStore());
const { user } = storeToRefs(useUserStore());
const { notifyError } = useNotify();
const _drawer = computed({
    get() {
        return props.drawer;
    },
    set(value) {
        $emit('update:drawer', value);
    },
});
fetchData();
async function fetchData() {
    await fetchNotifications(user.value.id).catch(notifyError);
}
async function handleRead(notificationId) {
    await readNotification(notificationId);
}
async function markAllAsRead() {
    await readAllNotification(user.value.id);
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
        .VNavigationDrawer;
    ({}.VNavigationDrawer);
    ({}.VNavigationDrawer);
    __VLS_components.VNavigationDrawer;
    __VLS_components.vNavigationDrawer;
    __VLS_components.VNavigationDrawer;
    __VLS_components.vNavigationDrawer;
    [VNavigationDrawer, VNavigationDrawer,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ modelValue: ((__VLS_ctx._drawer)), app: (true), temporary: (true), location: ("right"), }));
    const __VLS_2 = __VLS_1({ modelValue: ((__VLS_ctx._drawer)), app: (true), temporary: (true), location: ("right"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ modelValue: ((__VLS_ctx._drawer)), app: (true), temporary: (true), location: ("right"), }));
    const __VLS_6 = {}
        .VList;
    ({}.VList);
    ({}.VList);
    __VLS_components.VList;
    __VLS_components.vList;
    __VLS_components.VList;
    __VLS_components.vList;
    [VList, VList,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({}));
    for (const [notification] of __VLS_getVForSourceType((__VLS_ctx.notifications))) {
        const __VLS_12 = {}
            .NotificationItem;
        ({}.NotificationItem);
        __VLS_components.NotificationItem;
        [NotificationItem,];
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onRead': {} }, key: ((notification.id)), notification: ((notification)), }));
        const __VLS_14 = __VLS_13({ ...{ 'onRead': {} }, key: ((notification.id)), notification: ((notification)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ ...{ 'onRead': {} }, key: ((notification.id)), notification: ((notification)), }));
        let __VLS_18;
        const __VLS_19 = {
            onRead: (__VLS_ctx.handleRead)
        };
        [_drawer, notifications, handleRead,];
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        let __VLS_15;
        let __VLS_16;
    }
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_20 = {}
        .VCardActions;
    ({}.VCardActions);
    ({}.VCardActions);
    __VLS_components.VCardActions;
    __VLS_components.vCardActions;
    __VLS_components.VCardActions;
    __VLS_components.vCardActions;
    [VCardActions, VCardActions,];
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ class: ("notification_footer") }, }));
    const __VLS_22 = __VLS_21({ ...{ class: ("notification_footer") }, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ ...{ class: ("notification_footer") }, }));
    const __VLS_26 = {}
        .VSpacer;
    ({}.VSpacer);
    ({}.VSpacer);
    __VLS_components.VSpacer;
    __VLS_components.vSpacer;
    __VLS_components.VSpacer;
    __VLS_components.vSpacer;
    [VSpacer, VSpacer,];
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({}));
    const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({}));
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    const __VLS_32 = {}
        .VBtn;
    ({}.VBtn);
    ({}.VBtn);
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    [VBtn, VBtn,];
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{ 'onClick': {} }, }));
    const __VLS_34 = __VLS_33({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_38;
    const __VLS_39 = {
        onClick: (__VLS_ctx.markAllAsRead)
    };
    const __VLS_40 = {}
        .VToolbarTitle;
    ({}.VToolbarTitle);
    ({}.VToolbarTitle);
    __VLS_components.VToolbarTitle;
    __VLS_components.vToolbarTitle;
    __VLS_components.VToolbarTitle;
    __VLS_components.vToolbarTitle;
    [VToolbarTitle, VToolbarTitle,];
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({}));
    const __VLS_42 = __VLS_41({}, ...__VLS_functionalComponentArgsRest(__VLS_41));
    ({}({}));
    [markAllAsRead,];
    (__VLS_45.slots).default;
    const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
    (__VLS_37.slots).default;
    const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    let __VLS_35;
    let __VLS_36;
    (__VLS_25.slots).default;
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['notification_footer'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                notifications: notifications,
                _drawer: _drawer,
                handleRead: handleRead,
                markAllAsRead: markAllAsRead,
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
//# sourceMappingURL=NotificationBar.vue.js.map