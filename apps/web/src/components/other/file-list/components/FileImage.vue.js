import { computed } from 'vue';
import { useTruncateFileName } from '@/utils/hooks/use-truncate-file-name';
import { getImagePath } from '@/utils/functions/get-image-path';
import { FileItemActions } from '../model/types';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = withDefaults(defineProps(), {
    readonly: false,
    fileFullWidth: true,
    actions: () => [FileItemActions.DELETE],
    highlightedText: () => [],
});
const emit = defineEmits();
const { truncatedFileName } = useTruncateFileName(props.file.name);
const fileNameMaxWidth = computed(() => {
    return props.actions.length > 1 ? '72px' : '102px';
});
const handleClick = (e) => {
    const { file } = props;
};
const __VLS_withDefaultsArg = (function (t) { return t; })({
    readonly: false,
    fileFullWidth: true,
    actions: () => [FileItemActions.DELETE],
    highlightedText: () => [],
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (__VLS_ctx.handleClick) }, ...{ class: ("file-image") }, href: ((__VLS_ctx.getImagePath(__VLS_ctx.file.path))), target: ("_blank"), ...{ style: (({ '--file-image-name-max-width': __VLS_ctx.fileNameMaxWidth })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("file-image__image") }, src: ((__VLS_ctx.getImagePath(__VLS_ctx.file.path))), });
    [handleClick, getImagePath, getImagePath, file, file, fileNameMaxWidth,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("file-image__text-container row justify-between no-wrap") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("file-image__file-name text-caption text-weight-medium items-center hidden-sm-max") }, });
    if (__VLS_ctx.highlightedText.length) {
        const __VLS_0 = {}
            .HighlightedText;
        ({}.HighlightedText);
        __VLS_components.HighlightedText;
        [HighlightedText,];
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("ellipsis limited-width") }, search: ((__VLS_ctx.highlightedText)), text: ((__VLS_ctx.truncatedFileName.name)), }));
        const __VLS_2 = __VLS_1({ ...{ class: ("ellipsis limited-width") }, search: ((__VLS_ctx.highlightedText)), text: ((__VLS_ctx.truncatedFileName.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{ class: ("ellipsis limited-width") }, search: ((__VLS_ctx.highlightedText)), text: ((__VLS_ctx.truncatedFileName.name)), }));
        [highlightedText, highlightedText, truncatedFileName,];
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ellipsis") }, });
        (__VLS_ctx.truncatedFileName.name);
        [truncatedFileName,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-no-wrap") }, });
    (`.${__VLS_ctx.truncatedFileName.format}`);
    [truncatedFileName,];
    if (!__VLS_ctx.readonly) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("file-image__control-group") }, });
        if (__VLS_ctx.actions.includes(__VLS_ctx.FileItemActions.DELETE) && !__VLS_ctx.readonly) {
            const __VLS_6 = {}
                .ButtonIconWithTooltip;
            ({}.ButtonIconWithTooltip);
            __VLS_components.ButtonIconWithTooltip;
            [ButtonIconWithTooltip,];
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClick': {} }, ...{ class: ("file-image__control") }, icon: ("mdi-close"), color: ("white"), tooltipText: ("Удалить"), }));
            const __VLS_8 = __VLS_7({ ...{ 'onClick': {} }, ...{ class: ("file-image__control") }, icon: ("mdi-close"), color: ("white"), tooltipText: ("Удалить"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            ({}({ ...{ 'onClick': {} }, ...{ class: ("file-image__control") }, icon: ("mdi-close"), color: ("white"), tooltipText: ("Удалить"), }));
            let __VLS_12;
            const __VLS_13 = {
                onClick: (...[$event]) => {
                    if (!((!__VLS_ctx.readonly)))
                        return;
                    if (!((__VLS_ctx.actions.includes(__VLS_ctx.FileItemActions.DELETE) && !__VLS_ctx.readonly)))
                        return;
                    __VLS_ctx.emit('remove', __VLS_ctx.file);
                    [file, readonly, readonly, actions, FileItemActions, emit,];
                }
            };
            const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
            let __VLS_9;
            let __VLS_10;
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['file-image'];
        __VLS_styleScopedClasses['file-image__image'];
        __VLS_styleScopedClasses['file-image__text-container'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['no-wrap'];
        __VLS_styleScopedClasses['file-image__file-name'];
        __VLS_styleScopedClasses['text-caption'];
        __VLS_styleScopedClasses['text-weight-medium'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['hidden-sm-max'];
        __VLS_styleScopedClasses['ellipsis'];
        __VLS_styleScopedClasses['limited-width'];
        __VLS_styleScopedClasses['ellipsis'];
        __VLS_styleScopedClasses['text-no-wrap'];
        __VLS_styleScopedClasses['file-image__control-group'];
        __VLS_styleScopedClasses['file-image__control'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                getImagePath: getImagePath,
                FileItemActions: FileItemActions,
                emit: emit,
                truncatedFileName: truncatedFileName,
                fileNameMaxWidth: fileNameMaxWidth,
                handleClick: handleClick,
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
//# sourceMappingURL=FileImage.vue.js.map