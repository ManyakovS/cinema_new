import { computed } from "vue";
export const useTruncateFileName = (filename) => {
    const truncatedFileName = computed(() => {
        const [name, format] = filename.split(/\.(?=[^\.]+$)/);
        return { name, format };
    });
    return { truncatedFileName };
};
//# sourceMappingURL=use-truncate-file-name.js.map