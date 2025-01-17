import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
import { InputProps } from "../input/input";
type Placement = "left" | "right";
export interface IInputAddonProps extends DefaultProps {
    placement?: Placement;
    size?: InputProps["size"];
}
export interface InputAddonProps extends React.HTMLAttributes<HTMLDivElement>, IInputAddonProps {
}
export declare const InputLeftAddon: React.FC<InputAddonProps>;
export declare const InputRightAddon: React.FC<InputAddonProps>;
export {};
