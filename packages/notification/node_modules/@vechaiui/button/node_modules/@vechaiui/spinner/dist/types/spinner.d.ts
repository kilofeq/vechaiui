import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
export interface ISpinProps extends DefaultProps {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
}
export interface SpinProps extends React.HTMLAttributes<SVGSVGElement>, ISpinProps {
}
export declare const Spinner: React.ForwardRefExoticComponent<SpinProps & React.RefAttributes<SVGSVGElement>>;
