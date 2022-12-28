import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
export interface SwitchProps<T = HTMLInputElement> extends DefaultProps {
    disabled?: React.InputHTMLAttributes<T>["disabled"];
    invalid?: boolean;
    /**
     * If `true`, the switch will be initially checked.
     */
    defaultChecked?: boolean;
    /**
     * If `true`, the switch will be checked.
     * You'll need to pass `onChange` to update it's value (since it's now controlled)
     */
    checked?: boolean;
    /**
     * The callback invoked when the checked state of the `switch` changes..
     */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    id?: string;
    name?: string;
    value?: string | number;
    size?: "sm" | "md" | "lg" | "xl";
    color?: string;
    /**
     * A11y: A label that describes the input
     */
    "aria-label"?: string;
    /**
     * A11y: The id of the element that describes the input
     */
    "aria-describedby"?: string;
    /**
     * A11y: Refers to the id of the element that labels the switch element.
     */
    "aria-labelledby"?: string;
    /**
     * The children is the label to be displayed to the right of the switch.
     */
    children?: React.ReactNode;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
