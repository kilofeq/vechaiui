import * as React from "react";
import { CheckboxProps } from "./checkbox";
import { CheckboxGroup, CheckboxGroupProps } from "./checkbox-group";
interface Checkbox extends React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>> {
    Group: typeof CheckboxGroup;
}
declare const Checkbox: Checkbox;
export type { CheckboxProps, CheckboxGroupProps };
export { Checkbox, CheckboxGroup };
