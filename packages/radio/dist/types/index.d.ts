import * as React from "react";
import { RadioProps } from "./radio";
import { RadioGroup, RadioGroupProps } from "./radio-group";
interface Radio extends React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>> {
    Group: typeof RadioGroup;
}
declare const Radio: Radio;
export type { RadioProps, RadioGroupProps };
export { Radio, RadioGroup };
