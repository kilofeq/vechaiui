import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
import { CheckboxProps } from "./checkbox";
export interface CheckboxGroupProps extends DefaultProps {
    /**
     * The id of the checkbox group.
     */
    id?: CheckboxProps["id"];
    /**
     * The name of the checkbox group. This prop is passed to each checbox
     */
    name?: CheckboxProps["name"];
    /**
     * The content of the checkbox group. Must be the `Checkbox` component
     */
    children?: React.ReactNode;
    /**
     * The initial value of the checkbox group
     */
    defaultValue?: Array<CheckboxProps["value"]>;
    /**
     * The value of the checkbox group
     */
    value?: Array<CheckboxProps["value"]>;
    /**
     * The callback fired when any children Checkbox is checked or unchecked
     */
    onChange?: (value: Array<CheckboxProps["value"]>) => void;
    /**
     * If `true`, the checkboxes will aligned horizontally.
     */
    inline?: boolean;
    size?: CheckboxProps["size"];
    color?: CheckboxProps["color"];
}
export declare const CheckboxGroup: React.ForwardRefExoticComponent<CheckboxGroupProps & React.RefAttributes<HTMLDivElement>>;
