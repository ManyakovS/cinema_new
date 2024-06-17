import { computed, ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = withDefaults(defineProps(), {
    files: () => [],
    readonly: false,
    fileFullWidth: true,
    highlightedText: () => [],
    isNeedFileDeleteConfirmation: false,
});
const $emit = defineEmits();
const confirmationDialog = ref(null);
const imageFiles = computed(() => {
    return props.files;
});
const removeFile = async (file) => {
    try {
        if (props.isNeedFileDeleteConfirmation)
            await confirmationDialog.value?.open('Удаление файла', `Вы уверены, что хотите удалить файл <strong class="break-all">${file.name}</strong>?`);
        const id = file.id;
        const files = props.files.filter((f) => id !== f.id);
        const fileIds = files.map((f) => f.id);
        $emit('update:files', files);
        $emit('update:fileIds', fileIds);
    }
    catch (error) {
    }
};
const __VLS_withDefaultsArg = (function (t) { return t; })({
    files: () => [],
    readonly: false,
    fileFullWidth: true,
    highlightedText: () => [],
    isNeedFileDeleteConfirmation: false,
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("files-list flex-inline column full-width") }, });
    if (!__VLS_ctx.imageAsRow && __VLS_ctx.imageFiles.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("files-list__images") }, });
        for (const [file] of __VLS_getVForSourceType((__VLS_ctx.imageFiles))) {
            const __VLS_0 = {}
                .FileImage;
            ({}.FileImage);
            __VLS_components.FileImage;
            [FileImage,];
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onRemove': {} }, key: ((file.id)), readonly: ((__VLS_ctx.readonly)), actions: ((__VLS_ctx.actions)), file: ((file)), highlightedText: ((__VLS_ctx.highlightedText)), }));
            const __VLS_2 = __VLS_1({ ...{ 'onRemove': {} }, key: ((file.id)), readonly: ((__VLS_ctx.readonly)), actions: ((__VLS_ctx.actions)), file: ((file)), highlightedText: ((__VLS_ctx.highlightedText)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            ({}({ ...{ 'onRemove': {} }, key: ((file.id)), readonly: ((__VLS_ctx.readonly)), actions: ((__VLS_ctx.actions)), file: ((file)), highlightedText: ((__VLS_ctx.highlightedText)), }));
            let __VLS_6;
            const __VLS_7 = {
                onRemove: (__VLS_ctx.removeFile)
            };
            [imageAsRow, imageFiles, imageFiles, readonly, actions, highlightedText, removeFile,];
            const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
            let __VLS_3;
            let __VLS_4;
        }
    }
    const __VLS_8 = {}
        .ConfirmationDialog;
    ({}.ConfirmationDialog);
    __VLS_components.ConfirmationDialog;
    [ConfirmationDialog,];
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ref: ("confirmationDialog"), }));
    const __VLS_10 = __VLS_9({ ref: ("confirmationDialog"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ ref: ("confirmationDialog"), }));
    (__VLS_ctx.confirmationDialog);
    [confirmationDialog,];
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['files-list'];
        __VLS_styleScopedClasses['flex-inline'];
        __VLS_styleScopedClasses['column'];
        __VLS_styleScopedClasses['full-width'];
        __VLS_styleScopedClasses['files-list__images'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                confirmationDialog: confirmationDialog,
                imageFiles: imageFiles,
                removeFile: removeFile,
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
//# sourceMappingURL=FileList.vue.js.map