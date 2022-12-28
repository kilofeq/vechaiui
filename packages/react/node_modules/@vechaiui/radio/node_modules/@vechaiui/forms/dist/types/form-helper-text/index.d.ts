import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
interface IFormHelperTextProps extends DefaultProps {
    children?: React.ReactNode;
}
export interface FormHelperTextProps extends React.HTMLAttributes<HTMLParagraphElement>, IFormHelperTextProps {
}
export declare const FormHelperText: React.ForwardRefExoticComponent<FormHelperTextProps & React.RefAttributes<HTMLParagraphElement>>;
export {};
