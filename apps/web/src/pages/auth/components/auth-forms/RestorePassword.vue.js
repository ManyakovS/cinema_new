import { useRoute, useRouter } from 'vue-router';
import { useForm } from 'vee-validate';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { queryEmail } = storeToRefs(useUserStore());
const $router = useRouter();
const $route = useRoute();
const _token = $route.query.token;
const _email = $route.query.email;
const validationSchema = computed(() => {
    return {
        code: 'required|min:6',
        token: _token ? 'required' : '',
        password: _token ? 'required|min:8' : '',
        confirmationPassword: _token ? 'required|confirmed:@password' : '',
    };
});
const { values, validate } = useForm({
    validationSchema,
    initialValues: {
        code: '',
        token: Array.isArray(_token) ? _token[0] : _token,
        password: null,
        confirmationPassword: null,
    },
});
function handle() {
    console.log(values);
    $router.push({
        name: 'restore-password',
        query: {
            email: 'Rafael2111@yandex.ru',
            token: '24124kdfhUKDt2tjaDGFLUIKAg_afhbasdukgjffguiuifas__abjajsfjafsasfhjnasf++112rasf',
        },
    });
}
const handleRestore = async () => {
    try {
        const { valid } = await validate();
        if (valid) {
            if (!values.token) {
                values.token =
                    '24124kdfhUKDt2tjaDGFLUIKAg_afhbasdukgjffguiuifas__abjajsfjafsasfhjnasf++112rasf';
            }
            else {
                $router.push('');
            }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-column h-full items-center mt-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-column items-center max-w-[400px]") }, });
    if (!__VLS_ctx.values.token) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-h6 text-primary-lighten-1") }, });
        [values,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-h6 text-primary-lighten-1") }, });
    }
    if (!__VLS_ctx.values.token) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-p text-primary-lighten-1 text-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
        (__VLS_ctx.queryEmail);
        [values, queryEmail,];
    }
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
    if (!__VLS_ctx.values.token) {
        const __VLS_8 = {}
            .BaseOPTInputWithValidation;
        ({}.BaseOPTInputWithValidation);
        __VLS_components.BaseOPTInputWithValidation;
        [BaseOPTInputWithValidation,];
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ name: ("code"), }));
        const __VLS_10 = __VLS_9({ name: ("code"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
        ({}({ name: ("code"), }));
        [values, handleRestore,];
        const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    }
    else {
        const __VLS_14 = {}
            .InputPassword;
        ({}.InputPassword);
        __VLS_components.InputPassword;
        [InputPassword,];
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{ class: ("mt-2") }, label: ("Новый пароль"), name: ("password"), }));
        const __VLS_16 = __VLS_15({ ...{ class: ("mt-2") }, label: ("Новый пароль"), name: ("password"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
        ({}({ ...{ class: ("mt-2") }, label: ("Новый пароль"), name: ("password"), }));
        const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
        const __VLS_20 = {}
            .InputPassword;
        ({}.InputPassword);
        __VLS_components.InputPassword;
        [InputPassword,];
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ class: ("mt-1") }, label: ("Повторите пароль"), name: ("confirmationPassword"), }));
        const __VLS_22 = __VLS_21({ ...{ class: ("mt-1") }, label: ("Повторите пароль"), name: ("confirmationPassword"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
        ({}({ ...{ class: ("mt-1") }, label: ("Повторите пароль"), name: ("confirmationPassword"), }));
        const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    }
    const __VLS_26 = {}
        .BaseButton;
    ({}.BaseButton);
    __VLS_components.BaseButton;
    [BaseButton,];
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{ class: ("w-full mt-2") }, label: ((!__VLS_ctx.values.token ? 'Подтвердить' : 'Изменить пароль')), type: ("submit"), }));
    const __VLS_28 = __VLS_27({ ...{ class: ("w-full mt-2") }, label: ((!__VLS_ctx.values.token ? 'Подтвердить' : 'Изменить пароль')), type: ("submit"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ ...{ class: ("w-full mt-2") }, label: ((!__VLS_ctx.values.token ? 'Подтвердить' : 'Изменить пароль')), type: ("submit"), }));
    [values,];
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-inline-flex text-p mt-4 gap-2 justify-center w-full") }, });
    const __VLS_32 = {}
        .ButtonLink;
    ({}.ButtonLink);
    __VLS_components.ButtonLink;
    [ButtonLink,];
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ to: (({ name: 'restore' })), label: ("Изменить адрес электронный почты"), }));
    const __VLS_34 = __VLS_33({ to: (({ name: 'restore' })), label: ("Изменить адрес электронный почты"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ to: (({ name: 'restore' })), label: ("Изменить адрес электронный почты"), }));
    const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
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
        __VLS_styleScopedClasses['text-h6'];
        __VLS_styleScopedClasses['text-primary-lighten-1'];
        __VLS_styleScopedClasses['text-p'];
        __VLS_styleScopedClasses['text-primary-lighten-1'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['max-w-screen-sm'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['mt-1'];
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
                values: values,
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
//# sourceMappingURL=RestorePassword.vue.js.map