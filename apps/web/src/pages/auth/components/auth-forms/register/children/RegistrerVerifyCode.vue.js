import { useRouter } from 'vue-router';
import { useForm } from 'vee-validate';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useNotify } from '@/utils/hooks/use-notify';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { queryEmail } = storeToRefs(useUserStore());
const { verifyCode } = useUserStore();
const $router = useRouter();
const { notifyError } = useNotify();
const validationSchema = computed(() => {
    return {
        verifyCode: 'required|min:6',
        email: 'required',
    };
});
const { values, validate } = useForm({
    validationSchema,
    initialValues: {
        verifyCode: '',
        email: queryEmail.value,
    },
});
const handleRestore = async () => {
    try {
        const { valid } = await validate();
        if (valid) {
            const verify = await verifyCode(values);
            if (verify)
                $router.push({ name: 'register.main.form', query: { email: values.email, verifyCode: values.verifyCode } });
        }
    }
    catch (error) {
        notifyError(error);
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-column h-full items-center mt-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-column items-center max-w-[400px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-h6 text-primary-lighten-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-p text-primary-lighten-1 text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
    (__VLS_ctx.queryEmail);
    [queryEmail,];
    const __VLS_0 = {}
        .VForm;
    ({}.VForm);
    ({}.VForm);
    __VLS_components.VForm;
    __VLS_components.VForm;
    [VForm, VForm,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onSubmit': {} }, ...{ class: ("max-w-screen-sm w-full") }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onSubmit': {} }, ...{ class: ("max-w-screen-sm w-full") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onSubmit': {} }, ...{ class: ("max-w-screen-sm w-full") }, }));
    let __VLS_6;
    const __VLS_7 = {
        onSubmit: (__VLS_ctx.handleRestore)
    };
    const __VLS_8 = {}
        .BaseOPTInputWithValidation;
    ({}.BaseOPTInputWithValidation);
    __VLS_components.BaseOPTInputWithValidation;
    [BaseOPTInputWithValidation,];
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ name: ("verifyCode"), }));
    const __VLS_10 = __VLS_9({ name: ("verifyCode"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ name: ("verifyCode"), }));
    [handleRestore,];
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    const __VLS_14 = {}
        .BaseButton;
    ({}.BaseButton);
    __VLS_components.BaseButton;
    [BaseButton,];
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{ class: ("w-full mt-2") }, label: ("Подтвердить"), type: ("submit"), }));
    const __VLS_16 = __VLS_15({ ...{ class: ("w-full mt-2") }, label: ("Подтвердить"), type: ("submit"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ ...{ class: ("w-full mt-2") }, label: ("Подтвердить"), type: ("submit"), }));
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-inline-flex text-p mt-4 gap-2 justify-center w-full") }, });
    const __VLS_20 = {}
        .ButtonLink;
    ({}.ButtonLink);
    __VLS_components.ButtonLink;
    [ButtonLink,];
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ to: (({ name: 'register.verify-email' })), label: ("Изменить адрес электронный почты"), }));
    const __VLS_22 = __VLS_21({ to: (({ name: 'register.verify-email' })), label: ("Изменить адрес электронный почты"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ to: (({ name: 'register.verify-email' })), label: ("Изменить адрес электронный почты"), }));
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['mt-6'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['max-w-[400px]'];
        __VLS_styleScopedClasses['text-h6'];
        __VLS_styleScopedClasses['text-primary-lighten-1'];
        __VLS_styleScopedClasses['text-p'];
        __VLS_styleScopedClasses['text-primary-lighten-1'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['max-w-screen-sm'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['d-inline-flex'];
        __VLS_styleScopedClasses['text-p'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['w-full'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                queryEmail: queryEmail,
                handleRestore: handleRestore,
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
//# sourceMappingURL=RegistrerVerifyCode.vue.js.map