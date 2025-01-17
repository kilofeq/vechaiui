import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
import { InputProps } from "../input/input";
type Placement = "left" | "right";
interface IInputElementProps extends DefaultProps {
    placement?: Placement;
    size?: InputProps["size"];
    children?: React.ReactNode;
    disabledPointerEvents?: boolean;
}
export interface InputElementProps extends React.HTMLAttributes<HTMLDivElement>, IInputElementProps {
}
export declare const InputLeftElement: React.ForwardRefExoticComponent<InputElementProps & React.RefAttributes<HTMLDivElement>>;
export declare const InputRightElement: React.ForwardRefExoticComponent<InputElementProps & React.RefAttributes<HTMLDivElement>>;
export {};
