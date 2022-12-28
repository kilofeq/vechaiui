import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
interface IFormLabelProps extends DefaultProps {
    disabled?: boolean;
    children?: React.ReactNode;
    htmlFor?: string;
}
export interface FormLabelProps extends React.HTMLAttributes<HTMLLabelElement>, IFormLabelProps {
}
export declare const FormLabel: React.ForwardRefExoticComponent<FormLabelProps & React.RefAttributes<HTMLLabelElement>>;
export declare const RequiredIndicator: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
export {};
