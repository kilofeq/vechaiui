import * as React from "react";
import { ButtonProps } from "./button";
type OmittedProps = "leftIcon" | "rightIcon" | "loadingText";
interface IIconButtonProps extends Omit<ButtonProps, OmittedProps> {
    /**
     * The icon to be used in the button.
     */
    icon?: React.ReactElement;
}
export interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement>, IIconButtonProps {
    /**
     * A11y: A label that describes the button
     */
    "aria-label"?: string;
}
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
