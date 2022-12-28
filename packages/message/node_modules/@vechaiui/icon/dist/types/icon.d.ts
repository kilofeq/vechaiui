import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
export interface IconProps extends DefaultProps {
    as?: React.ElementType;
    inline?: boolean;
    role?: string;
    color?: string;
    /**
     * The accessible label for the icon. This label will be visually hidden but announced to screen
     * reader users, similar to `alt` text for `img` tags.
     */
    label: string;
}
export declare const Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<any>>;
