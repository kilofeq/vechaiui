import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
interface IDotProps extends DefaultProps {
    color?: string;
    variant?: "outline" | "solid";
    size?: "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    bordered?: boolean;
}
export interface DotProps extends React.HTMLAttributes<HTMLSpanElement>, IDotProps {
}
export declare const Dot: React.ForwardRefExoticComponent<DotProps & React.RefAttributes<HTMLSpanElement>>;
export {};
