import { useToastOptions } from "@vechaiui/toast";
type OmittedTypes = "title" | "closeable" | "closeIcon" | "onUndo" | "undoText" | "description";
export interface MessageProps extends Omit<useToastOptions, OmittedTypes> {
}
export declare const useMessage: () => ({ position, duration, render, ...rest }: useToastOptions) => any;
export {};
