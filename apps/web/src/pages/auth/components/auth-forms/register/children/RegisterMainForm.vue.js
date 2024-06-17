import { useRouter } from 'vue-router';
import { useForm } from 'vee-validate';
import { useUserStore } from '@/stores/user';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const userStore = useUserStore();
const $router = useRouter();
const $route = useRoute();
const { values, validate } = useForm({
    validationSchema: {
        user_name: 'required|full_name',
        email: 'required|email',
        userPassword: 'required|min:8',
        confirmationPassword: 'required|confirmed:@userPassword',
    },
    initialValues: {
        user_name: ' ',
        email: $route.query?.email?.toString(),
        userPassword: '',
        confirmationPassword: null,
        verifyCode: $route.query?.verifyCode?.toString(),
    },
});
const handleRegistration = async () => {
    try {
        const { valid } = await validate();
        if (valid) {
            await userStore.register({
                name: values.user_name,
                password: values.userPassword,
                email: values.email,
                verifyCode: values.verifyCode,
            });
            $router.push('/');
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-column h-full items-center mt-4") }, });
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
        onSubmit: (__VLS_ctx.handleRegistration)
    };
    const __VLS_8 = {}
        .InputPassword;
    ({}.InputPassword);
    __VLS_components.InputPassword;
    [InputPassword,];
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ name: ("password"), ...{ style: ({}) }, }));
    const __VLS_10 = __VLS_9({ name: ("password"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ name: ("password"), ...{ style: ({}) }, }));
    [handleRegistration,];
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    const __VLS_14 = {}
        .BaseInputWithValidation;
    ({}.BaseInputWithValidation);
    ({}.BaseInputWithValidation);
    __VLS_components.BaseInputWithValidation;
    __VLS_components.BaseInputWithValidation;
    [BaseInputWithValidation, BaseInputWithValidation,];
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ type: ("text"), name: ("user_name"), label: ("ФИО"), }));
    const __VLS_16 = __VLS_15({ type: ("text"), name: ("user_name"), label: ("ФИО"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ type: ("text"), name: ("user_name"), label: ("ФИО"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_19.slots)["prepend-inner"];
        const __VLS_20 = {}
            .VIcon;
        ({}.VIcon);
        __VLS_components.VIcon;
        [VIcon,];
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ icon: (('mdi-account')), color: ("primary"), }));
        const __VLS_22 = __VLS_21({ icon: (('mdi-account')), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
        ({}({ icon: (('mdi-account')), color: ("primary"), }));
        const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    }
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    const __VLS_26 = {}
        .InputPassword;
    ({}.InputPassword);
    __VLS_components.InputPassword;
    [InputPassword,];
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ name: ("userPassword"), }));
    const __VLS_28 = __VLS_27({ name: ("userPassword"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ name: ("userPassword"), }));
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    const __VLS_32 = {}
        .InputPassword;
    ({}.InputPassword);
    __VLS_components.InputPassword;
    [InputPassword,];
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ label: ("Повторите пароль"), name: ("confirmationPassword"), }));
    const __VLS_34 = __VLS_33({ label: ("Повторите пароль"), name: ("confirmationPassword"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ label: ("Повторите пароль"), name: ("confirmationPassword"), }));
    const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    const __VLS_38 = {}
        .BaseButton;
    ({}.BaseButton);
    __VLS_components.BaseButton;
    [BaseButton,];
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{ class: ("w-full") }, label: ("Зарегистрироваться"), type: ("submit"), }));
    const __VLS_40 = __VLS_39({ ...{ class: ("w-full") }, label: ("Зарегистрироваться"), type: ("submit"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    ({}({ ...{ class: ("w-full") }, label: ("Зарегистрироваться"), type: ("submit"), }));
    const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-inline-flex text-p mt-4 gap-2 justify-center w-full") }, });
    const __VLS_44 = {}
        .ButtonLink;
    ({}.ButtonLink);
    __VLS_components.ButtonLink;
    [ButtonLink,];
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ to: (({ name: 'login' })), label: ("У меня уже есть аккаунт"), }));
    const __VLS_46 = __VLS_45({ to: (({ name: 'login' })), label: ("У меня уже есть аккаунт"), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    ({}({ to: (({ name: 'login' })), label: ("У меня уже есть аккаунт"), }));
    const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-column'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['mt-4'];
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
                handleRegistration: handleRegistration,
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
//# sourceMappingURL=RegisterMainForm.vue.js.map