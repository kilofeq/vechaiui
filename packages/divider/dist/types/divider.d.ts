import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
interface IDividerProps extends DefaultProps {
    orientation?: "horizontal" | "vertical";
}
export interface DividerProps extends React.HTMLAttributes<HTMLHRElement>, IDividerProps {
}
export declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLHRElement>>;
export {};
