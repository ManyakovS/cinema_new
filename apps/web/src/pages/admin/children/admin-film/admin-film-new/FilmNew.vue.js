import { useFilmStore } from '@/stores/films';
import { useNotify } from '@/utils/hooks/use-notify';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { notifyError } = useNotify();
const { adminCreate } = useFilmStore();
const $router = useRouter();
async function handleSubmit(form) {
    const film = await adminCreate(form).catch(notifyError);
    $router.push({ name: 'admin.film.edit', params: { id: film.id } });
}
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_0 = {}
        .FilmForm;
    ({}.FilmForm);
    __VLS_components.FilmForm;
    [FilmForm,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onSubmit': {} }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onSubmit': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onSubmit': {} }, }));
    let __VLS_6;
    const __VLS_7 = {
        onSubmit: (__VLS_ctx.handleSubmit)
    };
    [handleSubmit,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
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
                handleSubmit: handleSubmit,
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
//# sourceMappingURL=FilmNew.vue.js.map