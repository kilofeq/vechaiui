import * as React from "react";
import { ButtonProps } from "./button";
import { ButtonGroup, ButtonGroupProps } from "./button-group";
import { IconButton, IconButtonProps } from "./icon-button";
interface Button extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>> {
    Group: typeof ButtonGroup;
}
declare const Button: Button;
export type { ButtonProps, ButtonGroupProps, IconButtonProps };
export { Button, ButtonGroup, IconButton };
