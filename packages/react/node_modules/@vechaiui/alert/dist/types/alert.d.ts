import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
interface IAlertCloseButtonProps extends DefaultProps {
}
export interface AlertCloseButtonProps extends React.HTMLAttributes<HTMLButtonElement>, IAlertCloseButtonProps {
}
export declare const AlertCloseButton: React.ForwardRefExoticComponent<AlertCloseButtonProps & React.RefAttributes<HTMLButtonElement>>;
interface IAlertProps extends DefaultProps {
    color?: string;
    /** Controls alert appearance */
    variant?: "subtle" | "solid" | "left-accent";
}
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, IAlertProps {
}
export declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
export {};
