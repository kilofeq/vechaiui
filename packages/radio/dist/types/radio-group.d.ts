import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
import { RadioProps } from "./radio";
interface IRadioGroupProps extends DefaultProps {
    /**
     * The id of the radio group.
     */
    id?: string;
    /**
     * The name of the radio group. This prop is passed to each checbox
     */
    name?: string;
    /**
     * The content of the radio group. Must be the `Radio` component
     */
    children?: React.ReactNode;
    /**
     * The initial value of the radio group
     */
    defaultValue?: RadioProps["value"];
    /**
     * The value of the radio group
     */
    value?: RadioProps["value"];
    size?: RadioProps["size"];
    color?: RadioProps["color"];
    /**
     * The callback fired when any children Radio is checked or unchecked
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: RadioProps["value"]) => void;
    /**
     * If `true`, the radio will aligned horizontally.
     */
    inline?: boolean;
}
type RadioGroupElement = {
    focus: () => void;
} | undefined;
export type RadioGroupProps = IRadioGroupProps;
export declare const RadioGroup: React.ForwardRefExoticComponent<IRadioGroupProps & React.RefAttributes<RadioGroupElement>>;
export {};
