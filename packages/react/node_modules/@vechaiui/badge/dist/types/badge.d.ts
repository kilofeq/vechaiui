import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
interface IBadgeProps extends DefaultProps {
    color?: string;
    variant?: "solid" | "light";
    size?: "sm" | "md";
    hasShadow?: boolean;
}
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, IBadgeProps {
}
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;
export {};
