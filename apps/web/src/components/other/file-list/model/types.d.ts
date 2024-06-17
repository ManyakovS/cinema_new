import { FileResource } from "src/stores/types/schema";
export declare enum FileItemActions {
    DELETE = "delete"
}
export interface FileItemProps {
    file: FileResource;
    readonly?: boolean;
    actions?: FileItemActions[];
    fileFullWidth?: boolean;
    convertTimeZone?: boolean;
    highlightedText?: string[];
    hideDate?: boolean;
    hideSize?: boolean;
}
export interface FileListProps extends Pick<FileItemProps, "readonly" | "actions" | "fileFullWidth" | "highlightedText" | "hideDate" | "hideSize"> {
    files: FileResource[];
    fileIds: number[];
    imageAsRow?: boolean;
}
//# sourceMappingURL=types.d.ts.map