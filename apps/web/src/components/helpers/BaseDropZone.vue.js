import { useDropzone } from 'vue3-dropzone';
import { request } from '@/utils/services/client';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = withDefaults(defineProps(), {
    files: () => [],
    fileIds: () => [],
    acceptedFileTypes: () => ['image/png', 'image/jpeg'],
});
const $emit = defineEmits();
const { open, getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
        const formData = new FormData();
        acceptedFiles.forEach((file) => {
            formData.append('file', file);
        });
        const file = await fetchFile(formData);
        updateData(file);
    },
    maxSize: props.maxFileSize,
    accept: props.acceptedFileTypes,
    maxFiles: props.maxFiles,
});
function updateData(file) {
    if (file) {
        let files = [...props.files, file];
        if (props.maxFiles)
            files = files.slice(-props.maxFiles);
        const fileIds = files.map((file) => file.id);
        $emit('update:files', files);
        $emit('update:fileIds', fileIds);
    }
}
const loadingProgressData = ref([]);
function abortUpload({ id, controller }) {
    controller.abort();
    removeLoadingProgressDataItem(id);
}
function removeLoadingProgressDataItem(id) {
    loadingProgressData.value = loadingProgressData.value.filter((item) => item.id !== id);
}
async function fetchFile(formData) {
    const controller = new AbortController();
    const id = Date.now().toString(36);
    try {
        const postImage = (body) => request('/image', {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
            params: {
                signal: controller.signal,
                onUploadProgress: (progressEvent) => setProgressData(progressEvent.progress, id, controller),
            },
        });
        const data = await postImage(formData);
        return data.data;
    }
    catch (error) {
        console.error(error);
    }
}
function setProgressData(progress, id, controller) {
    const data = loadingProgressData.value.find((item) => item.id === id);
    if (progress === 1)
        removeLoadingProgressDataItem(id);
    else if (data)
        data.progress = progress;
    else
        loadingProgressData.value.push({ id, controller, progress });
}
const __VLS_withDefaultsArg = (function (t) { return t; })({
    files: () => [],
    fileIds: () => [],
    acceptedFileTypes: () => ['image/png', 'image/jpeg'],
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_0 = {}
        .FileList;
    ({}.FileList);
    __VLS_components.FileList;
    [FileList,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("mb-4") }, files: ((__VLS_ctx.files)), fileIds: ((__VLS_ctx._fileIds)), readonly: ((__VLS_ctx.readonly)), }));
    const __VLS_2 = __VLS_1({ ...{ class: ("mb-4") }, files: ((__VLS_ctx.files)), fileIds: ((__VLS_ctx._fileIds)), readonly: ((__VLS_ctx.readonly)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("mb-4") }, files: ((__VLS_ctx.files)), fileIds: ((__VLS_ctx._fileIds)), readonly: ((__VLS_ctx.readonly)), }));
    [files, _fileIds, readonly,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...(__VLS_ctx.getRootProps()), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...(__VLS_ctx.getInputProps()), });
    [getRootProps, getInputProps,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.open) }, });
    var __VLS_6 = {};
    [open,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['mb-4'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                open: open,
                getRootProps: getRootProps,
                getInputProps: getInputProps,
            };
        },
        props: {},
        emits: {},
    });
}
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
    emits: {},
});
export default {};
;
//# sourceMappingURL=BaseDropZone.vue.js.map