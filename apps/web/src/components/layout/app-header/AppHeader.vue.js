import { storeToRefs } from 'pinia';
import { useNotificationStore } from '@/stores/notifications';
import { useUserStore } from '@/stores/user';
import { wssNotification } from '@/web-socket/modules/wss-notifications';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
wssNotification();
const { user } = storeToRefs(useUserStore());
const { notifications } = storeToRefs(useNotificationStore());
const unreadCount = computed(() => notifications.value.filter((n) => !n.read).length);
const drawer = ref(false);
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
        .VAppBar;
    ({}.VAppBar);
    ({}.VAppBar);
    __VLS_components.VAppBar;
    __VLS_components.vAppBar;
    __VLS_components.VAppBar;
    __VLS_components.vAppBar;
    [VAppBar, VAppBar,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ app: (true), ...{ class: (({ active: __VLS_ctx.drawer })) }, }));
    const __VLS_2 = __VLS_1({ app: (true), ...{ class: (({ active: __VLS_ctx.drawer })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ app: (true), ...{ class: (({ active: __VLS_ctx.drawer })) }, }));
    __VLS_styleScopedClasses = ({ active: drawer });
    const __VLS_6 = {}
        .VToolbarTitle;
    ({}.VToolbarTitle);
    ({}.VToolbarTitle);
    __VLS_components.VToolbarTitle;
    __VLS_components.vToolbarTitle;
    __VLS_components.VToolbarTitle;
    __VLS_components.vToolbarTitle;
    [VToolbarTitle, VToolbarTitle,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({}));
    const __VLS_12 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    [RouterLink, RouterLink,];
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: (({ name: 'profile' })), }));
    const __VLS_14 = __VLS_13({ to: (({ name: 'profile' })), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ to: (({ name: 'profile' })), }));
    const __VLS_18 = {}
        .UserCard;
    ({}.UserCard);
    __VLS_components.UserCard;
    [UserCard,];
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ user: ((__VLS_ctx.user)), size: ("medium"), }));
    const __VLS_20 = __VLS_19({ user: ((__VLS_ctx.user)), size: ("medium"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ user: ((__VLS_ctx.user)), size: ("medium"), }));
    [drawer, user,];
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_24 = {}
        .VSpacer;
    ({}.VSpacer);
    ({}.VSpacer);
    __VLS_components.VSpacer;
    __VLS_components.vSpacer;
    __VLS_components.VSpacer;
    __VLS_components.vSpacer;
    [VSpacer, VSpacer,];
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({}));
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    const __VLS_30 = {}
        .VBtn;
    ({}.VBtn);
    ({}.VBtn);
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    [VBtn, VBtn,];
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onClick': {} }, icon: (true), }));
    const __VLS_32 = __VLS_31({ ...{ 'onClick': {} }, icon: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ ...{ 'onClick': {} }, icon: (true), }));
    let __VLS_36;
    const __VLS_37 = {
        onClick: (...[$event]) => {
            __VLS_ctx.drawer = !__VLS_ctx.drawer;
            [drawer, drawer,];
        }
    };
    if (__VLS_ctx.unreadCount) {
        const __VLS_38 = {}
            .VBadge;
        ({}.VBadge);
        ({}.VBadge);
        __VLS_components.VBadge;
        __VLS_components.vBadge;
        __VLS_components.VBadge;
        __VLS_components.vBadge;
        [VBadge, VBadge,];
        const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ color: ("red"), content: ((__VLS_ctx.unreadCount)), }));
        const __VLS_40 = __VLS_39({ color: ("red"), content: ((__VLS_ctx.unreadCount)), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
        ({}({ color: ("red"), content: ((__VLS_ctx.unreadCount)), }));
        const __VLS_44 = {}
            .VIcon;
        ({}.VIcon);
        ({}.VIcon);
        __VLS_components.VIcon;
        __VLS_components.vIcon;
        __VLS_components.VIcon;
        __VLS_components.vIcon;
        [VIcon, VIcon,];
        const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({}));
        const __VLS_46 = __VLS_45({}, ...__VLS_functionalComponentArgsRest(__VLS_45));
        ({}({}));
        [unreadCount, unreadCount,];
        (__VLS_49.slots).default;
        const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
        (__VLS_43.slots).default;
        const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
    }
    else {
        const __VLS_50 = {}
            .VIcon;
        ({}.VIcon);
        ({}.VIcon);
        __VLS_components.VIcon;
        __VLS_components.vIcon;
        __VLS_components.VIcon;
        __VLS_components.vIcon;
        [VIcon, VIcon,];
        const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({}));
        const __VLS_52 = __VLS_51({}, ...__VLS_functionalComponentArgsRest(__VLS_51));
        ({}({}));
        (__VLS_55.slots).default;
        const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
    }
    (__VLS_35.slots).default;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    let __VLS_33;
    let __VLS_34;
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (__VLS_ctx.drawer) {
        const __VLS_56 = {}
            .NotificationBar;
        ({}.NotificationBar);
        __VLS_components.NotificationBar;
        [NotificationBar,];
        const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ drawer: ((__VLS_ctx.drawer)), }));
        const __VLS_58 = __VLS_57({ drawer: ((__VLS_ctx.drawer)), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
        ({}({ drawer: ((__VLS_ctx.drawer)), }));
        [drawer, drawer,];
        const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
    }
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
                user: user,
                unreadCount: unreadCount,
                drawer: drawer,
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
//# sourceMappingURL=AppHeader.vue.js.map