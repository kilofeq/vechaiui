import * as React from "react";
import { InputProps } from "./input";
import { InputGroup, InputGroupProps } from "../input-group";
import { InputLeftAddon, InputRightAddon, InputAddonProps } from "../input-addon";
import { InputLeftElement, InputRightElement, InputElementProps } from "../input-element";
interface Input extends React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLElement>> {
    Group: typeof InputGroup;
    LeftAddon: typeof InputLeftAddon;
    RightAddon: typeof InputRightAddon;
    LeftElement: typeof InputLeftElement;
    RightElement: typeof InputRightElement;
}
declare const Input: Input;
export type { InputProps, InputGroupProps, InputAddonProps, InputElementProps };
export { Input };
