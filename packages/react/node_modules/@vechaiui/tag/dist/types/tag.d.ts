import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
export interface TagCloseButtonProps extends DefaultProps, React.HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    iconClassName?: string;
}
export declare const TagCloseButton: React.ForwardRefExoticComponent<TagCloseButtonProps & React.RefAttributes<HTMLButtonElement>>;
export interface TagLabelProps extends DefaultProps, React.HTMLAttributes<HTMLSpanElement> {
}
export declare const TagLabel: React.FC<TagLabelProps>;
interface ITagProps extends DefaultProps {
    color?: string;
    variant?: "outline" | "solid" | "light";
    size?: "sm" | "md" | "lg" | "xl";
}
export interface TagProps extends React.HTMLAttributes<HTMLDivElement>, ITagProps {
}
export declare const Tag: React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLDivElement>>;
export {};
