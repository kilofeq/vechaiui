import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
import { ButtonProps } from "./button";
interface IButtonGroupProps extends DefaultProps {
    /**
     * If `true`, the borderRadius of button that are direct children will be altered
     * to look flushed together
     */
    attached?: boolean;
    disabled?: boolean;
    size?: ButtonProps["size"];
    /** Controls all wrapped button appearance */
    variant?: ButtonProps["variant"];
    color?: ButtonProps["color"];
    children?: React.ReactNode;
}
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement>, IButtonGroupProps {
}
export declare const ButtonGroup: React.ForwardRefExoticComponent<ButtonGroupProps & React.RefAttributes<HTMLDivElement>>;
export {};
