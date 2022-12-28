import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
interface ICheckboxProps<T = HTMLInputElement> extends DefaultProps {
    disabled?: React.InputHTMLAttributes<T>["disabled"];
    invalid?: boolean;
    required?: React.InputHTMLAttributes<T>["required"];
    readOnly?: React.InputHTMLAttributes<T>["readOnly"];
    indeterminate?: boolean;
    /**
     * If `true`, the checkbox will be initially checked.
     */
    defaultChecked?: boolean;
    /**
     * If `true`, the checkbox will be checked.
     * You'll need to pass `onChange` to update it's value (since it's now controlled)
     */
    checked?: boolean;
    id?: string;
    name?: string;
    value?: string | number;
    color?: string;
    size?: "sm" | "md" | "lg" | "xl";
    /**
     * A11y: A label that describes the input
     */
    "aria-label"?: string;
    /**
     * A11y: The id of the element that describes the input
     */
    "aria-describedby"?: string;
    /**
     * A11y: Refers to the id of the element that labels the checkbox element.
     */
    "aria-labelledby"?: string;
    /**
     * The children is the label to be displayed to the right of the checkbox.
     */
    children?: React.ReactNode;
    /**
     * The callback invoked when the checked state of the `Checkbox` changes..
     */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export type CheckboxProps = ICheckboxProps & React.HTMLAttributes<HTMLInputElement>;
export declare const Checkbox: React.ForwardRefExoticComponent<ICheckboxProps<HTMLInputElement> & React.HTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
export {};
