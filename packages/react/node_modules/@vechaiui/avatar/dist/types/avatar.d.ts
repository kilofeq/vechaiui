import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
interface IAvatarProps extends DefaultProps {
    name?: string;
    bordered?: boolean;
    children?: React.ReactNode;
    src?: string;
    srcSet?: string;
    loading?: "eager" | "lazy";
    onError?: () => void;
    getInitials?: (name: string) => string;
    isFullName?: boolean;
    size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
}
export interface AvatarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onError">, IAvatarProps {
    iconLabel?: string;
}
export declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>;
export {};
