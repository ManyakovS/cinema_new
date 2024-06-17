import { computed } from "vue";

export const useTruncateFileName = (filename: string) => {
  const truncatedFileName = computed((): { name: string; format: string } => {
    const [name, format] = filename.split(/\.(?=[^\.]+$)/);
    return { name, format };
  });

  return { truncatedFileName };
};
