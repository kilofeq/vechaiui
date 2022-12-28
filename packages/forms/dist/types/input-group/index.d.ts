import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
import { InputProps } from "../input/input";
interface IInputGroupProps extends DefaultProps {
    size?: InputProps["size"];
    children?: React.ReactNode;
}
export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement>, IInputGroupProps {
}
export declare const InputGroup: React.ForwardRefExoticComponent<InputGroupProps & React.RefAttributes<HTMLDivElement>>;
export {};
