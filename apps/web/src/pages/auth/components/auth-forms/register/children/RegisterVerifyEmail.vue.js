import { useRouter } from 'vue-router';
import { useForm } from 'vee-validate';
import { useUserStore } from '@/stores/user';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { verifyEmail } = useUserStore();
const $router = useRouter();
const { values, validate } = useForm({
    validationSchema: {
        email: 'required|email',
    },
    initialValues: {
        email: null,
    },
});
const handleVerifyEmail = async () => {
    try {
        const { valid } = await validate();
        if (valid) {
            await verifyEmail(values);
            $router.push({ name: 'register.verify-code', query: { email: values.email } });
        }
    }
    catch (error) { }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-column h-full items-center mt-20") }, });
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
        onSubmit: (__VLS_ctx.handleVerifyEmail)
    };
    const __VLS_8 = {}
        .BaseInputWithValidation;
    ({}.BaseInputWithValidation);
    ({}.BaseInputWithValidation);
    __VLS_components.BaseInputWithValidation;
    __VLS_components.BaseInputWithValidation;
    [BaseInputWithValidation, BaseInputWithValidation,];
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ name: ("email"), type: ("email"), label: ("Электронная почта"), }));
    const __VLS_10 = __VLS_9({ name: ("email"), type: ("email"), label: ("Электронная почта"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ name: ("email"), type: ("email"), label: ("Электронная почта"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_13.slots)["prepend-inner"];
        const __VLS_14 = {}
            .VIcon;
        ({}.VIcon);
        __VLS_components.VIcon;
        [VIcon,];
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ icon: (('mdi-email')), color: ("primary"), }));
        const __VLS_16 = __VLS_15({ icon: (('mdi-email')), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
        ({}({ icon: (('mdi-email')), color: ("primary"), }));
        [handleVerifyEmail,];
        const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    }
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    const __VLS_20 = {}
        .BaseButton;
    ({}.BaseButton);
    __VLS_components.BaseButton;
    [BaseButton,];
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ class: ("w-full") }, label: ("Зарегистрироваться"), type: ("submit"), }));
    const __VLS_22 = __VLS_21({ ...{ class: ("w-full") }, label: ("Зарегистрироваться"), type: ("submit"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ ...{ class: ("w-full") }, label: ("Зарегистрироваться"), type: ("submit"), }));
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-inline-flex text-p mt-4 gap-2 justify-center w-full") }, });
    const __VLS_26 = {}
        .ButtonLink;
    ({}.ButtonLink);
    __VLS_components.ButtonLink;
    [ButtonLink,];
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ to: (({ name: 'login' })), label: ("У меня уже есть аккаунт"), }));
    const __VLS_28 = __VLS_27({ to: (({ name: 'login' })), label: ("У меня уже есть аккаунт"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ to: (({ name: 'login' })), label: ("У меня уже есть аккаунт"), }));
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['mt-20'];
        __VLS_styleScopedClasses['max-w-screen-sm'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['w-full'];
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
                handleVerifyEmail: handleVerifyEmail,
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
//# sourceMappingURL=RegisterVerifyEmail.vue.js.map