import { Position } from "@vechaiui/toasted-notes";
import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
interface IToast extends DefaultProps {
    /**
     * The title of the toast.
     */
    title?: string;
    /**
     * If `true` adds a close button to the toast.
     */
    closeable?: boolean;
    /**
     * Callback function to close the toast.
     */
    onClose?: () => void;
    /**
     * Callback function to undo the toast.
     */
    onUndo?: () => void;
    /**
     * The description of the toast
     */
    description?: string;
    /**
     * The undo text of the toast
     */
    undoText?: string;
    /**
     * Duration before dismiss in milliseconds, or `null` to never dismiss.
     */
    duration?: number | null;
    /**
     * One of toasted-notes positions.
     */
    position?: keyof typeof Position;
    /**
     * The message of the toast
     */
    message?: string;
    /**
     * The status of the toast
     */
    status?: "info" | "success" | "error" | "warning";
    /**
     * Custom icon
     */
    icon?: React.ReactNode;
    /**
     * Custom close icon
     */
    closeIcon?: React.ReactNode;
}
interface RenderOption {
    render?: (props: {
        onClose: (id: string) => void;
        id: string;
    }) => React.ReactNode;
}
export type useToastOptions = IToast & RenderOption;
export declare function createToast(Comp: React.ElementType): () => ({ position, duration, render, ...rest }: useToastOptions) => any;
export {};
